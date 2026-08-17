"use client";

import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Email", href: "mailto:hello@anjes.dev" },
  ];

  return (
    <footer className="relative border-t border-[#293541] bg-[#0E141B] px-6 py-10">
      {/* CORNER ACCENTS */}
      <span className="absolute -top-1.5 left-6 text-[#293541] text-xs font-mono">+</span>
      <span className="absolute -top-1.5 right-6 text-[#293541] text-xs font-mono">+</span>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row font-mono text-xs text-[#9BA6B2]">
        {/* Left: Copyright & Rights */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="text-[#FF7A45] font-bold"> </span>
          <span className="hidden sm:inline text-[#293541]">•</span>
          <p>
            © {year} {t?.footer?.rights || "All Rights Reserved."}
          </p>
        </div>

        {/* Right: Social Links Grid */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          {socialLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[#6F7B86] hover:text-[#FF7A45] transition-colors"
            >
              <span className="text-[10px] text-[#293541] group-hover:text-[#FF7A45]/60 transition-colors">
                [0{idx + 1}]
              </span>
              <span>{link.name}</span>
              <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>

      {/* System Build Tag */}
      <div className="mx-auto max-w-7xl mt-8 pt-4 border-t border-[#293541]/40 flex items-center justify-between font-mono text-[10px] text-[#293541]">
        <span>SYS_STATUS: ONLINE</span>
        <span>DESIGN_SYSTEM: ARCHITECTURAL_DARK</span>
      </div>
    </footer>
  );
}