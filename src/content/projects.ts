import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project6',
    titleKey: 'project6.title',
    descriptionKey: 'project6.description',
    tags: ['Hostelería', 'Operaciones', 'Marketing'],
    video: 'https://res.cloudinary.com/db50dpczx/video/upload/q_auto,w_1080/tojol_gjfoay.mp4',
    image: 'https://res.cloudinary.com/db50dpczx/raw/upload/v1770167481/tojol_gjfoay_poster',
    projectUrl: '/projects/tojol',
    layout: 'tall',
  },
  {
    id: 'project1',
    titleKey: 'project1.title',
    descriptionKey: 'project1.description',
    tags: ['React', 'Next.js', 'TypeScript', 'AWS', 'Claude Code'],
    image: 'https://res.cloudinary.com/db50dpczx/video/upload/so_0,q_auto,w_1080/Demo_Expediente_digital_nw7x8y.jpg',
    projectUrl: '/projects/gestion-documental',
    layout: 'wide',
  },
  {
    id: 'project2',
    titleKey: 'project2.title',
    descriptionKey: 'project2.description',
    tags: ['React', 'Next.js', 'TypeScript', 'AWS', 'Claude Code'],
    image: 'https://res.cloudinary.com/db50dpczx/video/upload/so_0,q_auto,w_1080/Demo_Evaluacion_Docente_bj5c35.jpg',
    projectUrl: '/projects/evaluacion-docente',
  },
  {
    id: 'project3',
    titleKey: 'project3.title',
    descriptionKey: 'project3.description',
    tags: ['React', 'Next.js', 'TypeScript', 'AWS', 'Claude Code'],
    image: 'https://res.cloudinary.com/db50dpczx/video/upload/so_0,q_auto,w_1080/Demo_MET_MEC_xzlyjz.jpg',
    projectUrl: '/projects/titulacion',
  },
];
