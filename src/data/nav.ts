// Navigation model. Order = display order in nav and mobile burger.
// `slug` is the page key (matches Astro file name without extension, sans /).
// `current` prop in TopNav matches against this slug.
//
// The order changes based on PROFILE:
//   - 'vm'      → Home, Visual Merchandising, Styling Expert, Outdoor, Other Work
//   - 'styling' → Home, Styling Expert, Visual Merchandising, Outdoor, Other Work

import { IS_STYLING_PROFILE } from './profile';

export type PageEntry = {
  slug: string;
  href: string;
  label: string;
  /** Short label for the mobile burger numbering (max ~22 chars). */
  shortLabel?: string;
};

const HOME: PageEntry              = { slug: 'index', href: '/', label: 'Home' };
const VM: PageEntry                = { slug: 'visual-merchandising', href: '/visual-merchandising', label: 'Visual Merchandising' };
const STYLING: PageEntry           = { slug: 'styling-expert', href: '/styling-expert', label: 'Styling Expert' };
const OUTDOOR: PageEntry           = { slug: 'outdoor', href: '/outdoor', label: 'Outdoor' };
const ARCHIVE: PageEntry           = { slug: 'archive', href: '/archive', label: 'Other Work' };

export const PAGES: readonly PageEntry[] = IS_STYLING_PROFILE
  ? [HOME, STYLING, VM, OUTDOOR, ARCHIVE]
  : [HOME, VM, STYLING, OUTDOOR, ARCHIVE];

/** Subset shown in the desktop top-nav (everything except Home). */
export const TOPNAV_PAGES = PAGES.slice(1);
