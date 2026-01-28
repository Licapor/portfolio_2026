// Tipos TypeScript para el portfolio

export interface Project {
  id: string;
  titleKey: string;        // Key para i18n
  descriptionKey: string;  // Key para i18n
  tags: string[];
  image?: string;          // URL de imagen preview
  video?: string;          // URL de video preview
  demoUrl?: string;
  codeUrl?: string;
  projectUrl?: string;     // URL interna para página de proyecto dedicada
  featured: boolean | 'tall';  // true = wide (2 cols), 'tall' = tall (2 rows)
}

export interface Skill {
  nameKey: string;  // Key para i18n
  level: number;    // 0-100
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;  // SVG path
}

export interface NavLink {
  href: string;
  labelKey: string;  // Key para i18n
}

// Props para componentes
export interface ButtonProps {
  variant?: 'primary' | 'outline';
  href?: string;
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
