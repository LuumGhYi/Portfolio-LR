// Visual Merchandising — H&M Dam flagship + Luxury collab.

import type { Row } from './outdoor';

const VM = 'visual-merchandising/';

export const VM_HEAD = {
  title: 'Inspire people to find their own voices',
  meta: ['H&M Dam', 'Olly Gan', 'Le Slip Français', 'Luxury collab'],
  intro:
    "Across H&M's Amsterdam flagship, French premium menswear floors, I strive to entice customers to explore who they are.",
} as const;

export const VM_DAM_HEAD = {
  eyebrow: '01 · H&M Flagship · Amsterdam Dam',
  title: 'H&M Flagship\nAmsterdam, Dam',
  meta: ['6 floors, 1,200 m²', 'VM team of 4 to 6', 'Two to four rehangs per month'],
  intro: "Leading the eye through a challenging layout and multiple-entry customer tracks while keeping a coherent and cohesive store is key to making their journey feel entirely intuitive and personal.",
} as const;

export const VM_ROWS: readonly Row[] = [
  {
    variant: 'full',
    className: 'mb-vrhythm-96',
    items: [{
      kind: 'figure',
      src: VM + 'everyday/spring-blue/IMG_20250424_094814_DxO.png',
      alt: 'H&M Dam flagship, arched stone façade with spring window mannequins',
      className: 'photo--hero photo--focus-bottom',
      cap: '01 · Façade',
      sub: 'Dam square exterior.',
      priority: true,
    }],
  },
  {
    variant: '50-50',
    className: 'mt-vrhythm-96',
    items: [
      { kind: 'figure', src: VM + 'everyday/spring-blue/IMG_20250424_092717_DxO-Modifier.png', alt: 'Spring Blue window, alternate composition', aspect: '4/3', cap: '02 · Spring Blue', sub: 'Window from the street.' },
      { kind: 'figure', src: VM + 'everyday/spring-blue/IMG_20250424_094639_DxO.png', alt: 'Spring Blue floor rotation', aspect: '4/3', cap: '03 · Spring Blue', sub: 'Floor rotation.' },
    ],
  },
  {
    variant: '65-35',
    items: [
      { kind: 'figure', src: VM + 'everyday/spring-blue/IMG_20250424_093525_DxO-Modifier.png', alt: 'Spring Blue mannequins, façade-side window composition', aspect: '4/3', cap: '05 · Spring Blue', sub: 'Window composition.' },
      { kind: 'rowText', caption: 'Spring blue · floor', title: 'Window programs on a two-week cycle', body: 'From ten up to thirty mannequins, choosing the best outfits, preping, ironing, dressing, this is where the fun begins. Each story held the floor for two weeks, then made room for the next register.' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: VM + 'everyday/spring-jaune/IMG_20250320_100010_DxO.jpg', alt: 'Spring Yellow window from the street, yellow tones', aspect: '4/3', cap: '06 · Spring Yellow', sub: 'Yellow window, side.' },
      { kind: 'figure', src: VM + 'everyday/spring-jaune/IMG_20250320_100604_DxO.png', alt: 'Spring Yellow additional floor moment', aspect: '4/3', cap: '07 · Spring Yellow', sub: 'Floor continuation.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: VM + 'everyday/spring-rose/IMG_20250410_094307_DxO-Modifier.png', alt: 'Spring Rose composition, soft pink', aspect: '3/4', cap: '08 · Spring Rose', sub: 'Soft register.' },
      { kind: 'figure', src: VM + 'everyday/spring-rose/IMG_20250410_095437_DxO.png', alt: 'Spring Rose alternate composition', aspect: '3/4', cap: '09 · Spring Rose', sub: 'Alternate composition.' },
      { kind: 'figure', src: VM + 'everyday/spring-rose/IMG_20250410_094601_DxO.png', alt: 'Spring Rose rack story, pink and pleated', aspect: '3/4', cap: '10 · Spring Rose', sub: 'Pink, pleated, soft.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: VM + 'everyday/spring-harissa/IMG_20250515_094440_DxO_alt-modifier.png', alt: 'Spring Harissa composition, warm spice', aspect: '3/4', cap: '11 · Spring Harissa', sub: 'Warm register.' },
      { kind: 'figure', src: VM + 'everyday/spring-harissa/IMG_20250515_094629_DxO_alt.png', alt: 'Spring Harissa secondary view', aspect: '3/4', cap: '12 · Spring Harissa', sub: 'Secondary view.' },
      { kind: 'figure', src: VM + 'everyday/spring-harissa/IMG_20250515_094704_DxO_alt.png', alt: 'Spring Harissa floor wider rack', aspect: '3/4', cap: '13 · Spring Harissa', sub: 'Wider read.' },
    ],
  },
  {
    variant: '40-60',
    items: [
      { kind: 'rowText', caption: 'Preppy Trench · January', title: 'The floor resets every morning', body: 'Start early morning before opening so every day starts with a fresh, clean look. Assess what needs adjusting with the selling team. Keep every room, story and trend coherent throughout the day as customers shop.' },
      { kind: 'figure', src: VM + 'everyday/preppy-trench/IMG_20250115_102616_DxO.png', alt: 'Preppy Trench racks, multiple stories on the floor', aspect: '4/3', cap: '14 · Preppy Trench', sub: 'Multiple racks on the floor.' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: VM + 'everyday/preppy-trench/IMG_20250115_103003_DxO.png', alt: 'Preppy Trench secondary floor view', aspect: '4/3', cap: '15 · Preppy Trench', sub: 'Continuation of the floor read.' },
      { kind: 'figure', src: VM + 'everyday/preppy-blue/IMG_20250307_093241_DxO.png', alt: 'Preppy Blue floor composition', aspect: '4/3', cap: '16 · Preppy Blue', sub: 'Blue register.' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: VM + 'everyday/noir-soiree/IMG_20241112_094036_DxO.png', alt: 'Noir Soirée four-mannequin grouping, evening floor', aspect: '4/3', cap: '17 · Noir Soirée', sub: 'Evening grouping, four-way composition.' },
      { kind: 'figure', src: VM + 'everyday/noir-soiree/IMG_20241112_094357_DxO.png', alt: 'Noir Soirée alternate floor moment', aspect: '4/3', cap: '18 · Noir Soirée', sub: 'Alternate read of the evening register.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: VM + 'divided/story-1/IMG_0793_DxO.jpg', alt: 'Divided story 1 floor opening', aspect: '3/4', cap: '19 · Divided · 1', sub: 'Floor opening, daylight.' },
      { kind: 'figure', src: VM + 'divided/story-1/IMG_0797_DxO.jpg', alt: 'Divided story 1 rack continuation', aspect: '3/4', cap: '20 · Divided · 1', sub: 'Rack continuation.' },
      { kind: 'figure', src: VM + 'divided/story-1/IMG_0788_DxO-Modifier.png', alt: 'Divided story 1 closer composition', aspect: '3/4', cap: '21 · Divided · 1', sub: 'Closer composition.' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: VM + 'divided/story-2/IMG_0802_DxO.jpg', alt: 'Divided story 2 floor view', aspect: '4/3', cap: '22 · Divided · 2', sub: 'Sport-luxe register, floor view.' },
      { kind: 'figure', src: VM + 'divided/story-2/IMG_0815_DxO.jpg', alt: 'Divided story 2 styling pair', aspect: '4/3', cap: '23 · Divided · 2', sub: 'Story closing.' },
    ],
  },
] as const;

export interface CollabPhoto {
  src: string;
  alt: string;
  cap: string;
  sub: string;
}

export const VM_COLLAB = {
  eyebrow: '02 · Luxury collaboration',
  title: 'Chanel boutique · Amsterdam',
  meta: 'Chanel · Amsterdam · seasonal rotation',
  body: [
    "Assisted on Chanel's overnight store set-up at the Amsterdam boutique. One boutique one story, each and every boutique as their own motto for Amsterdam it goes like 'casual meet sophistication yala yala' ",
    'The VM needs to reflect what the brans stand for. Entering the world of Chanel fashion promises every woman an enduring, unique bond of trust and timeless moments of wonder.',
  ],
  note: 'Photos shared with permission. Further references available on request.',
  photos: [
    { src: VM + 'collab-chanel/chanel-amsterdam-01.jpeg', alt: 'Chanel Amsterdam boutique, mannequin styling for the A/W rotation', cap: '01 · Mannequin', sub: 'A/W rotation styling.' },
    { src: VM + 'collab-chanel/chanel-amsterdam-02.jpeg', alt: 'Chanel Amsterdam boutique, accessories display detail', cap: '02 · Accessories', sub: 'Display detail.' },
    { src: VM + 'collab-chanel/chanel-amsterdam-03.jpeg', alt: 'Chanel Amsterdam boutique, vitrine alignment', cap: '03 · Vitrine', sub: 'Alignment pass.' },
    { src: VM + 'collab-chanel/chanel-amsterdam-04.jpeg', alt: 'Chanel Amsterdam boutique, floor composition', cap: '04 · Floor', sub: 'Composition wider read.' },
    { src: VM + 'collab-chanel/chanel-amsterdam-05.jpeg', alt: 'Chanel Amsterdam boutique, plinth detail', cap: '05 · Plinth', sub: 'Detail view.' },
    { src: VM + 'collab-chanel/chanel-amsterdam-06.jpeg', alt: 'Chanel Amsterdam boutique, secondary display', cap: '06 · Secondary', sub: 'Display in context.' },
    { src: VM + 'collab-chanel/chanel-amsterdam-07.jpeg', alt: 'Chanel Amsterdam boutique, closing arrangement', cap: '07 · Closing', sub: 'Final arrangement.' },
  ] as readonly CollabPhoto[],
} as const;

export const VM_NOTE =
  "All photography depicts visual merchandising work executed at H&M Flagship Amsterdam Dam. Brand marks not displayed out of respect for the company's visual standards. Close-up mannequin styling on the Styling Expert page.";
