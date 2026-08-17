"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Ganti ke "motion/react" jika proyek Anda menggunakannya
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import { Code2, Database, Network, Wrench, Terminal, Cpu } from "lucide-react";

const groupIcons = [Code2, Database, Network, Wrench];

export default function TechStack() {
  const { t } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<number>(0);

  const groups = t?.techStack?.groups || [
    {
      title: "Frontend Development",
      category: "CORE_ENGINE",
      items: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux / Zustand", "Framer Motion"],
    },
    {
      title: "Backend & Cloud",
      category: "SERVER_RUNTIME",
      items: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Prisma ORM", "Redis"],
    },
    {
      title: "Mobile Architecture",
      category: "MOBILE_STACK",
      items: ["React Native", "Expo CLI", "Native Modules", "App Store / Play Store"],
    },
    {
      title: "Tools & Ecosystem",
      category: "DEV_ENV",
      items: ["Git / GitHub", "Docker", "VS Code", "Postman", "Vercel", "Figma"],
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="mb-12 border-b border-[#293541] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#FF7A45]" />
            <span className="text-xs font-mono tracking-widest text-[#FF7A45] uppercase">
          
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#F5F1E8] sm:text-4xl">
            {t?.techStack?.title || "Technologies & Tools."}
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#9BA6B2] leading-relaxed">
          {t?.techStack?.description ||
            "A structured breakdown of languages, frameworks, and infrastructure used to build production-grade applications."}
        </p>
      </div>

      {/* BENTO GRID: TERMINAL MATRIX LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: INTERACTIVE SYSTEM SELECTOR (5 COLS) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-[11px] font-mono text-[#6F7B86] uppercase tracking-wider block mb-2">
            [ SELECT_ENVIRONMENT ]
          </span>

          {groups.map((group, index) => {
            const Icon = groupIcons[index % groupIcons.length];
            const isActive = activeGroup === index;
            const indexFormatted = `0${index + 1}`;

            return (
              <button
                key={group.title}
                onClick={() => setActiveGroup(index)}
                className={`w-full text-left p-4 border rounded-none font-mono transition-all duration-200 flex items-center justify-between group ${
                  isActive
                    ? "border-[#FF7A45] bg-[#17212B] text-[#F5F1E8]"
                    : "border-[#293541] bg-[#121921] text-[#9BA6B2] hover:border-[#293541]/80 hover:text-[#F5F1E8]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 border rounded-none transition-colors ${
                      isActive
                        ? "border-[#FF7A45] bg-[#FF7A45]/10 text-[#FF7A45]"
                        : "border-[#293541] bg-[#0E141B] text-[#6F7B86]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6F7B86] block">
                    
                    </span>
                    <span className="text-sm font-bold tracking-wide">
                      {group.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-mono transition-colors ${
                      isActive ? "text-[#FF7A45]" : "text-[#293541]"
                    }`}
                  >
                    {isActive ? "[ACTIVE]" : `0${index + 1}`}
                  </span>
                </div>
              </button>
            );
          })}

          {/* SYSTEM SUMMARY BOX */}
          <div className="mt-6 border border-[#293541] bg-[#0E141B] p-4 text-xs font-mono text-[#6F7B86]">
            <div className="flex items-center gap-2 text-[#FF7A45] mb-2">
              <Cpu size={14} />
              <span>SYSTEM_HEALTH: NOMINAL</span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#9BA6B2]">
              All stack frameworks are regularly updated for optimal performance, type-safety, and security compliance.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: TERMINAL MATRIX CONSOLE (7 COLS) */}
        <div className="lg:col-span-7 relative border border-[#293541] bg-[#121921] rounded-none p-6 sm:p-8">
          {/* CORNER BLUEPRINT ACCENTS */}
          <span className="absolute -top-1.5 -left-1.5 text-[#293541] text-xs font-mono">+</span>
          <span className="absolute -top-1.5 -right-1.5 text-[#293541] text-xs font-mono">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 text-[#293541] text-xs font-mono">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 text-[#293541] text-xs font-mono">+</span>

          {/* TERMINAL HEADER BAR */}
          <div className="border-b border-[#293541] pb-4 mb-6 flex items-center justify-between font-mono text-xs text-[#6F7B86]">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#FF7A45]" />
              <span>{groups[activeGroup]?.title}</span>
            </div>
            <span className="text-[#FF7A45] font-bold">READY</span>
          </div>

          {/* ACTIVE TECH ITEMS LIST GRID */}
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {groups[activeGroup]?.items.map((item, idx) => (
              <div
                key={item}
                className="group border border-[#293541] bg-[#0E141B] p-3.5 rounded-none font-mono text-xs flex items-center justify-between transition-colors hover:border-[#FF7A45] hover:bg-[#17212B]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[#FF7A45] font-bold">&gt;</span>
                  <span className="text-[#F5F1E8] group-hover:text-[#FF7A45] transition-colors">
                    {item}
                  </span>
                </div>
                <span className="text-[10px] text-[#293541] group-hover:text-[#6F7B86] transition-colors">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </motion.div>

          {/* FOOTER MATRIX META */}
          <div className="mt-8 pt-4 border-t border-[#293541]/60 flex items-center justify-between font-mono text-[11px] text-[#6F7B86]">
            <span>TOTAL_DEPS: {groups[activeGroup]?.items.length} MODULES</span>
            <span className="text-[#FF7A45]">STABLE_BUILD</span>
          </div>
        </div>
      </div>
    </section>
  );
}