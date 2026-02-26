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
    'about.currentlyLabel': 'Actualmente',
    'about.currently': 'Bootcamp AI Engineering',
    'about.currentlyWith': 'con ',
    'about.adventuresLabel': 'Fuera del código',
    'about.adventures': 'Viajando por México y el mundo en eventos de Tech y Artes Marciales',

    // Soft Skills
    'about.softSkillsMarquee': 'Comunicación • Liderazgo • Resolución de Problemas • Adaptabilidad • Trabajo en Equipo • Creatividad • Empatía • Pensamiento Analítico • Gestión del Tiempo • Atención al Detalle •',
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

    // Shared Project Labels
    'project.multitenant': 'Arquitectura Multitenant',
    'project.multitenantDesc': 'Sistema diseñado para operar con múltiples universidades de forma simultánea, cada una con su configuración y datos aislados.',

    // Faculty Evaluation Project Page
    'facultyEval.subtitle': 'Sistema administrativo para instituciones educativas',
    'facultyEval.description': 'Back office para la creación y gestión de periodos de evaluación docente. El personal administrativo gestiona rangos de fechas para que los estudiantes accedan a las encuestas de sus docentes, con identificadores únicos asociados a ciclos escolares vigentes.',
    'facultyEval.problemTitle': 'El Contexto',
    'facultyEval.problemDesc': 'Las instituciones educativas necesitan evaluar periódicamente a sus docentes para apoyar procesos de contratación, retención y desarrollo de carrera. Gestionar estos periodos de evaluación para una población de 6,000 docentes y 80,000 estudiantes requiere un sistema robusto y flexible.',
    'facultyEval.solutionTitle': 'La Solución',
    'facultyEval.solutionDesc': 'Un sistema que permite al administrador configurar periodos de evaluación por universidad, activar o desactivar prórrogas de tiempo, y visualizar métricas clave a través de reportes integrados de Power BI: calificación promedio, porcentaje de participación estudiantil, filtros por docente o materia.',
    'facultyEval.roleTitle': 'Mi Rol',
    'facultyEval.roleDesc': 'Desarrollo frontend completo del sistema de forma independiente. Creación y gestión del backlog de actividades de frontend.',
    'facultyEval.stackTitle': 'Stack Técnico',
    'facultyEval.metricsTitle': 'Métricas',
    'facultyEval.metric1': '6,000 docentes',
    'facultyEval.metric2': '80,000 estudiantes',
    'facultyEval.metric3': 'Múltiples universidades',

    // Document Management Project Page
    'docManagement.subtitle': 'Expediente digital para instituciones educativas',
    'docManagement.description': 'Sistema donde los estudiantes registran su información personal, datos demográficos, médicos, académicos y laborales. Permite subir documentación oficial requerida para su carrera (licenciatura, maestría, doctorado) y documentos anexos para becas o promociones especiales.',
    'docManagement.problemTitle': 'El Contexto',
    'docManagement.problemDesc': 'El proceso de admisión tradicional requería que los estudiantes entregaran documentación física, generando largas esperas y carga administrativa significativa. Con más de 100,000 estudiantes en múltiples universidades, el sistema necesitaba escalar sin comprometer la experiencia.',
    'docManagement.solutionTitle': 'La Solución',
    'docManagement.solutionDesc': 'Una plataforma digital que centraliza toda la documentación estudiantil. El sistema reduce la espera de documentación en un 80% y el tiempo de revisión en un 70%, transformando un proceso que antes tomaba meses en uno de días.',
    'docManagement.featuresTitle': 'Funcionalidades Clave',
    'docManagement.feature1Title': 'Actualización de Información',
    'docManagement.feature1Desc': 'Permite a los estudiantes adjuntar documentación asociada a trámites externos como cambio de apellidos, nombres o cambio de género, manteniendo el expediente siempre actualizado.',
    'docManagement.feature2Title': 'Sistema de Tiempo Límite',
    'docManagement.feature2Desc': 'Funcionalidad que establece plazos para la carga de documentación, incentivando a los estudiantes a completar el proceso. Al vencer el tiempo, pueden solicitar prórroga mediante un cálculo complejo basado en reglas de negocio y de una amplia diversidad de estudiantes habilitados.',
    'docManagement.migrationTitle': 'Migración técnica',
    'docManagement.migrationDesc': 'Inicialmente desarrollado en Bubble, el sistema fue migrado a React/Next.js cuando las limitaciones de escalabilidad de la plataforma No-Code no soportaban el volumen de usuarios requerido.',
    'docManagement.roleTitle': 'Mi Rol',
    'docManagement.roleDesc': 'Diseño de servicios backend a partir de las necesidades del frontend. Gestión del backlog detallado en Linear. Pruebas de APIs, endpoints, pruebas end-to-end y unit tests con Jest.',
    'docManagement.metric1': '100,000 estudiantes',
    'docManagement.metric2': '80% menos espera',
    'docManagement.metric3': '70% menos revisión',

    // Certification Project Page
    'certification.subtitle': 'Sistema de titulación y certificación universitaria',
    'certification.description': 'Plataforma donde los estudiantes pueden gestionar su proceso de titulación y certificación: elegir modalidad (tesis, promedio, maestría, diplomado), realizar pagos en línea o con ficha, en parcialidades o completo, adjuntar documentación y dar seguimiento al proceso administrativo.',
    'certification.problemTitle': 'El Contexto',
    'certification.problemDesc': 'Un sistema que debe adaptarse a las necesidades únicas de más de 3 universidades, con una enorme diversidad de tipos de estudiantes y combinaciones posibles para obtener títulos y certificados. La complejidad radica en ofrecer flexibilidad sin sacrificar la experiencia de usuario.',
    'certification.solutionTitle': 'La Solución',
    'certification.solutionDesc': 'Una plataforma unificada que permite múltiples modalidades de titulación, opciones de pago flexibles, carga de documentos y seguimiento en tiempo real. El sistema logró una reducción del 75% en tiempos de tramitación y carga operativa.',
    'certification.roleTitle': 'Mi Rol',
    'certification.roleDesc': 'Diseño de servicios backend a partir de las necesidades del frontend. Gestión del backlog detallado de actividades frontend en Linear. Pruebas de APIs, endpoints, pruebas end-to-end y unit tests con Jest.',
    'certification.metric1': '100,000 estudiantes',
    'certification.metric2': '60,000 administrativos',
    'certification.metric3': '75% reducción en tiempos',

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
    'about.currentlyLabel': 'Currently',
    'about.currently': 'AI Engineering Bootcamp',
    'about.currentlyWith': 'with ',
    'about.adventuresLabel': 'Outside the code',
    'about.adventures': 'Traveling through Mexico and the world for Tech and Martial Arts events',

    // Soft Skills
    'about.softSkillsMarquee': 'Communication • Leadership • Problem Solving • Adaptability • Teamwork • Creativity • Empathy • Analytical Thinking • Time Management • Attention to Detail •',
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
    'project2.title': 'Faculty Evaluation System',
    'project2.description': 'Back office for creating and managing faculty evaluation periods, used by 6,000 faculty members and 80,000 students.',
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

    // Shared Project Labels
    'project.multitenant': 'Multitenant Architecture',
    'project.multitenantDesc': 'System designed to operate with multiple universities simultaneously, each with its own configuration and isolated data.',

    // Faculty Evaluation Project Page
    'facultyEval.subtitle': 'Administrative system for educational institutions',
    'facultyEval.description': 'Back office for creating and managing faculty evaluation periods. Administrative staff manages date ranges for students to access their faculty surveys, with unique identifiers linked to active school cycles.',
    'facultyEval.problemTitle': 'The Context',
    'facultyEval.problemDesc': 'Educational institutions need to periodically evaluate their faculty to support hiring, retention, and career development processes. Managing these evaluation periods for a population of 6,000 faculty members and 80,000 students requires a robust and flexible system.',
    'facultyEval.solutionTitle': 'The Solution',
    'facultyEval.solutionDesc': 'A system that allows administrators to configure evaluation periods by university, enable or disable time extensions, and visualize key metrics through integrated Power BI reports: average ratings, student participation percentage, filters by faculty member or subject.',
    'facultyEval.roleTitle': 'My Role',
    'facultyEval.roleDesc': 'Complete frontend development of the system independently. Creation and management of the frontend activities backlog.',
    'facultyEval.stackTitle': 'Tech Stack',
    'facultyEval.metricsTitle': 'Metrics',
    'facultyEval.metric1': '6,000 faculty members',
    'facultyEval.metric2': '80,000 students',
    'facultyEval.metric3': 'Multiple universities',

    // Document Management Project Page
    'docManagement.subtitle': 'Digital student records for educational institutions',
    'docManagement.description': 'System where students register their personal information, demographic, medical, academic and employment data. Allows uploading official documentation required for their degree (bachelor, master, doctorate) and supplementary documents for scholarships or special promotions.',
    'docManagement.problemTitle': 'The Context',
    'docManagement.problemDesc': 'The traditional admission process required students to submit physical documentation, generating long waits and significant administrative burden. With over 100,000 students across multiple universities, the system needed to scale without compromising the experience.',
    'docManagement.solutionTitle': 'The Solution',
    'docManagement.solutionDesc': 'A digital platform that centralizes all student documentation. The system reduces document wait times by 80% and review time by 70%, transforming a process that used to take months into one that takes days.',
    'docManagement.featuresTitle': 'Key Features',
    'docManagement.feature1Title': 'Information Update',
    'docManagement.feature1Desc': 'Allows students to attach documentation associated with external procedures such as name changes or gender change, keeping the record always up to date.',
    'docManagement.feature2Title': 'Deadline System',
    'docManagement.feature2Desc': 'Feature that sets deadlines for document upload, encouraging students to complete the process. When time expires, they can request an extension through a complex calculation based on business rules and a wide diversity of enabled students.',
    'docManagement.migrationTitle': 'Technical Migration',
    'docManagement.migrationDesc': 'Initially developed in Bubble, the system was migrated to React/Next.js when the No-Code platform scalability limitations could not support the required user volume.',
    'docManagement.roleTitle': 'My Role',
    'docManagement.roleDesc': 'Backend service design based on frontend needs. Detailed backlog management in Linear. API and endpoint testing, end-to-end testing, and unit tests with Jest.',
    'docManagement.metric1': '100,000 students',
    'docManagement.metric2': '80% less wait time',
    'docManagement.metric3': '70% less review time',

    // Certification Project Page
    'certification.subtitle': 'University certification and degree system',
    'certification.description': 'Platform where students can manage their certification and degree process: choose modality (thesis, GPA, masters, diploma), make online or voucher payments, in installments or full, upload documentation and track the administrative process.',
    'certification.problemTitle': 'The Context',
    'certification.problemDesc': 'A system that must adapt to the unique needs of more than 3 universities, with an enormous diversity of student types and possible combinations to obtain degrees and certificates. The complexity lies in offering flexibility without sacrificing user experience.',
    'certification.solutionTitle': 'The Solution',
    'certification.solutionDesc': 'A unified platform that allows multiple degree modalities, flexible payment options, document upload and real-time tracking. The system achieved a 75% reduction in processing times and operational workload.',
    'certification.roleTitle': 'My Role',
    'certification.roleDesc': 'Backend service design based on frontend needs. Detailed frontend backlog management in Linear. API and endpoint testing, end-to-end testing, and unit tests with Jest.',
    'certification.metric1': '100,000 students',
    'certification.metric2': '60,000 administrators',
    'certification.metric3': '75% time reduction',

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
