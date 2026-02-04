import { ui, shared, defaultLang, type AllKeys, type Language } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: AllKeys | string): string {
    // Buscar primero en shared (valores sin traducción)
    if (key in shared) {
      return shared[key as keyof typeof shared];
    }
    // Luego buscar en traducciones del idioma actual o fallback
    const translations = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    return translations[key] || fallback[key] || key;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  // Si la primera parte es un código de idioma, quitarlo
  if (parts[0] in ui) {
    parts.shift();
  }

  return '/' + parts.join('/');
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
