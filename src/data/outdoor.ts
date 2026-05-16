// Outdoor page — data-driven gallery.
// Each row knows its layout variant and the items inside it (Figures or RowText).
//
// `kind` is the discriminator: 'figure' renders <Figure>, 'rowText' renders <RowText>.

import type { ImageRowVariant } from '@components/ImageRow.types';

export interface FigureItem {
  kind: 'figure';
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  cap?: string;
  sub?: string;
  priority?: boolean;
}

export interface RowTextItem {
  kind: 'rowText';
  caption: string;
  title: string;
  body: string;
  cite?: string;
  asQuote?: boolean;
}

export type RowItem = FigureItem | RowTextItem;

export interface Row {
  variant: ImageRowVariant;
  className?: string;
  style?: string;
  items: RowItem[];
}

const ROOT = 'outdoor/';

export const OUTDOOR_HEAD = {
  quote: '“In order to understand the world, one has to turn away from it on occasion.”',
  author: 'Albert Camus',
  meta: 'Highlands · Calanques · Alps · Marseille',
  intro:
    "I try to keep my inner child amazed by anything, even the smallest and most banal things. Landscapes, water, light, textures. We don't need to look far away to find beauty in nature.",
} as const;

export const OUTDOOR_ROWS: readonly Row[] = [
  {
    variant: 'full',
    className: 'mb-vrhythm-96',
    items: [{
      kind: 'figure',
      src: ROOT + 'insta-1-2__insta.jpg',
      alt: 'Calanques limestone cliff with Mediterranean and small village below',
      className: 'photo--hero',
      cap: '01 · Calanques',
      sub: 'Limestone, Mediterranean, the south of Europe.',
      priority: true,
    }],
  },
  {
    variant: 'horizon-pair',
    items: [
      {
        kind: 'figure',
        src: ROOT + 'highlands/IMG_0864.jpg',
        alt: 'Highland loch at dusk, mountain silhouettes reflected',
        className: 'photo--horizon-center',
        cap: '02 · Last light',
        sub: 'Loch at dusk, Highlands.',
      },
      {
        kind: 'figure',
        src: ROOT + 'highlands/IMG_1083_DxO.jpg',
        alt: 'Highland cottage with hill reflected in still water',
        className: 'photo--horizon-low',
        cap: '03 · Stillwater',
        sub: 'Cottage and hill, reflected.',
      },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: ROOT + 'highlands/insta-2.jpg', alt: 'Highland mountain pyramid against clouded sky, mirrored composition', aspect: '3/2', className: 'photo--flip-h', cap: '04 · Pyramid', sub: 'Mountain ridge, late afternoon.' },
      { kind: 'figure', src: ROOT + 'highlands/insta-1-47.jpg', alt: 'Highland panorama of rolling ranges', aspect: '3/2', cap: '05 · Panorama', sub: 'Rolling ranges, Highlands.' },
      { kind: 'figure', src: ROOT + 'highlands/insta-1-45.jpg', alt: 'Highland peak under cloud weight', aspect: '3/2', cap: '06 · Peak', sub: 'Ridge under cloud.' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: ROOT + 'highlands/insta-1-7.jpg', alt: 'Highland loch in afternoon sun, mountains silhouetted', aspect: '3/2', cap: '07 · Open water', sub: 'Afternoon, low sun.' },
      { kind: 'figure', src: ROOT + 'highlands/insta-1-5.jpg', alt: 'Wooden boat beached by Highland loch with clouded sky', aspect: '3/2', cap: '08 · Moored', sub: 'Boat, loch, cloud weather.' },
    ],
  },
  {
    variant: '65-35',
    items: [
      { kind: 'figure', src: ROOT + 'highlands/insta-1-15.jpg', alt: 'Misty Highland road with spruce trees and stacked logs', aspect: '3/2', cap: '09 · Track', sub: 'Spruce, mist, the road in.' },
      { kind: 'rowText', caption: 'Walking', title: '“Every day I walk myself into a state of well-being and walk away from every illness. I have walked myself into my best thoughts.”', body: 'Søren Kierkegaard', asQuote: false },
    ],
  },
  {
    variant: '40-60',
    items: [
      { kind: 'rowText', caption: 'Solitude', title: '“I never found the companion that was so companionable as solitude.”', body: 'Henry David Thoreau', asQuote: false },
      { kind: 'figure', src: ROOT + 'highlands/IMG_0949_DxO.jpg', alt: 'Highland forest interior, moss-covered rocks and twisted trees', aspect: '3/2', cap: '10 · Mossy floor', sub: 'Forest interior, slant light.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: ROOT + 'meditation-nature/IMG_0890.jpg', alt: 'Highland stream with stones and light filtering through trees', aspect: '3/2', cap: '11 · Stream', sub: 'Light through trees.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7867-2.jpg', alt: 'Stream with central boulder, framed by forest', aspect: '3/2', cap: '12 · Anchor', sub: 'Stone, framed by trees.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_8043-2.jpg', alt: 'Moss-covered rocks at the edge of a stream', aspect: '3/2', cap: '13 · Moss', sub: 'Green carpet on grey stone.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7770-2.jpg', alt: 'Waterfall jet falling into a green alcove', aspect: '3/4', cap: '14 · Fall', sub: 'Single jet, mossy basin.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7902-2.jpg', alt: 'Water spray against blue sky, fine droplets', aspect: '3/4', cap: '15 · Spray', sub: 'Water against sky.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7890-2.jpg', alt: 'Backlit water splash, fine droplets against dark rock', aspect: '3/4', cap: '16 · Splash', sub: 'Frozen motion, dark stone.' },
    ],
  },
  {
    variant: '65-35',
    items: [
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7861-2.jpg', alt: 'Pebbled riverbed water texture, light shimmering on stones', aspect: '3/2', cap: '17 · Riverbed', sub: 'Water, stone, light. Highlands.' },
      { kind: 'rowText', caption: 'Wonder', title: '“A man’s maturity consists in having found again the seriousness one had as a child, at play.”', body: 'Friedrich Nietzsche' },
    ],
  },
  {
    variant: '50-50',
    items: [
      { kind: 'figure', src: ROOT + 'meditation-nature/insta-1-31.jpg', alt: 'Orange azalea blossom in soft focus', aspect: '3/2', cap: '18 · Azalea', sub: 'Azalea, soft focus.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7951-2.jpg', alt: 'White wild rose against dark foliage', aspect: '3/2', cap: '19 · Wild rose', sub: 'White on dark green.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7773-2.jpg', alt: 'Small waterfall framed by branches over still pool', aspect: '3/4', cap: '20 · Hidden fall', sub: 'Framed by branches, soft pool.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7859-2.jpg', alt: 'Stone in a stream framed by river vegetation', aspect: '3/4', cap: '21 · River stone', sub: 'Anchor in the current.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_7841-2.jpg', alt: 'Mossy rocks close-up, green texture detail', aspect: '3/4', cap: '22 · Moss close', sub: 'Texture, ground level.' },
    ],
  },
  {
    variant: '3',
    items: [
      { kind: 'figure', src: ROOT + 'meditation-nature/insta-4__03_Portfolio_Photos.jpg', alt: 'Small blue forget-me-not flowers among dark leaves', aspect: '3/4', cap: '23 · Forget-me-not', sub: 'Blue points on green ground.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_8161-2.jpg', alt: 'Water flowing over textured rock, macro', aspect: '3/4', cap: '24 · Surface', sub: 'Water on rock, macro.' },
      { kind: 'figure', src: ROOT + 'meditation-nature/_MG_8097-2.jpg', alt: 'Mossy rocks under arching branches, forest interior', aspect: '3/4', cap: '25 · Canopy', sub: 'Stones, branches, slant light.' },
    ],
  },
] as const;

export const OUTDOOR_NOTE =
  'All photographs Lucas Rageot. Highlands · Calanques · Alps. Lightroom workflow, occasional Photoshop.';
