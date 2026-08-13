export const heroTranslations = {
  es: {
    'hero.leadPre': 'Diseño',
    'hero.leadHl1': 'agentes de IA',
    'hero.leadMid': 'y flujos agénticos que ponen a trabajar a los',
    'hero.leadHl2': 'LLMs',
    'hero.srHeadline': 'Liliana Canedo Portillo, Senior Software Engineer en Tech Benders. Especializada en IA aplicada, agentes y producto.',
    'hero.stat1': 'Años construyendo tecnología',
    'hero.stat2': 'Industrias: EdTech · AdTech · Hostelería · E-commerce',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Contacto',
    'hero.replay': 'Reiniciar',
    'hero.scroll': 'Scroll',
  },
  en: {
    'hero.leadPre': 'I build',
    'hero.leadHl1': 'AI agents',
    'hero.leadMid': 'and agentic workflows that put',
    'hero.leadHl2': 'LLMs to work',
    'hero.srHeadline': 'Liliana Canedo Portillo, Senior Software Engineer at Tech Benders. Specialized in applied AI, agents, and product.',
    'hero.stat1': 'Years building technology',
    'hero.stat2': 'Industries: EdTech · AdTech · Hospitality · E-commerce',
    'hero.cta1': 'View projects',
    'hero.cta2': 'Contact',
    'hero.replay': 'Replay',
    'hero.scroll': 'Scroll',
  },
} as const;

/**
 * Identities cycled by the Hero text-decode effect.
 * `style` maps to the .roleWrap variants in global.css
 * (mono | cream | gold | mint | sage | gradient | outline).
 */
export type IdentityStyle = 'mono' | 'cream' | 'gold' | 'mint' | 'sage' | 'gradient' | 'outline';

export const heroIdentities: Record<'es' | 'en', ReadonlyArray<{ text: string; style: IdentityStyle }>> = {
  es: [
    { text: 'AI Agent Engineer', style: 'mono' },
    { text: 'Ingeniera de software senior', style: 'cream' },
    { text: 'Wislab, de cero a producción', style: 'gradient' },
    { text: 'Solucionadora de problemas', style: 'outline' },
    { text: 'Ingeniera de producto', style: 'cream' },
    { text: 'Eterna aprendiz', style: 'sage' },
    { text: 'Aikidoka', style: 'gold' },
    { text: 'Constructora incansable', style: 'outline' },
    { text: 'Curiosa incurable', style: 'gradient' },
    { text: 'Sin miedo a empezar de cero', style: 'mint' },
    { text: 'Viajera', style: 'cream' },
  ],
  en: [
    { text: 'AI Agent Engineer', style: 'mono' },
    { text: 'Senior Software Engineer', style: 'cream' },
    { text: 'Wislab, zero to production', style: 'gradient' },
    { text: 'Problem Solver', style: 'outline' },
    { text: 'Product Engineer', style: 'cream' },
    { text: 'Lifelong Learner', style: 'sage' },
    { text: 'Aikidoka', style: 'gold' },
    { text: 'Relentless Builder', style: 'outline' },
    { text: 'Endlessly Curious', style: 'gradient' },
    { text: 'Not afraid to start from zero', style: 'mint' },
    { text: 'Traveler', style: 'cream' },
  ],
} as const;
