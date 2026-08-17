"use client";

import { motion } from "framer-motion"; // Ganti ke "motion/react" jika proyek Anda menggunakannya
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();

  const projects = t?.projects?.items || [
    {
      title: "Enterprise E-Commerce Platform",
      description: "A high-scalable web platform with real-time inventory management, payment gateway integration, and localized checkout support.",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Stripe"],
      link: "#",
    },
    {
      title: "Fintech Dashboard Analytics",
      description: "Interactive data visualization tool for tracking personal finances, investments, and algorithmic market insights.",
      tags: ["React", "Chart.js", "Express.js", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20 overflow-hidden">
      {/* BACKGROUND LINE GRID OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#2935411a_1px,transparent_1px),linear-gradient(to_bottom,#2935411a_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* SECTION HEADER */}
      <div className="mb-12 border-b border-[#293541] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#FF7A45]" />
            <span className="text-xs font-mono tracking-widest text-[#FF7A45] uppercase">
             
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#F5F1E8] sm:text-4xl">
            {t?.projects?.title || "Selected Projects."}
          </h2>
        </div>

        <a
          href="#all-projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#FF7A45] hover:text-[#FF9A70] transition-colors group uppercase tracking-wider"
        >
          <span>{t?.projects?.viewAll || "View Archive"}</span>
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* PROJECT CARDS LIST */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="space-y-8"
      >
        {projects.map((project, index) => {
          const projectIndex = `0${index + 1}`;

          return (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="group relative border border-[#293541] bg-[#121921] rounded-none transition-all duration-300 hover:border-[#FF7A45] grid grid-cols-1 lg:grid-cols-12"
            >
              {/* CROSSHAIR CORNER ACCENTS (Blueprint Style) */}
              <span className="absolute -top-1.5 -left-1.5 text-[#293541] group-hover:text-[#FF7A45] text-xs font-mono transition-colors">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-[#293541] group-hover:text-[#FF7A45] text-xs font-mono transition-colors">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-[#293541] group-hover:text-[#FF7A45] text-xs font-mono transition-colors">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-[#293541] group-hover:text-[#FF7A45] text-xs font-mono transition-colors">+</span>

              {/* LEFT: PROJECT PREVIEW GRID FRAME (5 COLS) */}
              <div className="lg:col-span-5 relative border-b lg:border-b-0 lg:border-r border-[#293541] bg-[#0E141B] p-6 flex flex-col justify-between min-h-[220px] overflow-hidden group-hover:border-[#FF7A45]/40 transition-colors">
                {/* Background Grid Lines inside preview */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF7A4508_1px,transparent_1px),linear-gradient(to_bottom,#FF7A4508_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                {/* Top Meta Indicator */}
                <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[#6F7B86]">
                  <span className="flex items-center gap-1.5">
                    <FolderGit2 size={13} className="text-[#FF7A45]" />
                    PRJ_VIEW_{projectIndex}
                  </span>
                  <span>[ 100% BUILD ]</span>
                </div>

                {/* Center Content / Mock Window */}
                <div className="relative z-10 my-8 border border-[#293541] bg-[#121921] p-4 font-mono text-xs text-[#9BA6B2] group-hover:border-[#FF7A45]/50 transition-colors shadow-lg">
                  <div className="border-b border-[#293541] pb-2 mb-3 flex items-center justify-between text-[10px] text-[#6F7B86]">
                    <span>STATUS: DEPLOYED</span>
                    <span className="h-1.5 w-1.5 bg-emerald-500" />
                  </div>
                  <p className="text-[#F5F1E8] font-bold truncate">{project.title}</p>
                  <p className="text-[11px] text-[#6F7B86] mt-1">compiled successfully.</p>
                </div>

                {/* Bottom Technical Grid Ruler */}
                <div className="relative z-10 flex justify-between font-mono text-[9px] text-[#293541] group-hover:text-[#6F7B86] transition-colors">
                  <span>X: 1024px</span>
                  <span>Y: 768px</span>
                </div>
              </div>

              {/* RIGHT: PROJECT DETAILS (7 COLS) */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between">
                <div>
                  {/* Top Bar: Index & Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-[#293541]/50 pb-4">
                    <span className="font-mono text-xs font-bold text-[#FF7A45]">
                      {projectIndex} 
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#293541] bg-[#0E141B] px-2 py-0.5 font-mono text-[10px] text-[#9BA6B2] rounded-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#F5F1E8] group-hover:text-[#FF7A45] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[#9BA6B2]">
                    {project.description}
                  </p>
                </div>

                {/* Action Link Button */}
                <div className="mt-8 pt-4 border-t border-[#293541]/40">
                  <a
                  
                    className="inline-flex items-center gap-3 border-l-2 border-[#FF7A45] bg-[#17212B] px-5 py-2.5 font-mono text-xs font-semibold text-[#F5F1E8] rounded-none transition-all hover:bg-[#FF7A45] hover:text-[#101820]"
                  >
                    <span>{t?.projects?.viewProject || "EXPLORE_PROJECT"}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}