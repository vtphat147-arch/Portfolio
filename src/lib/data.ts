// ===================================================================
// Portfolio Data — Võ Thành Phát — Software Engineer
// ===================================================================

export const PERSONAL_INFO = {
  name: "Võ Thành Phát",
  title: "Software Engineer",
  tagline:
    "FPT University graduate with hands-on experience building enterprise SAP Fiori solutions. Passionate about clean code, modern web technologies, and delivering impactful software.",
  email: "vtphat147@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  education: "FPT University",
  yearsOfExperience: "1+",
  resumeUrl: "/resume.pdf", // TODO: Copy your CV PDF to public/resume.pdf
  avatarUrl: "/images/profile.png", // TODO: Replace with your photo
};

export const SOCIAL_LINKS = {
  github: "https://github.com/vtphat147-arch",
  linkedin: "https://www.linkedin.com/in/vtphat147/",
  email: `mailto:${PERSONAL_INFO.email}`,
};

export const ABOUT_TEXT = [
  "I'm a Software Engineering graduate from FPT University (GPA 7.6/10) with real-world internship experience at FPT Software, where I built enterprise-grade SAP Fiori solutions. I've led teams of 5–6 members through Agile sprints, delivering complex features under tight deadlines.",
  "My expertise spans across SAP Fiori, ReactJS, and ASP.NET, with deep experience in the SAP ecosystem including SAP RAP, SAP BTP, and OData V4. I'm passionate about building modern, performant web applications that solve real business problems.",
  "I'm currently seeking a Front-end or Full-stack Developer role where I can leverage my technical skills and team leadership experience to create impactful software products.",
];

// ===================================================================
// Skills — Categorized without proficiency levels (badge layout)
// ===================================================================

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Java", icon: "SiOpenjdk" },
      { name: "C#", icon: "SiCsharp" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss3" },
      { name: "SQL", icon: "SiMysql" },
    ],
  },
  {
    title: "Frontend",
    icon: "layers",
    skills: [
      { name: "ReactJS", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "SAP Fiori / SAPUI5", icon: "SiSap" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    title: "Backend / Enterprise",
    icon: "server",
    skills: [
      { name: "ASP.NET", icon: "SiDotnet" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "SAP RAP", icon: "SiSap" },
      { name: "SAP BTP", icon: "SiSap" },
      { name: "OData V4", icon: "SiSap" },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Postman", icon: "SiPostman" },
      { name: "VS Code", icon: "SiVscodium" },
      { name: "Azure", icon: "SiMicrosoftazure" },
    ],
  },
  {
    title: "Methodologies",
    icon: "workflow",
    skills: [
      { name: "Agile / Scrum", icon: "workflow" },
      { name: "CI/CD", icon: "workflow" },
      { name: "REST APIs", icon: "workflow" },
    ],
  },
];

// ===================================================================
// Projects
// ===================================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress";
}

// TODO: Replace/add your actual projects
export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Enterprise Job Scheduling System",
    description:
      "Led a 5-member team to architect and deliver a 22-feature enterprise system replacing legacy SAP SM36/SM37 transactions, across a 15-week Agile lifecycle. Built a real-time job failure monitor with 3-level auto-escalation via Email (Brevo API) and Microsoft Teams (Azure Logic Apps).",
    image: "/images/project-1.png", // TODO: Add project screenshot
    tags: ["SAP Fiori", "OData V4", "Azure Logic Apps", "Brevo API", "AI Copilot"],
    githubUrl: "https://github.com/vtphat147-arch/job-scheduling",
    status: "completed",
  },
  {
    id: "project-2",
    title: "SAP Fiori Analytics Dashboard",
    description:
      "Developed a modern SAP Fiori dashboard supporting job lifecycle actions (Create, Release, Repeat, Copy, Stop, Delete) and an analytical drill-down page with KPI charts powered by OData V4.",
    image: "/images/project-2.png", // TODO: Add project screenshot
    tags: ["SAP Fiori", "SAPUI5", "OData V4", "KPI Charts"],
    githubUrl: "https://github.com/vtphat147-arch/fiori-dashboard",
    status: "completed",
  },
  {
    id: "project-3",
    title: "AI Copilot Integration",
    description:
      "Integrated a Microsoft Copilot Studio AI Agent consuming a custom OData V4 API to query job failures ranked by RiskScore via natural language — enabling non-technical users to interact with enterprise data.",
    image: "/images/project-3.png", // TODO: Add project screenshot
    tags: ["Microsoft Copilot Studio", "OData V4", "AI/NLP", "SAP BTP"],
    status: "completed",
  },
  {
    id: "project-4",
    title: "Personal Portfolio Website",
    description:
      "This portfolio — built with Next.js 14, Framer Motion, Tailwind CSS, and shadcn/ui. Modern design with dark mode, smooth animations, and responsive layout.",
    image: "/images/project-4.png", // TODO: Add project screenshot
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/vtphat147-arch/portfolio",
    liveUrl: "#",
    status: "completed",
  },
];

