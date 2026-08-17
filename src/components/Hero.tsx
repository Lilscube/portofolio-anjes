"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Ganti ke "motion/react" jika menggunakan package tersebut
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import Image from "next/image";

const codeLines = [
  "const developer = {",
  "  name: 'Anjes Vernanda',",
  "  role: 'Software Developer',",
  "  skills: ['React', 'Next.js', 'React Native', 'TypeScript'],",
  "  status: 'Open for opportunities',",
  "};",
  "",
  "developer.buildImpactfulApps();",
];

const fullCode = codeLines.join("\n");

export default function Hero() {
  const { t } = useLanguage();
  const [displayedCode, setDisplayedCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, index + 1));
      index++;

      if (index >= fullCode.length) {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(fullCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-6 pt-12 pb-24 flex items-center justify-center"
    >
      {/* Background Ambient Grid & Radial Soft Light */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,122,69,0.12),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#2935411a_1px,transparent_1px),linear-gradient(to_bottom,#2935411a_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="mx-auto max-w-7xl w-full grid items-center gap-12 lg:grid-cols-12">
        {/* =====================================================
            LEFT CONTENT (COLUMN 7)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Headline */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl leading-[1.15]">
            {t?.hero?.titleLine1 || "Crafting digital"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] to-[#FF9B70]">
              {t?.hero?.titleAccent || "experiences"}
            </span>{" "}
            {t?.hero?.titleLine2 || "that matter."}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#9BA6B2]">
            {t?.hero?.description ||
              "Passionate Software Developer focusing on building clean, performant, and accessible web & mobile applications with modern technologies."}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-l-2 border-[#FF7A45] bg-[#FF7A45] px-6 py-3.5 font-semibold text-[#101820] shadow-md shadow-[#FF7A45]/20 rounded-none transition-all hover:bg-[#FF9B70] active:scale-[0.98]"
            >
              <span>{t?.hero?.viewProjects || "VIEW_MY_WORK"}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center border border-[#293541] bg-[#17212B]/80 px-6 py-3.5 font-semibold text-[#F5F1E8] rounded-none transition-all hover:border-[#FF7A45]/50 hover:bg-[#17212B] active:scale-[0.98]"
            >
              {t?.hero?.contactMe || "GET_IN_TOUCH"}
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-10 pt-6 border-t border-[#293541]/50 flex items-center gap-6 text-xs text-[#6F7B86] font-mono">
            <span>CORE_STACK:</span>
            <div className="flex flex-wrap items-center gap-3 text-[#9BA6B2]">
              <span className="hover:text-[#F5F1E8] transition-colors">React / Next.js</span>
              <span>•</span>
              <span className="hover:text-[#F5F1E8] transition-colors">TypeScript</span>
              <span>•</span>
              <span className="hover:text-[#F5F1E8] transition-colors">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT SIDE: CODE TERMINAL WITH OVERLAY PHOTO (COLUMN 5)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-6 lg:mt-0"
        >
          {/* Main Code Terminal Container */}
          <div className="group relative border border-[#293541] bg-[#121921] shadow-2xl rounded-none pb-12 transition-colors hover:border-[#293541]/80">
            {/* BLUEPRINT CROSSHAIR ACCENTS */}
            <span className="absolute -top-1.5 -left-1.5 text-[#293541] text-xs font-mono">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#293541] text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#293541] text-xs font-mono">+</span>

            {/* Header / Window Controls */}
            <div className="flex items-center justify-between border-b border-[#293541] bg-[#17212B]/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#FF5F56]/80 rounded-none" />
                <div className="h-3 w-3 bg-[#FFBD2E]/80 rounded-none" />
                <div className="h-3 w-3 bg-[#27C93F]/80 rounded-none" />
                <span className="ml-2 text-xs font-mono text-[#6F7B86]">developer.ts</span>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyCode}
                className="text-xs font-mono text-[#6F7B86] hover:text-[#FF7A45] transition-colors focus:outline-none"
                title="Copy code"
              >
                {isCopied ? "[ COPIED ]" : "[ COPY ]"}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-[#D8D5CC] min-h-[280px]">
              <pre className="overflow-x-auto whitespace-pre-wrap">
                <code>
                  {displayedCode}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-[#FF7A45] ml-0.5 align-middle"
                  />
                </code>
              </pre>
            </div>

            {/* Terminal Footer */}
            <div className="border-t border-[#293541]/60 bg-[#0E141B] px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-[#6F7B86]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-emerald-500 rounded-none" />
                <span>UTF-8</span>
              </div>
              <span>TypeScript</span>
            </div>

            {/* =====================================================
                PROFILE PHOTO OVERLAY (POJOK KANAN BAWAH)
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 z-20"
            >
              <div className="relative border-2 border-[#293541] bg-[#0E141B] p-1.5 shadow-2xl rounded-none transition-colors group-hover:border-[#FF7A45]">
                {/* Crosshair Accent */}
                <span className="absolute -top-1.5 -right-1.5 text-[#FF7A45] text-xs font-mono">+</span>

                {/* Photo Frame Container */}
                <div className="relative w-28 h-36 sm:w-32 sm:h-40 overflow-hidden border border-[#293541] bg-[#17212B]">
                  {/* Ganti src ke path foto Anda di folder public, contoh: /profile.jpg */}
                  <Image
                    src="/images/anjeshitamputih.jpg"
                    alt="I Putu Anjes Vernanda"
                    fill
                    className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    priority
                  />

                  {/* Blueprint Grid Overlay di Atas Foto */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#FF7A4515_1px,transparent_1px),linear-gradient(to_bottom,#FF7A4515_1px,transparent_1px)] bg-[size:0.75rem_0.75rem]" />
                </div>

                {/* Profile Badge Label */}
                <div className="mt-1.5 flex items-center justify-between font-mono text-[9px] text-[#6F7B86] px-1">
                  <span className="text-[#F5F1E8] font-bold">DEV_DEV</span>
                  <span className="text-[#FF7A45]">LIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}