"use client";

import { useLanguage } from "@/src/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center border border-white/10 bg-white/5 p-0.5 text-xs font-medium">
      {(["en", "id"] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => setLocale(lng)}
          aria-pressed={locale === lng}
          className={` px-2.5 py-1 transition-colors ${
            locale === lng
              ? "bg-[#FF7A45] text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
