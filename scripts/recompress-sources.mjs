#!/usr/bin/env node
// Recompresses every source image > THRESHOLD bytes under src/assets/images/.
// Caps width at MAX_WIDTH, re-encodes JPEGs at QUALITY, and keeps PNGs with
// transparency in place (but recompressed). Saves output in-place atomically.
//
// Run once after the initial Astro <Image> migration, or whenever a fresh
// uncompressed source lands in src/assets/images/.

import { readdir, stat, rename, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('src/assets/images');
const THRESHOLD = 3 * 1024 * 1024; // 3 MB
const MAX_WIDTH = 2560;
const QUALITY = 85;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function isImage(file) {
  return /\.(jpe?g|png)$/i.test(file);
}

async function hasTransparency(file) {
  const meta = await sharp(file).metadata();
  return meta.format === 'png' && (meta.hasAlpha === true || meta.channels === 4);
}

let scanned = 0, recompressed = 0, totalSavedBytes = 0;

for await (const file of walk(ROOT)) {
  if (!isImage(file)) continue;
  scanned++;
  const st = await stat(file);
  if (st.size <= THRESHOLD) continue;

  const ext = path.extname(file).toLowerCase();
  const isPng = ext === '.png';
  const tmp = file + '.tmp';

  const img = sharp(file).rotate();
  const meta = await img.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    img.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (isPng) {
    const transparent = await hasTransparency(file);
    if (transparent) {
      await img.png({ quality: QUALITY, compressionLevel: 9, palette: true }).toFile(tmp);
    } else {
      // Opaque PNG → keep PNG but heavy compression (palette indexed if possible).
      await img.png({ quality: QUALITY, compressionLevel: 9, palette: true }).toFile(tmp);
    }
  } else {
    await img.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toFile(tmp);
  }

  const tmpStat = await stat(tmp);
  if (tmpStat.size >= st.size) {
    // Recompression didn't shrink — keep original, drop tmp.
    await unlink(tmp);
    console.log(`= ${(st.size / 1024 / 1024).toFixed(2)} MB  (kept original — recompression didn't help) ${path.relative(ROOT, file)}`);
    continue;
  }

  await rename(tmp, file);
  const saved = st.size - tmpStat.size;
  totalSavedBytes += saved;
  recompressed++;
  console.log(
    `✓ ${(st.size / 1024 / 1024).toFixed(2)} MB → ${(tmpStat.size / 1024 / 1024).toFixed(2)} MB  ` +
    `(-${(saved / 1024 / 1024).toFixed(2)} MB)  ${path.relative(ROOT, file)}`
  );
}

console.log('');
console.log(`Scanned : ${scanned} images`);
console.log(`Recompressed : ${recompressed}`);
console.log(`Total saved : ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
