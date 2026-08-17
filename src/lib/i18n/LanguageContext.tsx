"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "anjes-portfolio-locale";

// Empty subscribe listener untuk useSyncExternalStore
const emptySubscribe = () => () => {};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Detector apakah komponen sudah di-mount di Client Browser
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [localeState, setLocaleState] = useState<Locale>("en");

  // Baca localStorage hanya saat berjalan di client
  const activeLocale: Locale = useMemo(() => {
    if (!isClient) return "en";

    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "id") {
      return saved;
    }

    const browserLang = window.navigator.language?.toLowerCase() ?? "";
    if (browserLang.startsWith("id")) {
      return "id";
    }

    return localeState;
  }, [isClient, localeState]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const toggleLocale = () => setLocale(activeLocale === "en" ? "id" : "en");

  const value = useMemo(
    () => ({
      locale: activeLocale,
      t: translations[activeLocale],
      setLocale,
      toggleLocale,
    }),
    [activeLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}