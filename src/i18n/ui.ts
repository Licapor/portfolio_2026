export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

// Valores que no necesitan traducción (marcas, números, nombres propios)
export const shared = {
  'global.name': 'Li',
  'global.logo': 'LCP',
  'global.email': 'liliana@licapor.dev',
  'hero.greeting': "Li's studio",
  'hero.title1': 'Digital',
  'hero.title2': 'Product',
  'hero.title3': 'Developer',
  'hero.yearsNumber': '9+',
  'hero.industriesNumber': '5',
  'hero.marquee': 'Product Development • No-Code • WeWeb • Xano • Figma • AdTech • Prebid.js • Python • TypeScript • React • Node.js • AI/ML • Prompt Engineering • LLMs • RAG • API Design • Automation •',
  'about.langES': 'ES',
  'about.langEN': 'EN',
  'about.langPT': 'PT',
  'project6.title': 'Tojol - Lo Bueno de Comer',
  'project6.description': 'Coffee brew bar and healthy breakfast.',
  'tojol.subtitle': 'Healthy Breakfast • Dairy & Gluten-Free • Vegan Options',
  'tojol.location': 'La Punta, Puerto Escondido',
  'contact.titleOutline': '!',
} as const;

export const ui = {
  es: {
    // Navigation
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',

    // Hero
    'hero.description': 'Transformando ideas en',
    'hero.highlight1': 'productos digitales',
    'hero.highlight2': 'valor',
    'hero.descriptionEnd': 'que generan',
    'hero.stat1': 'Años haciendo tec',
    'hero.stat2': 'Industrias: Comunicación, E-commerce, AdTech, Educación, Hostelería',
    'hero.cta1': 'Ver Proyectos',
    'hero.cta2': 'Contacto',
    'hero.scroll': 'Scroll',

    // About
    'about.label': 'Sobre mí',
    'about.title': 'Qué',
    'about.titleOutline': 'hago',
    'about.intro': 'Desarrollo especializado en',
    'about.introHighlight': 'productos digitales',
    'about.description': 'Trabajo de forma transversal en análisis de requerimientos, definición de soluciones y coordinación entre negocio y tec. Mi base técnica en frontend y prompt engineering me permite traducir problemas complejos en soluciones claras y procesos simplificados.',
    'about.locationLabel': 'Ciudad actual',
    'about.location': 'Ciudad de México',
    'about.skillsTitle': 'Habilidades Blandas',
    'about.languagesLabel': 'Idiomas',

    // Soft Skills
    'skill.communication': 'Comunicación',
    'skill.leadership': 'Liderazgo',
    'skill.problemSolving': 'Resolución de Problemas',
    'skill.adaptability': 'Adaptabilidad',
    'skill.teamwork': 'Trabajo en Equipo',
    'skill.creativity': 'Creatividad',
    'skill.empathy': 'Empatía',
    'skill.analyticalThinking': 'Pensamiento Analítico',
    'skill.timeManagement': 'Gestión del Tiempo',
    'skill.attentionToDetail': 'Atención al Detalle',

    // Projects
    'projects.label': 'Proyectos',
    'projects.title': 'Trabajo',
    'projects.titleOutline': 'destacado',
    'projects.viewAll': 'Ver más en LinkedIn',
    'projects.featured': '★ Destacado',
    'projects.liveDemo': 'Ver Demo',
    'projects.code': 'Código',

    // Project titles and descriptions
    'project1.title': 'Sistema de Gestión Documental',
    'project1.description': 'Plataforma que automatiza el proceso de admisión de estudiantes, reduciendo costos y tiempos operativos para una población de 80,000 usuarios en una institución educativa.',
    'project2.title': 'Sistema de Evaluación Docente',
    'project2.description': 'Back office para la creación y gestión de periodos de evaluación docente, utilizado por 6,000 docentes y 80,000 estudiantes.',
    'project3.title': 'Automatización de Titulación',
    'project3.description': 'Sistema que automatiza el proceso de titulación y certificación, logrando una reducción del 75% en tiempos de tramitación y carga operativa.',
    'project4.title': 'Implementación Prebid.js',
    'project4.description': 'Configuración e integración de publicidad programática mediante APIs de Xandr y Prebid.js para plataformas web y mobile en Segundamano.',
    'project5.title': 'Reportes Automatizados AdTech',
    'project5.description': 'Desarrollo de reportes automatizados mediante API de Xandr Monetize y Power BI para análisis de monetización y recomendaciones estratégicas.',

    // Tojol Project Page
    'tojol.intro': 'Tojol fue un restaurante especializado en platillos con ingredientes auténticos mexicanos. Nuestro menú ofrecía opciones deliciosas y nutritivas, incluyendo opciones veganas y sin gluten. En Tojol, nos enorgullecíamos de usar nuestras propias leches vegetales y ser un establecimiento libre de lácteos.',
    'tojol.coffeeTitle': 'El único coffee brew bar en La Punta',
    'tojol.coffeeDesc': 'Utilizamos métodos de filtrado y goteo para ofrecerte un café de alta calidad.',
    'tojol.foodTitle': 'Desayunos saludables y jugos',
    'tojol.foodDesc': 'El único bar de jugos cold-pressed en Puerto Escondido.',
    'tojol.reviewsTitle': 'Lo que decían nuestros clientes',
    'tojol.reviewsDesc': 'Calificación perfecta de 5 estrellas en Google Reviews.',
    'tojol.googleRating': 'Calificación en Google',
    'tojol.backToProjects': 'Volver a proyectos',

    // Contact
    'contact.label': 'Contacto',
    'contact.title': 'Hablemos',
    'contact.description': '¿Tienes un proyecto en mente o buscas alguien para tu equipo? Estoy abierta a nuevas oportunidades.',
    'contact.emailLabel': 'Escríbeme',
    'contact.whatsappLabel': 'Chatea conmigo',
    'contact.marquee': 'TRABAJEMOS JUNTOS',

    // Footer
    'footer.copyright': 'Hecho con cariño.',
    'footer.backToTop': 'Volver arriba',
  },
  en: {
    // Navigation
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",

    // Hero
    'hero.description': 'Transforming ideas into',
    'hero.highlight1': 'digital products',
    'hero.highlight2': 'value',
    'hero.descriptionEnd': 'that create',
    'hero.stat1': 'Years building tech',
    'hero.stat2': 'Industries: Communication, E-commerce, AdTech, Education, Hospitality',
    'hero.cta1': 'View Projects',
    'hero.cta2': 'Contact',
    'hero.scroll': 'Scroll',

    // About
    'about.label': 'About',
    'about.title': 'What',
    'about.titleOutline': 'I do',
    'about.intro': 'Development specialized in',
    'about.introHighlight': 'digital products',
    'about.description': 'I work cross-functionally in requirements analysis, solution definition, and coordination between business and tech. My technical background in frontend and prompt engineering allows me to translate complex problems into clear solutions and simplified processes.',
    'about.locationLabel': 'Current city',
    'about.location': 'Mexico City',
    'about.skillsTitle': 'Soft Skills',
    'about.languagesLabel': 'Languages',

    // Soft Skills
    'skill.communication': 'Communication',
    'skill.leadership': 'Leadership',
    'skill.problemSolving': 'Problem Solving',
    'skill.adaptability': 'Adaptability',
    'skill.teamwork': 'Teamwork',
    'skill.creativity': 'Creativity',
    'skill.empathy': 'Empathy',
    'skill.analyticalThinking': 'Analytical Thinking',
    'skill.timeManagement': 'Time Management',
    'skill.attentionToDetail': 'Attention to Detail',

    // Projects
    'projects.label': 'Projects',
    'projects.title': 'Featured',
    'projects.titleOutline': 'work',
    'projects.viewAll': 'See more on LinkedIn',
    'projects.featured': '★ Featured',
    'projects.liveDemo': 'Live Demo',
    'projects.code': 'Code',

    // Project titles and descriptions
    'project1.title': 'Document Management System',
    'project1.description': 'Platform that automates student admission process, reducing costs and operational times for a population of 80,000 users in an educational institution.',
    'project2.title': 'Teacher Evaluation System',
    'project2.description': 'Back office for creating and managing teacher evaluation periods, used by 6,000 teachers and 80,000 students.',
    'project3.title': 'Certification Automation',
    'project3.description': 'System that automates the certification process, achieving a 75% reduction in processing times and administrative workload.',
    'project4.title': 'Prebid.js Implementation',
    'project4.description': 'Configuration and integration of programmatic advertising through Xandr and Prebid.js APIs for web and mobile platforms at Segundamano.',
    'project5.title': 'Automated AdTech Reports',
    'project5.description': 'Development of automated reports using Xandr Monetize API and Power BI for monetization analysis and strategic recommendations.',

    // Tojol Project Page
    'tojol.intro': "Tojol is a restaurant specializing in creating dishes with mexican authentic ingredients. Our menu features delicious and nutritious options, including vegan and gluten-free dishes. At Tojol, we pride ourselves on using our own plant-based milks and being a dairy-free establishment. Whether you're looking for a satisfying breakfast, a refreshing juice, or a high quality cup of coffee, our welcoming space in the heart of La Punta, Puerto Escondido has something for everyone.",
    'tojol.coffeeTitle': 'The only coffee brew bar in La Punta',
    'tojol.coffeeDesc': 'We use filtering and drip coffee methods to offer you a high-quality cup of coffee.',
    'tojol.foodTitle': 'Healthy breakfast and juices',
    'tojol.foodDesc': 'The only cold-pressed juices bar in Puerto Escondido.',
    'tojol.reviewsTitle': 'What our customers said',
    'tojol.reviewsDesc': 'Perfect 5-star rating on Google Reviews.',
    'tojol.googleRating': 'Google Rating',
    'tojol.backToProjects': 'Back to projects',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's talk",
    'contact.description': 'Have a project in mind or looking for someone for your team? I am open to new opportunities.',
    'contact.emailLabel': 'Drop me a line',
    'contact.whatsappLabel': 'Chat with me',
    'contact.marquee': "LET'S WORK TOGETHER",

    // Footer
    'footer.copyright': 'Crafted with care.',
    'footer.backToTop': 'Back to top',
  },
} as const;

// Type exports for type safety
export type Language = keyof typeof languages;
export type SharedKey = keyof typeof shared;
export type TranslationKey = keyof typeof ui[typeof defaultLang];
export type AllKeys = SharedKey | TranslationKey;
