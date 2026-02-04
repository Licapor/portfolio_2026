// ============================================
// Data Types - Estructuras de datos del contenido
// ============================================

/** Layout variants para tarjetas de proyecto en el grid bento */
export type ProjectLayout = 'default' | 'wide' | 'tall';

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  image?: string;
  video?: string;
  demoUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  /** Layout en grid: 'wide' = 2 cols, 'tall' = 2 rows, 'default' = 1x1 */
  layout?: ProjectLayout;
}

export interface Skill {
  nameKey: string;
  level: number; // 0-100
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  href: string;
  labelKey: string;
}

// ============================================
// Component Props - Props de componentes Astro
// ============================================

export interface ButtonProps {
  variant?: 'primary' | 'outline';
  href?: string;
  type?: 'button' | 'submit';
  class?: string;
}

export interface SectionHeaderProps {
  labelKey: string;
  titleKey: string;
  titleOutlineKey?: string;
}

export interface BentoCardProps {
  class?: string;
  variant?: 'default' | 'dark' | 'gradient';
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  demoUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  featured?: boolean;
  featuredLabel?: string;
  color?: 'emerald' | 'gray';
}
