import { en } from "./en";
import { de } from "./de";

export const languages = { en: "English", de: "Deutsch" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";
export const translations = { en, de } as const;

export function getLangFromUrl(url: URL): Lang {
    const [, first] = url.pathname.split("/");
    if (first in translations) return first as Lang;
    return defaultLang;
}

export function useTranslations(lang: Lang) {
    return translations[lang];
}

export function getLocalizedPath(path: string, lang: Lang): string {
    if (lang === defaultLang) return path;
    return `/de${path === "/" ? "" : path}`;
}

export function getAlternatePath(url: URL): string {
    const lang = getLangFromUrl(url);
    const base = url.pathname.replace(/^\/de/, "") || "/";
    if (lang === "de") return base;
    return `/de${url.pathname === "/" ? "" : url.pathname}`;
}
