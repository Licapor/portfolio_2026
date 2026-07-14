// Per-project config for the Lottus detail pages. Markup lives in
// src/components/pages/ProjectDetail.astro; copy lives in src/i18n/translations/projectPages.ts.
export interface StackItem {
  name: string;
  category: string;
}

export interface ProjectMetric {
  value: string;
  labelKey: string; // suffix, resolved as `${i18nPrefix}.${labelKey}`
}

export interface ProjectDetailConfig {
  i18nPrefix: 'docManagement' | 'facultyEval' | 'certification';
  titleKey: string;
  videoId: string;
  metrics: ProjectMetric[];
  roleTags: string[];
  aiTags: string[];
  stack: StackItem[];
  hasFeatures?: boolean;
  hasMigration?: boolean;
}

const AI_TAGS = ['Claude Code', '.claudeskills', 'MCP (Model Context Protocol)', 'Prompt Engineering'];

const BASE_STACK: StackItem[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Jest', category: 'Testing' },
  { name: 'AWS', category: 'Backend' },
  { name: 'DynamoDB', category: 'Backend' },
  { name: 'Linear', category: 'Management' },
  { name: 'Figma', category: 'Design' },
  { name: 'Claude Code', category: 'AI Engineering' },
];

export const projectDetails = {
  'gestion-documental': {
    i18nPrefix: 'docManagement',
    titleKey: 'project1.title',
    videoId: 'Demo_Expediente_digital_nw7x8y',
    metrics: [
      { value: '100K', labelKey: 'metric1Label' },
      { value: '-80%', labelKey: 'metric2Label' },
      { value: '-70%', labelKey: 'metric3Label' },
    ],
    roleTags: ['Backend Service Design', 'Backlog (Linear)', 'API Testing', 'E2E & Unit Tests'],
    aiTags: AI_TAGS,
    stack: BASE_STACK,
    hasFeatures: true,
    hasMigration: true,
  },
  'evaluacion-docente': {
    i18nPrefix: 'facultyEval',
    titleKey: 'project2.title',
    videoId: 'Demo_Evaluacion_Docente_bj5c35',
    metrics: [
      { value: '6K', labelKey: 'metric1Label' },
      { value: '80K', labelKey: 'metric2Label' },
    ],
    roleTags: ['Frontend Development', 'Backlog Management', 'React / Next.js'],
    aiTags: AI_TAGS,
    stack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'AWS', category: 'Backend' },
      { name: 'DynamoDB', category: 'Backend' },
      { name: 'Power BI', category: 'Analytics' },
      { name: 'Figma', category: 'Design' },
      { name: 'Claude Code', category: 'AI Engineering' },
    ],
    hasFeatures: false,
    hasMigration: false,
  },
  'titulacion': {
    i18nPrefix: 'certification',
    titleKey: 'project3.title',
    videoId: 'Demo_MET_MEC_xzlyjz',
    metrics: [
      { value: '100K', labelKey: 'metric1Label' },
      { value: '60K', labelKey: 'metric2Label' },
      { value: '-75%', labelKey: 'metric3Label' },
    ],
    roleTags: ['Backend Service Design', 'Backlog (Linear)', 'API Testing', 'E2E & Unit Tests'],
    aiTags: AI_TAGS,
    stack: BASE_STACK,
    hasFeatures: false,
    hasMigration: false,
  },
} as const satisfies Record<string, ProjectDetailConfig>;

export type ProjectDetailSlug = keyof typeof projectDetails;
