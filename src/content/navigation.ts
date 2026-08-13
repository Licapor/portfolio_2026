import type { NavLink } from '../types';

export const navLinks: NavLink[] = [
  // El orden sigue el de la página: About → Projects → Experience → Contact.
  // Con cuatro entradas el nav se lee como recorrido, y saltar hacia atrás
  // desorienta.
  { href: '#about', labelKey: 'nav.about' },
  { href: '#work', labelKey: 'nav.projects' },
  { href: '#experience', labelKey: 'nav.experience' },
  { href: '#contact', labelKey: 'nav.contact' },
];
