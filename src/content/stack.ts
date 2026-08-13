export interface SkillCategory {
  titleKey: string;
  items: string[];
}

// Technical skill groups (from CV). Item names are proper/brand nouns → not translated.
export const stackCategories: SkillCategory[] = [
  {
    titleKey: 'stack.agentic',
    items: [
      'AI Agent Design',
      'MCP Servers',
      'Tool Use / Function Calling',
      'RAG',
      'LLM Integration',
      'Prompt Engineering',
      'AI Workflow Automation',
      'AI-Assisted Development',
      'Claude Code',
    ],
  },
  {
    titleKey: 'stack.stack',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'React',
      'Next.js',
      'Astro',
      'Node.js',
      'Express.js',
      'REST / GraphQL',
      'Git / GitHub',
    ],
  },
  {
    titleKey: 'stack.engineering',
    items: [
      'Solution Architecture',
      'API Contract Design',
      'Legacy Modernization',
      'Incremental Refactoring',
      'Code Review',
      'Mentoring',
      'Technical Estimation',
    ],
  },
  {
    titleKey: 'stack.data',
    items: ['SQL', 'dbt', 'Snowflake', 'AWS Athena', 'Power BI', 'Vector Databases'],
  },
  {
    titleKey: 'stack.product',
    items: [
      'Requirements Analysis',
      'Discovery Workshops',
      'Stakeholder Management',
      'Backlog Management',
      'Roadmap Planning',
      'Sprint Prioritization',
      'Agile',
    ],
  },
  {
    titleKey: 'stack.adtech',
    items: ['Google Ad Manager', 'Xandr (SSP / DSP)', 'Prebid.js', 'Programmatic'],
  },
];
