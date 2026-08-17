"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Ganti ke "motion/react" jika proyek Anda menggunakannya
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: t?.nav?.about || "About", href: "#about", code: "01" },
    { label: t?.nav?.projects || "Projects", href: "#projects", code: "02" },
    { label: t?.nav?.experience || "Experience", href: "#experience", code: "03" },
    { label: t?.nav?.contact || "Contact", href: "#contact", code: "04" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#293541] bg-[#0E141B]/90 backdrop-blur-md font-mono text-xs">
      {/* OVERLAY GRID LINE ACCENT */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#29354112_1px,transparent_1px)] bg-[size:3rem_100%]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* LOGO: ARCHITECTURAL BRANDING */}
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-bold tracking-tight text-[#F5F1E8] transition-colors hover:text-[#FF7A45]"
        >
          <span className="flex h-7 w-7 items-center justify-center border border-[#293541] bg-[#121921] text-[#FF7A45] rounded-none group-hover:border-[#FF7A45] transition-colors">
            AV
          </span>
          <span className="hidden sm:inline-block">Anjes Vernanda</span>
          <span className="text-[#FF7A45] font-normal"> </span>
        </a>

        {/* DESKTOP NAVIGATION LINKS */}
        <ul className="hidden items-center gap-7 text-[#9BA6B2] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-1.5 transition-colors hover:text-[#F5F1E8]"
              >
                <span className="text-[10px] text-[#6F7B86] group-hover:text-[#FF7A45] transition-colors">
                  {link.code}.
                </span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-3">
          <LanguageToggle />

          {/* CTA CONNECT BUTTON */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 border-l-2 border-[#FF7A45] bg-[#FF7A45] px-4 py-2 font-mono text-xs font-semibold text-[#101820] rounded-none transition-all hover:bg-[#FF9A70] active:scale-[0.98]"
          >
            <span>{t?.nav?.connect || "CONNECT"}</span>
            <ArrowUpRight size={14} />
          </a>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center border border-[#293541] bg-[#121921] text-[#F5F1E8] rounded-none md:hidden hover:border-[#FF7A45]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-b border-[#293541] bg-[#121921] px-6 py-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[#293541]/50 pb-3 text-sm text-[#F5F1E8] hover:text-[#FF7A45]"
                >
                  <span className="font-bold">{link.label}</span>
                  <span className="text-xs text-[#6F7B86]">{link.code} </span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 border-l-2 border-[#FF7A45] bg-[#FF7A45] py-3 text-center text-xs font-bold text-[#101820] rounded-none"
              >
                <span>{t?.nav?.connect || "CONNECT"}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}