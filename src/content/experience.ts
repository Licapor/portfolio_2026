// Trayectoria profesional. Fuente: CV "Senior - Lead Software Engineer / AI & Product
// Integration" (versión en inglés, ago 2026). Los nombres de empresa y el stack son nombres
// propios y no se traducen; el periodo, la ubicación y el contexto sí, por eso van como *Key.

export interface Role {
  company: string;
  periodKey: string;
  locationKey: string;
  /** El puesto va en inglés en ambas versiones del CV. */
  title: string;
  /** Proyectos o productos bajo ese puesto. Opcional. */
  contextKey?: string;
  stack: string[];
  current?: boolean;
}

export const roles: Role[] = [
  {
    company: 'Tech Benders',
    periodKey: 'exp.tb.period',
    locationKey: 'exp.tb.location',
    title: 'Lead Front-end Developer & Product Engineer',
    contextKey: 'exp.tb.context',
    stack: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'REST / GraphQL',
      'Python',
      'SQL',
      'Vercel',
      'Claude Code',
    ],
    current: true,
  },
  {
    company: 'Xandr',
    periodKey: 'exp.xandr.period',
    locationKey: 'exp.xandr.location',
    title: 'Technical Solutions Specialist',
    stack: [
      'Xandr Monetize (SSP)',
      'Xandr Invest (DSP)',
      'Google Ad Manager',
      'Prebid.js',
      'JavaScript',
      'Power BI',
      'SQL',
    ],
  },
  {
    company: 'Segundamano',
    periodKey: 'exp.sm.period',
    locationKey: 'exp.sm.location',
    title: 'Front End Developer',
    stack: ['JavaScript', 'Prebid.js', 'Xandr APIs', 'Google Ad Manager', 'HTML5', 'CSS3'],
  },
];

/**
 * Trabajo fuera de la ingeniería. Sección aparte, igual que "Other Experience" en el CV:
 * cuenta como trayectoria pero no compite con los puestos de software.
 */
export const otherExperience = {
  titleKey: 'project6.title',
  periodKey: 'other.period',
  locationKey: 'other.location',
  roleKey: 'other.role',
  descriptionKey: 'other.description',
  /** Solo existe en español; en inglés la fila se muestra sin enlace. */
  projectUrl: '/projects/tojol',
};

export interface Education {
  school: string;
  programKey?: string;
  periodKey: string;
}

export const education: Education[] = [
  { school: 'UNID', programKey: 'exp.unid.program', periodKey: 'exp.unid.period' },
  { school: 'Nieva Team', programKey: 'exp.nieva.program', periodKey: 'exp.nieva.period' },
  { school: 'Dev.f', periodKey: 'exp.devf.period' },
  { school: 'Laboratoria', periodKey: 'exp.laboratoria.period' },
];
