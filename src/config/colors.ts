// Paleta de colores centralizada
// Estos valores se usan en tailwind.config.mjs y como referencia

export const colors = {
  // Paleta principal
  cream: {
    DEFAULT: '#EEE8B2',
    light: '#F5F2CE',
  },
  gold: {
    DEFAULT: '#C18D52',
    light: '#D4A76A',
    dark: '#A67A45',
  },
  dark: {
    DEFAULT: '#081B1B',
    teal: '#203B37',
  },
  sage: {
    DEFAULT: '#5A8F76',
    light: '#6FA388',
  },
  mint: {
    DEFAULT: '#96CDB0',
    light: '#B0DBC4',
  },
  // Color de acento principal (emerald para botones y elementos interactivos)
  emerald: {
    DEFAULT: '#10b981',
    dark: '#047857',
    light: '#34d399',
  },
} as const;

// Nombres semánticos para uso en componentes
export const semanticColors = {
  primary: colors.emerald.DEFAULT,
  primaryDark: colors.emerald.dark,
  primaryLight: colors.emerald.light,
  background: '#ffffff',
  backgroundAlt: colors.cream.DEFAULT,
  text: colors.dark.DEFAULT,
  textMuted: '#6b7280', // gray-500
  accent: colors.gold.DEFAULT,
} as const;
