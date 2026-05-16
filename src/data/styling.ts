import type { Row } from './outdoor';

const ROOT = 'styling-expert/';

export const STYLING_HEAD = {
  title: 'The way you say something says as much as what you say. An outfit works the same way',
  meta: ['Mannequin styling', 'Representative garment', 'Close-up detail'],
  intro:
    'Each piece comes from a lexical field. Texture works like tone of voice, colour like pitch. Patterns put the emphasis. Accessories punctuate and shoes end the sentence. The overall style sets the register.',
} as const;

export const STYLING_ROWS: readonly Row[] = [
  {
    variant: 'hero-triptych',
    className: 'image-row--full mb-vrhythm-96',
    items: [
      { kind: 'figure', src: ROOT + 'PXL_20260219_094514224.jpg', alt: 'Palm-print vest and braided belt detail', cap: '01 · Texture', sub: 'Palm vest, braided belt.', priority: true },
      { kind: 'figure', src: ROOT + 'IMG_2306.jpg', alt: 'Striped scarf knotted at collar, manicured hand', cap: '02 · Accessory', sub: 'Knotted silk, red manicure.' },
      { kind: 'figure', src: ROOT + 'IMG_0822_DxO.png', alt: 'Denim cape with brass cowboy-boot pendant, close detail', cap: '03 · Pendant', sub: 'Denim, brass pendant.' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: ROOT + 'IMG_0823_DxO.png', alt: 'Pink ruffle dress with denim jacket, two mannequins', aspect: '4/3', cap: '04 · Pink + denim', sub: 'Ruffle blouse, denim jacket pairing.' },
      { kind: 'figure', src: ROOT + 'IMG_0827_DxO.jpg', alt: 'Divided mannequins, grey bomber and daisy print denim', aspect: '4/3', cap: '05 · Daisy + denim', sub: 'Bomber, daisy print, sport register.' },
    ],
  },
  {
    variant: '40-60',
    items: [
      { kind: 'rowText', caption: 'Register', title: 'A matter of voice', body: "Both mannequins convey the same ideas, yet they're telling it differently." },
      { kind: 'figure', src: ROOT + 'IMG_20250424_092836_DxO.png', alt: 'Spring Blue mannequins, striped blouse and blue floral skirt', aspect: '3/4', className: 'photo--focus-top', cap: '06 · Spring Blue', sub: 'Striped blouse, blue floral skirt.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: ROOT + 'IMG_20250115_102821_DxO.png', alt: 'Preppy Trench three mannequins, cap and stripes', aspect: '3/4', className: 'photo--focus-top', cap: '07 · Preppy Trench', sub: 'Cap, trench, stripes.' },
      { kind: 'figure', src: ROOT + 'IMG_20250307_093913_DxO.jpg', alt: 'Preppy Blue mannequins, Académie sweat and denim', aspect: '3/4', className: 'photo--focus-top', cap: '08 · Académie', sub: 'Académie sweat, denim, loafers.' },
      { kind: 'figure', src: ROOT + 'IMG_20250320_094850_DxO.jpg', alt: 'Spring Jaune two mannequins with jewelry plinth', aspect: '3/4', className: 'photo--focus-top', cap: '09 · Spring Jaune', sub: 'White ruffle, yellow blouse, jewelry plinth.' },
    ],
  },
  {
    variant: '40-60',
    items: [
      { kind: 'figure', src: ROOT + 'IMG_20250410_095411_DxO.jpg', alt: 'Soft register two mannequins, beige vest and pink dress', aspect: '3/4', className: 'photo--focus-top', cap: '10 · Soft register', sub: 'Beige tailoring, pink silk, low jewelry plinth.' },
      { kind: 'rowText', caption: 'Punctuation', title: 'Punctuation is rhythm', body: 'Accessories shift the cadence without adding a word and shoes decide the nature of the sentence.' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: ROOT + 'IMG_20250515_094636_DxO_alt.png', alt: 'Palm-print scarf and textured black dress mannequins', aspect: '3/4', className: 'photo--focus-top', cap: '11 · Harissa', sub: 'Palm scarf, textured black.' },
      { kind: 'figure', src: ROOT + 'IMG_0790_DxO.jpg', alt: 'Black leather jacket and denim mannequins close-up', aspect: '3/4', className: 'photo--focus-top', cap: '12 · Edge', sub: 'Black leather, denim, edgier register.' },
    ],
  },
] as const;

export const STYLING_NOTE = {
  prefix: 'Mannequin styling at H&M Flagship Amsterdam Dam. The wider floor and window work on the ',
  linkLabel: 'Visual Merchandising',
  linkHref: '/visual-merchandising',
  suffix: ' page.',
} as const;
