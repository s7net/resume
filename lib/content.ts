export interface Intro {
  name: string;
  about: string;
  href: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface ResumeItem {
  title: string;
  href?: string;
  date?: string;
  location?: string;
  description: string[];
}

export interface EducationItem extends ResumeItem {
  title: string;
  date: string;
  location: string;
  description: string[];
}

export interface ProjectItem extends ResumeItem {
  title: string;
  href: string;
  description: string[];
}

export interface OpenSourceItem extends ResumeItem {
  title: string;
  href: string;
  description: string[];
}

export const intro: Intro = {
  name: "Bridger Tower",
  about:
    "I'm a designer and developer specializing in creating intuitive, high-performance software and websites that merge visual excellence with practical functionality. I am passionate about human computer interaction, usability, and aesthetics in software and technology.",
  href: "https://bridger.to",
  github: "https://github.com/brijr",
  linkedin: "https://linkedin.com/in/brijr",
  email: "bridgertower@gmail.com",
};

export const work: ResumeItem[] = [
  {
    title: "Design Engineer at Ampry",
    href: "https://ampry.com",
    date: "2023 to Present",
    location: "Pleasant Grove, UT",
    description: [
      "Lead product engineering initiatives and design system architecture",
      "Drive technical implementation of component libraries",
      "Manage end-to-end product development workflows",
    ],
  },
  {
    title: "Design Engineer at 9d8",
    href: "https://9d8.dev",
    date: "2021 to Present",
    location: "Remote",
    description: [
      "Design and develop AI-powered solutions for marketing and sales teams",
      "Create scalable systems that enhance client workflow efficiency",
      "Implement cutting-edge AI technologies in user-friendly interfaces",
    ],
  },
  {
    title: "Creative Developer at Tackle",
    href: "https://tackle.io",
    date: "2022 to 2023",
    location: "Remote",
    description: [
      "Led development of design systems and technical architecture",
      "Improved site performance metrics while scaling development workflows",
      "Implemented automated testing and deployment processes",
    ],
  },
  {
    title: "Founding Designer at Ampry",
    href: "https://ampry.com",
    date: "2020 to 2022",
    location: "Pleasant Grove, UT",
    description: [
      "Built scalable design systems for CRO tech startup from ground up",
      "Developed and implemented conversion optimization strategies",
      "Assisted in significant conversion improvements across 200+ clients",
    ],
  },
  {
    title: "Designer at Zion",
    href: "https://zion.surf",
    date: "2018 to 2022",
    location: "Lehi, UT",
    description: [
      "Collaborated with 100+ brands and marketing agencies",
      "Created cohesive visual narratives across multiple platforms",
      "Mediums include brand, web, social, product, and publication design",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "BA Advertising at BYU",
    date: "2018 to 2022",
    location: "Provo, UT",
    description: [
      "Focus: Brand strategy and communication design",
      "Developed expertise in account leadership and growth marketing",
      "Led multiple award-winning campaign projects",
    ],
  },
  {
    title: "UX Design Certificate at Google",
    date: "2020 to 2021",
    location: "Remote",
    description: [
      "Mastered user journey mapping and wireframing techniques",
      "Completed 5 end-to-end product design projects",
      "Applied UX principles to real-world client challenges",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Outr.ai",
    href: "https://outr.ai",
    description: [
      "AI agents for scaling sales outreach",
      "Role: Product Designer, AI Engineer, and Design Engineer",
      "Built with Typescript and Next.js",
    ],
  },
  {
    title: "WaveFinder",
    href: "https://wavefinder.io",
    description: [
      "Marketing message testing powered by AI",
      "Role: Product Designer, AI Engineer, and Design Engineer",
      "Built with Typescript and Next.js",
    ],
  },
  {
    title: "Swyftfin",
    href: "https://swyftfin.com",
    description: [
      "Portable lending platform for home service providers",
      "Role: Product Designer and Design Engineer",
      "Built with Typescript and Next.js",
    ],
  },
];

export const openSource: OpenSourceItem[] = [
  {
    title: "Router.so",
    href: "https://router.so",
    description: [
      "Headless lead router and form backend",
      "Role: Product Designer and Design Engineer",
      "200+ Stars on Github, 800+ Users",
    ],
  },
  {
    title: "Components",
    href: "https://components.bridger.to",
    description: [
      "Collection of components for building marketing websites",
      "Next.js, Tailwind, React, Typescript, and shadcn/ui",
      "260+ Stars on Github",
    ],
  },
  {
    title: "Craft Design System",
    href: "https://craft-ds.com",
    description: [
      "Design system for building websites FAST!",
      "Next.js, Tailwind, React, Typescript, and shadcn/ui",
      "170+ Stars on Github",
    ],
  },
  {
    title: "Next WP",
    href: "https://wp.9d8.dev",
    description: [
      "Wordpress as a headless CMS using Next.js",
      "Featured by Vercel as a template",
      "620+ Stars on Github",
    ],
  },
];
