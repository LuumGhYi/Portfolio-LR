// Navigation model. Order = display order in nav and mobile burger.
// `slug` is the page key (matches Astro file name without extension, sans /).
// `current` prop in TopNav matches against this slug.

export type PageEntry = {
  slug: string;
  href: string;
  label: string;
  /** Short label for the mobile burger numbering (max ~22 chars). */
  shortLabel?: string;
};

export const PAGES: readonly PageEntry[] = [
  { slug: 'index', href: '/', label: 'Index' },
  { slug: 'visual-merchandising', href: '/visual-merchandising', label: 'Visual Merchandising' },
  { slug: 'styling-expert', href: '/styling-expert', label: 'Styling Expert' },
  { slug: 'outdoor', href: '/outdoor', label: 'Outdoor' },
  { slug: 'archive', href: '/archive', label: 'Other Work' },
] as const;

/** Subset shown in the desktop top-nav (everything except Index). */
export const TOPNAV_PAGES = PAGES.slice(1);
