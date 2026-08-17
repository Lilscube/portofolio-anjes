"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion"; // Ubah ke "motion/react" jika menggunakan package tersebut
import { useLanguage } from "@/src/lib/i18n/LanguageContext";

function CountUp({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseFloat(value.replace("+", ""));
  const hasPlus = value.includes("+");
  const decimalPlaces = value.includes(".")
    ? value.split(".")[1].length
    : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(numericValue * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [numericValue, duration, isInView]);

  const formatted =
    decimalPlaces > 0
      ? count.toFixed(decimalPlaces)
      : Math.floor(count).toString();

  return (
    <span ref={ref} className="inline-block">
      {formatted}
      {hasPlus && "+"}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: "20+", label: t?.stats?.projects || "Projects Completed", code: "01" },
    { value: "2+", label: t?.stats?.experiences || "Years Industry Experience", code: "02" },
    { value: "3+", label: t?.stats?.years || "Tech Stacks Mastered", code: "03" },
    { value: "3.48", label: t?.stats?.gpa || "Academic GPA Score", code: "04" },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 overflow-hidden">
      {/* SECTION TITLE / HEADER */}
      <div className="mb-12 border-b border-[#293541] pb-4 flex items-end justify-between">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#FF7A45] uppercase">
       
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[#F5F1E8] sm:text-3xl mt-1">
            Key Performance Indicators
          </h2>
        </div>
        <span className="hidden sm:block text-xs font-mono text-[#6F7B86]">
          [ STATISTICAL OVERVIEW ]
        </span>
      </div>

      {/* STACKED CARDS GRID (SHARP CORNERS) */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {stats.map((stat, idx) => {
          // Menghitung offset penumpukan horisontal & vertikal untuk kesan arsitektural
          const offsets = [
            "lg:translate-y-0 lg:z-10",
            "lg:translate-y-4 lg:-ml-3 lg:z-20",
            "lg:translate-y-8 lg:-ml-3 lg:z-30",
            "lg:translate-y-12 lg:-ml-3 lg:z-40",
          ];

          return (
            <motion.div
              key={stat.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative border border-[#293541] bg-[#121921] p-8 rounded-none transition-all duration-300 hover:border-[#FF7A45] hover:z-50 hover:shadow-2xl hover:shadow-black/50 ${offsets[idx]}`}
            >
              {/* Sharp Edge Accent Tag */}
              <div className="flex items-center justify-between border-b border-[#293541] pb-4 mb-6 group-hover:border-[#FF7A45]/40 transition-colors">
                <span className="font-mono text-xs text-[#6F7B86] group-hover:text-[#FF7A45] transition-colors">
                  SYS_METRIC_{stat.code}
                </span>
                <span className="h-1.5 w-1.5 bg-[#293541] group-hover:bg-[#FF7A45] transition-colors" />
              </div>

              {/* Number with Sharp Typography */}
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#F5F1E8] group-hover:text-[#FF7A45] transition-colors font-mono">
                <CountUp value={stat.value} />
              </div>

              {/* Label */}
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-[#9BA6B2] group-hover:text-[#F5F1E8] transition-colors">
                {stat.label}
              </p>

              {/* Corner Architectural Marker */}
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#293541] group-hover:border-[#FF7A45] transition-colors" />
            </motion.div>
          );
        })}
      </div>

      {/* CONTINUOUS EDITORIAL RUNNING BANNER */}
      <div className="relative mt-24 border-y border-[#293541] py-4 bg-[#0E141B] select-none overflow-hidden rounded-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-8"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-mono text-xs tracking-widest text-[#9BA6B2] uppercase">
                {t?.banner?.line1 || "CLEAN CODE"}
              </span>
              <span className="text-[#FF7A45] font-bold">•</span>
              <span className="font-mono text-xs tracking-widest text-[#FF7A45] uppercase">
                {t?.banner?.accent || "HIGH PERFORMANCE"}
              </span>
              <span className="text-[#293541] font-bold"> </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}