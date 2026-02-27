# Portfolio 2026

Portfolio personal construido con Astro, Tailwind CSS y TypeScript.

**Live:** [licapor.dev](https://licapor.dev)

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript (strict)
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics + Microsoft Clarity

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, About, Projects, Contact
│   └── ui/              # Componentes reutilizables
├── content/             # Data (projects, skills, navigation)
├── i18n/
│   ├── translations/    # Traducciones por dominio
│   └── utils.ts         # Helpers de i18n
├── layouts/             # Layout principal
├── pages/               # Rutas (ES default, EN en /en/)
└── styles/              # CSS global
```

## Internacionalización

El sitio soporta Español (default) e Inglés. Las traducciones están organizadas por dominio:

- `nav.ts` - Navegación
- `hero.ts` - Hero section
- `about.ts` - About section
- `projects.ts` - Proyectos
- `contact.ts` - Contacto
- `projectPages.ts` - Páginas individuales de proyectos

## Scripts

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Verificar código con ESLint
npm run lint:fix     # Auto-corregir errores de lint
npm run format       # Formatear con Prettier
npm run test         # Ejecutar tests
```

## CI/CD

GitHub Actions ejecuta automáticamente en cada push/PR:
- Linting
- Tests
- Build de verificación

Vercel despliega automáticamente en cada push a `main`.
