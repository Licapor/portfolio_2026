import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project6',
    titleKey: 'project6.title',
    descriptionKey: 'project6.description',
    tags: ['Hostelería', 'Operaciones', 'Marketing'],
    video: 'https://res.cloudinary.com/db50dpczx/video/upload/tojol_gjfoay.mp4',
    image: 'https://res.cloudinary.com/db50dpczx/raw/upload/v1770167481/tojol_gjfoay_poster',
    projectUrl: '/en/projects/tojol',
    layout: 'tall',
  },
  {
    id: 'project1',
    titleKey: 'project1.title',
    descriptionKey: 'project1.description',
    tags: ['WeWeb', 'Xano', 'Automatización', 'UX'],
    layout: 'wide',
  },
  {
    id: 'project2',
    titleKey: 'project2.title',
    descriptionKey: 'project2.description',
    tags: ['Product Development', 'No-Code', 'Educación'],
  },
  {
    id: 'project3',
    titleKey: 'project3.title',
    descriptionKey: 'project3.description',
    tags: ['Automatización', 'Procesos', 'Xano'],
  },
];
