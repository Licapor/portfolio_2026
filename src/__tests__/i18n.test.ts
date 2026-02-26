import { describe, it, expect } from 'vitest';
import { ui, shared, languages, defaultLang } from '../i18n/ui';

describe('i18n translations', () => {
  const supportedLanguages = Object.keys(languages) as Array<keyof typeof languages>;

  it('should have all supported languages defined', () => {
    expect(supportedLanguages).toContain('es');
    expect(supportedLanguages).toContain('en');
  });

  it('should have a valid default language', () => {
    expect(supportedLanguages).toContain(defaultLang);
  });

  it('should have matching keys in all language translations', () => {
    const esKeys = Object.keys(ui.es).sort();
    const enKeys = Object.keys(ui.en).sort();

    // Check that both languages have the same keys
    expect(esKeys).toEqual(enKeys);
  });

  it('should not have empty translation values', () => {
    const emptyTranslations: string[] = [];

    supportedLanguages.forEach((lang) => {
      Object.entries(ui[lang]).forEach(([key, value]) => {
        if (typeof value === 'string' && value.trim() === '') {
          emptyTranslations.push(`${lang}.${key}`);
        }
      });
    });

    expect(emptyTranslations).toEqual([]);
  });

  it('should have all shared keys defined', () => {
    const sharedKeys = Object.keys(shared);
    expect(sharedKeys.length).toBeGreaterThan(0);

    // Verify shared keys have values
    sharedKeys.forEach((key) => {
      expect(shared[key as keyof typeof shared]).toBeDefined();
    });
  });

  it('should have required navigation keys in both languages', () => {
    const requiredNavKeys = ['nav.projects', 'nav.about', 'nav.contact', 'nav.cta'];

    supportedLanguages.forEach((lang) => {
      requiredNavKeys.forEach((key) => {
        expect(ui[lang]).toHaveProperty(key);
      });
    });
  });

  it('should have required contact keys in both languages', () => {
    const requiredContactKeys = [
      'contact.label',
      'contact.title',
      'contact.description',
      'contact.emailLabel',
    ];

    supportedLanguages.forEach((lang) => {
      requiredContactKeys.forEach((key) => {
        expect(ui[lang]).toHaveProperty(key);
      });
    });
  });
});
