// Layout variants for ImageRow. Kept in a separate .ts file so the type can be
// imported by Astro pages and data modules without going through the .astro
// frontmatter parser.

export type ImageRowVariant =
  | 'full'
  | '3'
  | '50-50'
  | '65-35'
  | '40-60'
  | '60-40'
  | 'horizon-pair'
  | 'hero-triptych';
