// Landing-page data: hero, entry tiles, about meta, approach pillars.
// Paths are relative to src/assets/images/ — resolved at build time via
// image-resolver.ts into Astro <Image> srcset + AVIF/WebP variants.

export interface EntryTile {
  n: string;
  title: string;
  desc: string;
  href: string;
  img: string;
  alt: string;
}

export interface ApproachPillar {
  n: string;
  title: string;
  body: string;
}

export const HERO = {
  src: 'visual-merchandising/everyday/spring-jaune/IMG_20250320_094902_DxO_alt.png',
  alt: 'H&M Dam floor wide — plinth, racks, escalator sightline',
} as const;

export const TILES: readonly EntryTile[] = [
  {
    n: '01',
    title: 'Visual Merchandising',
    desc: 'H&M Dam flagship, French premium positioning, luxury collaboration. 1,200 m² six-floor flagship.',
    href: '/visual-merchandising',
    img: 'visual-merchandising/everyday/spring-blue/IMG_20250424_093525_DxO-Modifier.png',
    alt: 'Visual Merchandising',
  },
  {
    n: '02',
    title: 'Styling Expert',
    desc: 'Mannequin styling, close-up detail, garment work. The inch in front of the customer.',
    href: '/styling-expert',
    img: 'styling-expert/IMG_0822_DxO.png',
    alt: 'Styling Expert',
  },
  {
    n: '03',
    title: 'Outdoor & Landscape',
    desc: 'Highlands, Calanques, Alps. Photography practice.',
    href: '/outdoor',
    img: 'outdoor/highlands/IMG_0864.jpg',
    alt: 'Outdoor & Landscape',
  },
] as const;

export const ABOUT_PORTRAIT = {
  src: 'about/portrait.jpg',
  alt: 'Portrait of Lucas Rageot',
} as const;

export const APPROACH_PILLARS: readonly ApproachPillar[] = [
  {
    n: '01',
    title: 'Flagship execution under traffic',
    body: 'Holding standards on the floor while customers move through it. Every fixture, mannequin, rehang sequenced so the floor is never closed, never broken and always inspiring.',
  },
  {
    n: '02',
    title: 'HQ guidelines, local floor',
    body: 'A planogram is a starting point. The job is reading the room (light, traffic, customer profile) and adapting the brief without breaking the brand.',
  },
  {
    n: '03',
    title: 'True to the floor',
    body: 'A window or a focal table earns its place when it carries one clear idea: a season, a material, a silhouette. If it doesn’t help the idea, it has to go.',
  },
] as const;

export const ABOUT_META = [
  { label: 'Based', value: 'Haarlem, NL' },
  { label: 'Languages', value: 'French (native), English C1, Dutch (basic)' },
  { label: 'Background', value: 'VM, Premium Menswear, Musician' },
] as const;
