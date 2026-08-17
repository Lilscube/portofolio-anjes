export type Locale = "en" | "id";

export const translations = {
  en: { 
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      connect: "Connect",
    },
    hero: {
      badge: "Available for new opportunities",
      titleLine1: "Building Digital",
      titleLine2: "Solutions with",
      titleAccent: "Code & Creativity.",
      description:
        "I'm I Putu Anjes Vernanda, a Software Developer focused on building modern web apps, scalable back-office systems, and user-friendly digital experiences.",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      codeCardTitle: "Clean Architecture",
      codeCardSubtitle: "Scalable systems",
    },
    stats: {
      projects: "Software Projects",
      experiences: "Professional Experiences",
      years: "Years Org Experience",
      gpa: "GPA / 4.00",
    },
    banner: {
      line1: "Let's Build Something",
      accent: "Useful.",
    },
    whatIDo: {
      title: "What I Do",
      description:
        "Delivering end-to-end digital solutions, from conceptualization to deployment.",
      items: [
        {
          title: "Web Development",
          description:
            "Building responsive, high-performance web applications using modern frameworks.",
          tags: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Backend & API",
          description:
            "Designing scalable database architectures and robust RESTful APIs.",
          tags: ["PostgreSQL", "REST", "Node.js"],
        },
        {
          title: "Mobile Development",
          description:
            "Creating cross-platform mobile experiences with native-like performance.",
          tags: ["Flutter", "React Native"],
        },
        {
          title: "UI/UX Design",
          description:
            "Translating complex requirements into intuitive, aesthetically pleasing interfaces.",
          tags: ["Figma", "Prototyping"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      description: "A selection of recent work highlighting my technical capabilities.",
      viewAll: "View All Projects",
      viewProject: "View Project",
      items: [
        {
          tags: ["Next.js", "PostgreSQL"],
          title: "DMS Information System",
          description:
            "A comprehensive back-office solution for managing company documents, improving retrieval times, and ensuring data security through role-based access control.",
        },
        {
          tags: ["Next.js", "Tailwind CSS"],
          title: "DMS Landing Page",
          description:
            "A high-conversion landing page designed to market the internal DMS tool, featuring optimized performance scores and responsive layouts across all devices.",
        },
        {
          tags: ["React Native", "Firebase"],
          title: "ReUseMart",
          description:
            "A cross-platform mobile marketplace application promoting sustainable shopping by connecting buyers and sellers of gently used goods.",
        },
      ],
    },
    techStack: {
      title: "Technical Arsenal",
      description: "Technologies I utilize to bring ideas to production.",
      groups: [
        { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
        { title: "Backend", items: ["Node.js", "PostgreSQL", "REST API", "Firebase"] },
        { title: "Mobile", items: ["Flutter", "React Native", "Dart"] },
        { title: "Tools", items: ["Git", "Figma", "VS Code", "Postman"] },
      ],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          role: "Software Developer",
          org: "CV Devnda Mandiri Sejahtera | Present",
          description:
            "Developing and maintaining internal enterprise systems, focusing on modern web stacks and database optimization to improve operational efficiency.",
        },
        {
          role: "Intern",
          org: "PT Duniatex Distribution International | Past",
          description:
            "Assisted in developing digital property management tools and learned industry-standard software development lifecycles.",
        },
      ],
    },
    leadership: {
      title: "Leadership & Soft Skills",
      items: [
        { title: "Vice Chairman II", description: "KMHD Mahatma" },
        { title: "Teamwork", description: "Collaborative development" },
        { title: "Problem Solving", description: "Analytical thinking" },
        { title: "Communication", description: "Clear documentation" },
      ],
    },
    cta: {
      line1: "Let's Build Something",
      accent: "Useful.",
      description:
        "I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      button: "Say Hello",
    },
    footer: {
      rights: "Anjes. Built with precision.",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      connect: "Hubungi",
    },
    hero: {
      badge: "Terbuka untuk peluang baru",
      titleLine1: "Membangun Solusi",
      titleLine2: "Digital dengan",
      titleAccent: "Kode & Kreativitas.",
      description:
        "Saya I Putu Anjes Vernanda, seorang Software Developer yang fokus membangun aplikasi web modern, sistem back-office yang skalabel, dan pengalaman digital yang ramah pengguna.",
      viewProjects: "Lihat Proyek Saya",
      contactMe: "Hubungi Saya",
      codeCardTitle: "Arsitektur Bersih",
      codeCardSubtitle: "Sistem yang skalabel",
    },
    stats: {
      projects: "Proyek Perangkat Lunak",
      experiences: "Pengalaman Profesional",
      years: "Tahun Pengalaman Organisasi",
      gpa: "IPK / 4.00",
    },
    banner: {
      line1: "Mari Membangun Sesuatu",
      accent: "yang Berguna.",
    },
    whatIDo: {
      title: "Apa yang Saya Kerjakan",
      description:
        "Menghadirkan solusi digital menyeluruh, mulai dari konsep hingga peluncuran.",
      items: [
        {
          title: "Pengembangan Web",
          description:
            "Membangun aplikasi web yang responsif dan berperforma tinggi menggunakan framework modern.",
          tags: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Backend & API",
          description:
            "Merancang arsitektur basis data yang skalabel dan RESTful API yang andal.",
          tags: ["PostgreSQL", "REST", "Node.js"],
        },
        {
          title: "Pengembangan Mobile",
          description:
            "Menciptakan pengalaman mobile lintas platform dengan performa menyerupai native.",
          tags: ["Flutter", "React Native"],
        },
        {
          title: "Desain UI/UX",
          description:
            "Menerjemahkan kebutuhan yang kompleks menjadi antarmuka yang intuitif dan estetis.",
          tags: ["Figma", "Prototyping"],
        },
      ],
    },
    projects: {
      title: "Proyek Unggulan",
      description: "Kumpulan karya terbaru yang menunjukkan kemampuan teknis saya.",
      viewAll: "Lihat Semua Proyek",
      viewProject: "Lihat Proyek",
      items: [
        {
          tags: ["Next.js", "PostgreSQL"],
          title: "Sistem Informasi DMS",
          description:
            "Solusi back-office menyeluruh untuk mengelola dokumen perusahaan, mempercepat pencarian, dan menjaga keamanan data melalui akses berbasis peran.",
        },
        {
          tags: ["Next.js", "Tailwind CSS"],
          title: "Landing Page DMS",
          description:
            "Landing page dengan konversi tinggi untuk memasarkan tools DMS internal, dengan performa yang optimal dan tata letak responsif di semua perangkat.",
        },
        {
          tags: ["React Native", "Firebase"],
          title: "ReUseMart",
          description:
            "Aplikasi marketplace mobile lintas platform yang mendorong belanja berkelanjutan dengan menghubungkan pembeli dan penjual barang bekas layak pakai.",
        },
      ],
    },
    techStack: {
      title: "Perangkat Teknis",
      description: "Teknologi yang saya gunakan untuk mewujudkan ide menjadi produk nyata.",
      groups: [
        { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
        { title: "Backend", items: ["Node.js", "PostgreSQL", "REST API", "Firebase"] },
        { title: "Mobile", items: ["Flutter", "React Native", "Dart"] },
        { title: "Tools", items: ["Git", "Figma", "VS Code", "Postman"] },
      ],
    },
    experience: {
      title: "Pengalaman Profesional",
      items: [
        {
          role: "Software Developer",
          org: "CV Devnda Mandiri Sejahtera | Sekarang",
          description:
            "Mengembangkan dan memelihara sistem enterprise internal, berfokus pada stack web modern dan optimasi basis data untuk meningkatkan efisiensi operasional.",
        },
        {
          role: "Magang",
          org: "PT Duniatex Distribution International | Selesai",
          description:
            "Membantu mengembangkan tools manajemen properti digital dan mempelajari siklus pengembangan perangkat lunak sesuai standar industri.",
        },
      ],
    },
    leadership: {
      title: "Kepemimpinan & Soft Skill",
      items: [
        { title: "Wakil Ketua II", description: "KMHD Mahatma" },
        { title: "Kerja Sama Tim", description: "Pengembangan kolaboratif" },
        { title: "Pemecahan Masalah", description: "Pemikiran analitis" },
        { title: "Komunikasi", description: "Dokumentasi yang jelas" },
      ],
    },
    cta: {
      line1: "Mari Membangun Sesuatu",
      accent: "yang Berguna.",
      description:
        "Saat ini saya terbuka untuk peluang baru. Baik Anda punya pertanyaan atau sekadar ingin menyapa, saya akan berusaha membalas secepatnya!",
      button: "Sapa Saya",
    },
    footer: {
      rights: "Anjes. Dibangun dengan presisi.",
    },
  },
} as const;

export type Translations = typeof translations.en;
