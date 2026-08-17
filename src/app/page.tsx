import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Stats from "@/src/components/Stats";
import WhatIDo from "@/src/components/WhatIDo";
import Projects from "@/src/components/Projects";
import TechStack from "@/src/components/TechStack";
import Experience from "@/src/components/Experience";
import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import { LanguageProvider } from "@/src/lib/i18n/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#080b14] text-white">
        <Navbar />
        <Hero />
        <Stats />
        <WhatIDo />
        <Projects />
        <TechStack />
        <Experience />
        <CTA />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
