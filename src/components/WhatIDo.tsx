"use client";

import { motion } from "framer-motion"; // Ganti ke "motion/react" jika proyek Anda menggunakannya
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import { Code2, Server, Smartphone, Palette } from "lucide-react";

const icons = [Code2, Server, Smartphone, Palette];

export default function WhatIDo() {
  const { t } = useLanguage();

  // Fallback data jika i18n belum terisi penuh
  const items = t?.whatIDo?.items || [
    {
      title: "Frontend Development",
      description: "Building responsive, high-performance web applications using modern frameworks.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description: "Designing scalable APIs, database architecture, and secure server-side solutions.",
      tags: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Mobile App Development",
      description: "Crafting cross-platform mobile experiences with fluid UI and native performance.",
      tags: ["React Native", "Expo", "Mobile UI"],
    },
    {
      title: "UI/UX & Design Systems",
      description: "Creating intuitive interfaces and reusable component libraries for seamless user journeys.",
      tags: ["Figma", "Design Systems", "Prototyping"],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* SECTION HEADER */}
      <div className="mb-12 border-b border-[#293541] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF7A45] uppercase">
          
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#F5F1E8] sm:text-4xl">
            {t?.whatIDo?.title || "What I Do."}
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#9BA6B2] leading-relaxed">
          {t?.whatIDo?.description ||
            "Delivering end-to-end digital solutions focused on code quality, performance, and user experience."}
        </p>
      </div>

      {/* CARDS GRID (SHARP CORNERS) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          const indexFormatted = `0${i + 1}`;

          return (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="group relative border border-[#293541] bg-[#121921] p-8 rounded-none transition-all duration-300 hover:border-[#FF7A45] hover:bg-[#17212B]"
            >
              {/* Top Card Header: Index & Icon */}
              <div className="flex items-center justify-between border-b border-[#293541] pb-4 mb-6 group-hover:border-[#FF7A45]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#293541] bg-[#0E141B] text-[#FF7A45] group-hover:border-[#FF7A45]/50 transition-colors">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs text-[#6F7B86] group-hover:text-[#F5F1E8] transition-colors">
                    SERVICE_{indexFormatted}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-[#293541] group-hover:text-[#FF7A45] transition-colors">
                  {indexFormatted}/
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#F5F1E8] group-hover:text-[#FF7A45] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#9BA6B2]">
                {item.description}
              </p>

              {/* Tech Stack Tags (Sharp Badges) */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#293541] bg-[#0E141B] px-2.5 py-1 text-[11px] font-mono text-[#9BA6B2] rounded-none transition-colors group-hover:border-[#293541] hover:!border-[#FF7A45] hover:!text-[#F5F1E8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Sharp Corner Marker Accent */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#293541] group-hover:border-[#FF7A45] transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#293541] group-hover:border-[#FF7A45] transition-colors" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}