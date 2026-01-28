import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project1',
    titleKey: 'project1.title',
    descriptionKey: 'project1.description',
    tags: ['WeWeb', 'Xano', 'Automatización', 'UX'],
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'project2',
    titleKey: 'project2.title',
    descriptionKey: 'project2.description',
    tags: ['Product Development', 'No-Code', 'Educación'],
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'project3',
    titleKey: 'project3.title',
    descriptionKey: 'project3.description',
    tags: ['Automatización', 'Procesos', 'Xano'],
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'project4',
    titleKey: 'project4.title',
    descriptionKey: 'project4.description',
    tags: ['AdTech', 'Prebid.js', 'JavaScript', 'APIs'],
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'project5',
    titleKey: 'project5.title',
    descriptionKey: 'project5.description',
    tags: ['Power BI', 'APIs', 'Analytics', 'Xandr'],
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'project6',
    titleKey: 'project6.title',
    descriptionKey: 'project6.description',
    tags: ['Emprendimiento', 'Operaciones', 'Marketing'],
    projectUrl: '/en/projects/tojol',
    featured: false,
  },
];
