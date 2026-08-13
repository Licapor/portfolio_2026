import { navTranslations } from './translations/nav';
import { heroTranslations } from './translations/hero';
import { aboutTranslations } from './translations/about';
import { projectsTranslations } from './translations/projects';
import { contactTranslations } from './translations/contact';
import { projectPagesTranslations } from './translations/projectPages';
import { stackTranslations } from './translations/stack';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

// Valores que no necesitan traducción (marcas, números, nombres propios)
export const shared = {
  'global.name': 'Li',
  // Nombre legal completo: se usa en JSON-LD y meta author, donde "Li" no identifica a nadie.
  'global.fullName': 'Liliana Canedo Portillo',
  'global.logo': 'LCP',
  'global.email': 'liliana@licapor.dev',
  'hero.eyebrow': 'Tech Benders · Wislab',
  'hero.yearsNumber': '8+',
  'hero.industriesNumber': '4',
  'hero.marquee':
    'AI Agents • MCP Servers • RAG • LLMs • Claude Code • Prompt Engineering • Agentic Workflows • Python • TypeScript • React • Next.js • Astro • API Design • AdTech • Automation •',
  'about.langES': 'ES',
  'about.langEN': 'EN',
  'about.langPT': 'PT',
  'project6.title': 'Tojol - Lo Bueno de Comer',
  'project6.description': 'Coffee brew bar and healthy breakfast.',
  'tojol.subtitle': 'Healthy Breakfast • Dairy & Gluten-Free • Vegan Options',
  'tojol.location': 'La Punta, Puerto Escondido',
  'contact.titleOutline': '!',
} as const;

// Combina todas las traducciones
export const ui = {
  es: {
    ...navTranslations.es,
    ...heroTranslations.es,
    ...aboutTranslations.es,
    ...projectsTranslations.es,
    ...contactTranslations.es,
    ...projectPagesTranslations.es,
    ...stackTranslations.es,
  },
  en: {
    ...navTranslations.en,
    ...heroTranslations.en,
    ...aboutTranslations.en,
    ...projectsTranslations.en,
    ...contactTranslations.en,
    ...projectPagesTranslations.en,
    ...stackTranslations.en,
  },
} as const;

// Type exports for type safety
export type Language = keyof typeof languages;
export type SharedKey = keyof typeof shared;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
export type AllKeys = SharedKey | TranslationKey;
