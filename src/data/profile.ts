// Portfolio profile selector — read at build time from the PUBLIC_PROFILE env var.
// Two profiles are supported:
//
//   - 'vm'      → full portfolio with the Chanel Amsterdam collaboration block visible,
//                 "Visual Merchandiser" subtitle in the brand header and on the cover,
//                 Visual Merchandising listed first in the nav.
//   - 'styling' → safe portfolio without any mention of the Chanel collaboration,
//                 no role subtitle in the brand header or on the cover,
//                 Styling Expert listed first in the nav.
//
// When PUBLIC_PROFILE is not set (e.g. `npm run dev` without args), we default to 'vm'
// to preserve historic behaviour during local development.

const raw = (import.meta.env.PUBLIC_PROFILE ?? 'vm').toString().toLowerCase();

export type ProfileId = 'vm' | 'styling';
export const PROFILE: ProfileId = raw === 'styling' ? 'styling' : 'vm';

export const IS_VM_PROFILE = PROFILE === 'vm';
export const IS_STYLING_PROFILE = PROFILE === 'styling';
