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
      'Claude Code',
    ],
  },
  {
    titleKey: 'stack.stack',
    items: ['Python', 'TypeScript', 'Node.js', 'React', 'Next.js', 'Astro', 'REST / GraphQL', 'Git / GitHub'],
  },
  {
    titleKey: 'stack.arch',
    items: ['Solution Architecture', 'No-Code / Low-Code', 'Power BI', 'SQL', 'Vector Databases'],
  },
  {
    titleKey: 'stack.product',
    items: ['Requirements Analysis', 'Backlog Management', 'Stakeholder Management', 'Discovery Workshops', 'Agile'],
  },
  {
    titleKey: 'stack.adtech',
    items: ['Google Ad Manager', 'Xandr (SSP / DSP)', 'Prebid.js', 'Programmatic'],
  },
];
