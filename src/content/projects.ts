import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project7',
    titleKey: 'project7.title',
    descriptionKey: 'project7.description',
    tags: ['Next.js', 'IA', 'Vercel', 'Claude Code'],
    art: '/logos/wislab.webp',
    artVariant: 'wislab',
    demoUrl: 'https://wislab.app',
    featured: true,
    layout: 'wide',
  },
  {
    id: 'project1',
    titleKey: 'project1.title',
    descriptionKey: 'project1.description',
    tags: ['React', 'Next.js', 'TypeScript', 'AWS', 'Claude Code'],
    image: 'https://res.cloudinary.com/db50dpczx/video/upload/so_0,q_auto,w_1080/Demo_Expediente_digital_nw7x8y.jpg',
    projectUrl: '/projects/gestion-documental',
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