// ===================================================================
// Certifications
// ===================================================================

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Project Management Principles and Practices",
    organization: "Univ. of California, Irvine · Coursera",
    date: "May 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/O9YBY5JATFP6",
  },
  {
    id: "cert-2",
    title: "CertNexus Certified Ethical Emerging Technologist",
    organization: "CertNexus · Coursera",
    date: "Sep 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/GOIZA8UW6HB4",
  },
  {
    id: "cert-3",
    title: "Java Database Connectivity",
    organization: "LearnQuest · Coursera",
    date: "May 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/CQSEBSM4ZRRN",
  },
  {
    id: "cert-4",
    title: "Software Development Lifecycle",
    organization: "Univ. of Minnesota · Coursera",
    date: "May 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/Y68Z2Y7J6QGR",
  },
  {
    id: "cert-5",
    title: "Web Design for Everybody: Basics of Web Development & Coding",
    organization: "Univ. of Michigan · Coursera",
    date: "Jan 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/EW7TQTRH34Q2",
  },
  {
    id: "cert-6",
    title: "Object Oriented Programming in Java",
    organization: "Duke Univ. · UC San Diego · Coursera",
    date: "Jan 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/EQN4RMXDYWJJ",
  },
  {
    id: "cert-7",
    title: "Computer Communications",
    organization: "Univ. of Colorado · Coursera",
    date: "Sep 2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/FEE9DA6863EG",
  },
  {
    id: "cert-8",
    title: "Academic Skills for University Success",
    organization: "Univ. of Sydney · Coursera",
    date: "Apr 2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/LVBKJNDHAL2N",
  },
];

// ===================================================================
// Experience & Education (Timeline)
// ===================================================================

export interface TimelineItem {
  id: string;
  type: "education" | "work";
  title: string;
  organization: string;
  dateRange: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    id: "timeline-1",
    type: "work",
    title: "Academic Capstone Project — Team Leader",
    organization: "FPT University HCM (scope by FPT Software)",
    dateRange: "2025 — 2026",
    description:
      "Led a 5-member team to architect and deliver a 22-feature enterprise system replacing legacy SAP SM36/SM37, across 15-week Agile lifecycle. Built real-time monitoring with auto-escalation, SAP Fiori dashboard with KPI analytics, and integrated Microsoft Copilot Studio AI Agent.",
  },
  {
    id: "timeline-2",
    type: "work",
    title: "Software Engineer Intern",
    organization: "FPT Software · Ho Chi Minh City",
    dateRange: "Jan 2025 — May 2025",
    description:
      "Gained practical experience across the SAP ecosystem including SAP RAP, SAP Fiori, SAP BTP, and enterprise modules. Developed and delivered features for enterprise products, presented to stakeholders across sprint reviews.",
  },
  {
    id: "timeline-3",
    type: "education",
    title: "Bachelor of Software Engineering",
    organization: "FPT University · Ho Chi Minh City",
    dateRange: "2022 — 2026",
    description:
      "Graduated with GPA 7.6/10. Focused on software engineering, web development, and enterprise solutions. Active in team-based Agile projects and academic research.",
  },
];

// ===================================================================
// Navigation links
// ===================================================================

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
