// Helpers to build schema.org JSON-LD payloads for the project pages.

import { SITE } from './site';
import { resolveImage } from './image-resolver';

interface GalleryImageRef {
  src: string;
  alt: string;
}

/** Build an `ImageGallery` payload from a list of (src, alt) pairs.
    Image srcs are paths relative to src/assets/images/ — they're resolved
    to their public fingerprinted URLs (Astro emits /_astro/<hash>.<format>)
    so search engines index the actual served assets. */
export function buildImageGallery(opts: {
  name: string;
  description: string;
  url: string;
  images: readonly GalleryImageRef[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: opts.name,
    description: opts.description,
    url: new URL(opts.url, SITE.baseUrl).toString(),
    author: { '@type': 'Person', name: SITE.name, url: SITE.baseUrl },
    associatedMedia: opts.images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: new URL(resolveImage(img.src).src, SITE.baseUrl).toString(),
      name: img.alt,
    })),
  };
}
