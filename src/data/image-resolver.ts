import type { ImageMetadata } from 'astro';

// Build-time eager glob: every JPG/JPEG/PNG in src/assets/images/ gets imported
// so we can look it up by relative path string. Avoids writing 111 individual
// `import` statements across the data files.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png}',
  { eager: true }
);

/**
 * Resolve a path like 'outdoor/highlands/IMG_0864.jpg' (relative to
 * src/assets/images/) to an Astro ImageMetadata for use with <Image>.
 * Throws explicitly if the path doesn't match a real file, so typos surface
 * at build time rather than rendering a broken <img>.
 */
export function resolveImage(path: string): ImageMetadata {
  const key = `/src/assets/images/${path}`;
  const mod = modules[key];
  if (!mod) {
    const available = Object.keys(modules).slice(0, 5).join(', ');
    throw new Error(
      `[resolveImage] Image not found at ${key}. ` +
      `Available sample: ${available}…`
    );
  }
  return mod.default;
}
