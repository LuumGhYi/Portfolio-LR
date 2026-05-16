// Archive (Other Work) — 23-photo serpentine mosaic with a continuous Bézier
// guideline drawn through their centres.

const ROOT = 'outdoor/';

export const ARCHIVE_HERO = {
  title: 'Sometimes, I push a button',
  src: ROOT + 'IMG_0708_DxO.jpg',
  alt: 'Red lighthouse standing alone in Dutch dunes against overcast atmospheric sky',
  className: 'photo--hero photo--focus-left',
} as const;

// One continuous Bézier path through all 23 photo centres.
// viewBox matches container aspect 100 × 422 for uniform stroke.
export const ARCHIVE_GUIDELINE_VIEWBOX = '0 0 100 422';
export const ARCHIVE_GUIDELINE_PATH = [
  'M 15 -28',
  'C 28 -12, 55 4, 70 19',
  'C 52 14, 36 26, 24 21',
  'C 30 32, 44 46, 50 54',
  'C 40 62, 22 76, 15 83',
  'C 28 80, 46 92, 59 88',
  'C 48 96, 32 106, 26 112',
  'C 42 108, 62 122, 77 117',
  'C 56 126, 28 138, 15 144',
  'C 26 146, 40 156, 49 153',
  'C 58 158, 72 150, 79 148',
  'C 62 160, 34 174, 25 180',
  'C 42 176, 58 190, 72 186',
  'C 52 196, 28 204, 17 209',
  'C 26 214, 40 230, 49 227',
  'C 56 222, 66 232, 72 227',
  'C 58 238, 36 250, 27 256',
  'C 40 250, 56 272, 67 265',
  'C 50 280, 28 294, 18 300',
  'C 36 308, 58 320, 72 324',
  'C 56 318, 28 344, 16 338',
  'C 22 348, 36 358, 43 362',
  'C 50 374, 64 386, 71 392',
  'C 56 390, 38 402, 25 397',
  'C 20 410, 24 440, 20 465',
].join(' ');

export interface CollageEntry {
  top: string;
  left: string;
  width: string;
  z: number;
  parallax: number;
  src: string;
  alt: string;
}

export const ARCHIVE_COLLAGE: readonly CollageEntry[] = [
  // Edinburgh
  { top: '3vw',   left: '60%', width: '20%', z: 3, parallax: -0.16, src: ROOT + 'edinburgh/insta-1-51.jpg', alt: 'Edinburgh stone tower with bay windows and turret' },
  { top: '8vw',   left: '4%',  width: '40%', z: 1, parallax: -0.05, src: ROOT + 'edinburgh/insta-1-54.jpg', alt: 'Edinburgh urban scene, lanes and limestone façades' },
  { top: '38vw',  left: '26%', width: '48%', z: 4, parallax: -0.22, src: ROOT + 'edinburgh/insta-1-55.jpg', alt: 'Edinburgh urban scene, mews and cobbles' },
  // Amsterdam
  { top: '66vw',  left: '4%',  width: '22%', z: 3, parallax: -0.16, src: ROOT + 'amsterdam/001-1.jpg', alt: 'Amsterdam street geometry' },
  { top: '74vw',  left: '38%', width: '42%', z: 1, parallax: -0.04, src: ROOT + 'amsterdam/01.jpg', alt: 'Amsterdam train station platform' },
  { top: '100vw', left: '8%',  width: '36%', z: 2, parallax: -0.10, src: ROOT + 'amsterdam/_MG_9021.jpg', alt: 'Amsterdam canal house' },
  { top: '106vw', left: '66%', width: '22%', z: 3, parallax: -0.16, src: ROOT + 'amsterdam/1000007137-01.jpeg', alt: 'Amsterdam city detail' },
  { top: '130vw', left: '6%',  width: '18%', z: 4, parallax: -0.22, src: ROOT + 'amsterdam/_MG_9026.jpg', alt: 'Amsterdam architectural detail' },
  { top: '138vw', left: '38%', width: '22%', z: 2, parallax: -0.09, src: ROOT + 'amsterdam/1000010538.jpg', alt: 'Amsterdam wider scene' },
  { top: '134vw', left: '70%', width: '18%', z: 3, parallax: -0.15, src: ROOT + 'amsterdam/_MG_9106.jpg', alt: 'Amsterdam street moment' },
  { top: '165vw', left: '6%',  width: '38%', z: 2, parallax: -0.10, src: ROOT + 'amsterdam/1000009618.jpg', alt: 'Amsterdam evening' },
  { top: '175vw', left: '58%', width: '28%', z: 3, parallax: -0.17, src: ROOT + 'amsterdam/1000010734.jpg', alt: 'Amsterdam afternoon' },
  { top: '198vw', left: '6%',  width: '22%', z: 2, parallax: -0.08, src: ROOT + 'amsterdam/IMG_0702.jpg', alt: 'Amsterdam different angle' },
  { top: '210vw', left: '38%', width: '22%', z: 4, parallax: -0.20, src: ROOT + 'amsterdam/_MG_8998.jpg', alt: 'Amsterdam closing frame' },
  { top: '212vw', left: '62%', width: '20%', z: 3, parallax: -0.14, src: ROOT + 'amsterdam/_MG_9171.jpg', alt: 'Amsterdam stillness' },
  // Editorial
  { top: '242vw', left: '6%',  width: '42%', z: 1, parallax: -0.05, src: ROOT + 'editorial/Badawi Wedding Cine-14.jpg', alt: 'Wedding detail, watch on wrist' },
  { top: '248vw', left: '56%', width: '22%', z: 3, parallax: -0.16, src: ROOT + 'editorial/Badawi Wedding Cine-18.jpg', alt: 'Wedding intimate moment' },
  { top: '282vw', left: '6%',  width: '24%', z: 4, parallax: -0.22, src: ROOT + 'editorial/insta-1-3__03_Portfolio_Photos.jpg', alt: 'Editorial portrait or close detail' },
  // Atmospheres
  { top: '310vw', left: '58%', width: '28%', z: 1, parallax: -0.04, src: ROOT + 'skies/1000010233.jpg', alt: 'Pink cloud against dusk sky over rooftop' },
  { top: '326vw', left: '4%',  width: '24%', z: 3, parallax: -0.15, src: ROOT + 'skies/insta-1-2.jpg', alt: 'Sky atmosphere' },
  { top: '348vw', left: '18%', width: '50%', z: 2, parallax: -0.10, src: ROOT + 'skies/insta-12.jpg', alt: 'Distant wind turbines on the horizon' },
  { top: '375vw', left: '60%', width: '22%', z: 3, parallax: -0.14, src: ROOT + 'final-1.jpg', alt: 'Tall atmospheric portrait frame' },
  { top: '380vw', left: '8%',  width: '34%', z: 4, parallax: -0.24, src: ROOT + 'closing-frame.jpg', alt: 'Side note frame' },
] as const;

export const ARCHIVE_MOSAIC_HEIGHT = '422vw';
