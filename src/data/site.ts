// Site-wide identity and contact info. Single source of truth.

export const SITE = {
  name: 'Lucas Rageot',
  role: 'Visual Merchandiser',
  baseUrl: 'https://lucasrageot.com',
  email: 'lucas.rageot@tutamail.com',
  phone: '+31647385576',
  phoneDisplay: '+31 6 47 38 55 76',
  linkedin: 'https://linkedin.com/in/lucasrageot',
  linkedinDisplay: 'linkedin.com/in/lucasrageot',
  location: { city: 'Haarlem', country: 'Netherlands', countryCode: 'NL' },
  relocation: { city: 'Copenhagen', country: 'Denmark', countryCode: 'DK', when: 'Q3 2026' },
  availability: 'Available',
  defaultDescription:
    'Portfolio of Lucas Rageot, Visual Merchandiser. Flagship execution, brand storytelling, craft eye. Haarlem, NL · Copenhagen Q3 2026.',
} as const;

export type SiteConfig = typeof SITE;
