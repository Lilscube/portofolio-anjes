"use client";

import { motion } from "framer-motion"; // Ganti ke "motion/react" jika proyek Anda menggunakannya
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import { BriefcaseBusiness, Handshake } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = t?.experience?.items || [
    {
      role: "Software Developer",
      org: "Tech Solutions Inc.",
      description: "Developing scalable web applications, optimizing API endpoints, and collaborating with cross-functional design teams.",
    },
    {
      role: "Frontend Engineer Intern",
      org: "Digital Agency Co.",
      description: "Built responsive landing pages and reusable component libraries with Next.js and Tailwind CSS.",
    },
  ];

  const leaderships = t?.leadership?.items || [
    {
      title: "Lead Developer",
      description: "Managed a team of 5 developers for university tech projects and hackathons.",
    },
    {
      title: "Head of IT Community",
      description: "Organized workshops and tech talk events impacting over 300+ students.",
    },
    {
      title: "Project Coordinator",
      description: "Facilitated client communications and sprint planning sessions.",
    },
    {
      title: "Tech Mentor",
      description: "Mentored junior students in web development fundamentals and modern JS frameworks.",
    },
  ];

  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-20 overflow-hidden">
      {/* BACKGROUND LINE GRID OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#29354112_1px,transparent_1px),linear-gradient(to_bottom,#29354112_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* =====================================================
            LEFT COLUMN: WORK EXPERIENCE (TIMELINE)
        ====================================================== */}
        <div>
          {/* Section Heading */}
          <div className="mb-8 border-b border-[#293541] pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 border border-[#293541] bg-[#121921] text-[#FF7A45] rounded-none">
                <BriefcaseBusiness size={18} strokeWidth={1.8} />
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#F5F1E8]">
                {t?.experience?.title || "Work Experience"}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#6F7B86]"> </span>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6">
            {/* Architectural Timeline Line */}
            <div className="absolute left-0 top-1 bottom-1 w-px bg-[#293541]" />

            {/* Timeline Items List */}
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="space-y-10"
            >
              {experiences.map((item, index) => {
                const indexFormatted = `0${index + 1}`;

                return (
                  <motion.li
                    key={`${item.role}-${index}`}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className="group relative"
                  >
                    {/* Square Architectural Timeline Marker */}
                    <span className="absolute -left-[29px] top-1 z-10 h-3 w-3 border border-[#FF7A45] bg-[#0E141B] rounded-none transition-transform group-hover:scale-125" />

                    {/* Content Box */}
                    <div className="border border-[#293541] bg-[#121921] p-5 rounded-none transition-all duration-300 group-hover:border-[#FF7A45] group-hover:bg-[#17212B]">
                      {/* Meta Code & Org */}
                      <div className="flex items-center justify-between border-b border-[#293541]/60 pb-2 mb-3 font-mono text-xs">
                        <span className="text-[#FF7A45] font-semibold">
                          {item.org}
                        </span>
                        <span className="text-[#6F7B86]">EXP_LOG_{indexFormatted}</span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-base font-bold text-[#F5F1E8] group-hover:text-[#FF7A45] transition-colors">
                        {item.role}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-relaxed text-[#9BA6B2]">
                        {item.description}
                      </p>

                      {/* Bottom Sharp Accent Line */}
                      <div className="mt-4 h-px w-8 bg-[#FF7A45] transition-all duration-300 group-hover:w-full" />
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </div>

        {/* =====================================================
            RIGHT COLUMN: LEADERSHIP & ACTIVITIES
        ====================================================== */}
        <div>
          {/* Section Heading */}
          <div className="mb-8 border-b border-[#293541] pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 border border-[#293541] bg-[#121921] text-[#FF7A45] rounded-none">
                <Handshake size={18} strokeWidth={1.8} />
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#F5F1E8]">
                {t?.leadership?.title || "Leadership & Involvement"}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#6F7B86]"> </span>
          </div>

          {/* Leadership Cards 2x2 Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {leaderships.map((item, index) => {
              const leadIndex = `0${index + 1}`;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="group relative border border-[#293541] bg-[#121921] p-5 rounded-none transition-all duration-300 hover:border-[#FF7A45] hover:bg-[#17212B]"
                >
                  {/* Blueprint Crosshair Accents */}
                  <span className="absolute -top-1 -left-1 text-[#293541] group-hover:text-[#FF7A45] text-[10px] font-mono transition-colors">+</span>
                  <span className="absolute -top-1 -right-1 text-[#293541] group-hover:text-[#FF7A45] text-[10px] font-mono transition-colors">+</span>

                  {/* Header Index Tag */}
                  <div className="flex items-center justify-between border-b border-[#293541]/60 pb-2 mb-3">
                    <span className="font-mono text-[10px] text-[#6F7B86] group-hover:text-[#FF7A45] transition-colors">
                      ROLE_{leadIndex}
                    </span>
                    <span className="h-1.5 w-1.5 bg-[#293541] group-hover:bg-[#FF7A45] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-[#F5F1E8] group-hover:text-[#FF7A45] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-[#9BA6B2]">
                    {item.description}
                  </p>

                  {/* Bottom Border Highlight */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#FF7A45] transition-all duration-300 group-hover:w-full" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}