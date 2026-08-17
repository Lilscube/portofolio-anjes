"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Ganti ke "motion/react" jika proyek Anda menggunakannya
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import { Mail, Copy, Check, ArrowUpRight, Terminal } from "lucide-react";

export default function CTA() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const emailAddress = "hello@anjes.dev";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24">
      {/* BACKGROUND LINE GRID OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#29354112_1px,transparent_1px),linear-gradient(to_bottom,#29354112_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* ARCHITECTURAL COMMAND BOX */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative border border-[#293541] bg-[#121921] p-8 sm:p-12 text-center rounded-none shadow-2xl"
      >
        {/* BLUEPRINT CROSSHAIR ACCENTS */}
        <span className="absolute -top-1.5 -left-1.5 text-[#293541] text-xs font-mono">+</span>
        <span className="absolute -top-1.5 -right-1.5 text-[#293541] text-xs font-mono">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 text-[#293541] text-xs font-mono">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 text-[#293541] text-xs font-mono">+</span>

        {/* TOP STATUS HEADER */}
        <div className="mb-8 border-b border-[#293541] pb-4 flex items-center justify-between font-mono text-xs text-[#6F7B86]">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-[#FF7A45]" />
            <span>INITIATE_COMMUNICATION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-emerald-500 animate-pulse" />
            <span className="text-[#F5F1E8]">STATUS: AVAILABLE</span>
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-3xl font-extrabold tracking-tight text-[#F5F1E8] sm:text-4xl md:text-5xl leading-tight">
          {t?.cta?.line1 || "Let's build something"}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] to-[#FF9B70]">
            {t?.cta?.accent || "extraordinary together."}
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#9BA6B2]">
          {t?.cta?.description ||
            "Whether you have a project in mind, a question about tech stack, or just want to say hi, my inbox is always open."}
        </p>

        {/* ACTION BUTTONS & COPY EMAIL */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Mailto Link */}
          <a
            href={`mailto:${emailAddress}`}
            className="inline-flex items-center gap-2.5 border-l-2 border-[#FF7A45] bg-[#FF7A45] px-6 py-3.5 font-mono text-xs font-semibold text-[#101820] rounded-none transition-all hover:bg-[#FF9A70] hover:shadow-lg hover:shadow-[#FF7A45]/20 active:scale-[0.98]"
          >
            <Mail size={15} />
            <span>{t?.cta?.button || "SEND_EMAIL"}</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 border border-[#293541] bg-[#17212B] px-5 py-3.5 font-mono text-xs font-medium text-[#F5F1E8] rounded-none transition-all hover:border-[#FF7A45]/50 hover:bg-[#121921] active:scale-[0.98]"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-500" />
                <span className="text-emerald-400">COPIED_TO_CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-[#6F7B86]" />
                <span>COPY: {emailAddress}</span>
              </>
            )}
          </button>
        </div>

        {/* FOOTER RULER */}
        <div className="mt-12 pt-4 border-t border-[#293541]/60 flex items-center justify-between font-mono text-[10px] text-[#6F7B86]">
          <span>RESPONSE_TIME: &lt; 24 HRS</span>
          <span>LOCATION: BALI, ID</span>
        </div>
      </motion.div>
    </section>
  );
}