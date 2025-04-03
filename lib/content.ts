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
  name: "AmirHossein Soleimani",
  about:
    "I'm a Backend Developer && DevOps Specialist",
  href: "https://s7net.ir",
  github: "https://github.com/s7net",
  linkedin: "https://www.linkedin.com/in/s7net/",
  email: "info@s7net.ir",
};

export const work: ResumeItem[] = [
  {
    title: "DevOps Engineer at IranServer",
    href: "https://iranserver.com",
    date: "2025 - Present",
    location: "Remote (Work from Home)",
    description: [
      "Handling support tickets for C.O.C support",
      "Managing hosting environments: DirectAdmin, cPanel, aaPanel",
      "WHMCS administration and maintenance",
      "Automating server deployments with Bash scripts",
      "Server management and monitoring using tools like Nagios and Prometheus",
      "Managing cloud infrastructure for performance and scalability",
      "Maintaining server security and conducting vulnerability assessments",
    ],    
  },
  {
    title: "Freelance Project (aiogram & Sanic)",
    href: "https://t.me",
    date: "2022 - 2025",
    location: "Remote (Work from Home)",
    description: [
      "Developing and maintaining Telegram bot projects using aiogram",
      "Optimizing source code for performance and scalability",
      "Providing REST web services using Sanic framework",
      "Containerizing applications with Docker for easier deployment",
      "Implementing and managing databases (SQL) for efficient data storage",
      "Working with Python libraries for backend development",
      "Using Docker for consistent development environments",
    ],
  },
  {
    title: "Xray-Core Expert",
    href: "https://github.com/XTLS/Xray-core",
    date: "2023 - Present",
    location: "Remote (Work from Home)",
    description: [
      "Setting up and configuring Xray-Core for proxy services",
      "Designing custom Xray configurations for network requirements",
      "Monitoring and troubleshooting Xray server performance",
      "Optimizing Xray server for high traffic and low latency",
      "Managing Xray-Core servers using Docker for deployment",
      "Providing support and consultation for Xray-Core configurations",
    ],    
  },
];


export const education: EducationItem[] = [
  {
    title: "BA in Computer Science at Azad University of Qom",
    date: "2022 - Present",
    location: "Qom, Iran",
    description: [
      "Focus: Software engineering and development",
      "Specialized in backend development and automation",
      "Participating in various technical and programming projects",
    ],
  },
  {
    title: "Python Course at GreenLearn",
    date: "2023",
    location: "Remote",
    description: [
      "Completed a comprehensive course on Python programming",
      "Focused on object-oriented programming, web development, and automation",
    ],
  },
  {
    title: "PHP Course at SevenLearn",
    date: "2023",
    location: "Remote",
    description: [
      "Learned PHP for web development and backend programming",
      "Built real-world projects and APIs using PHP",
    ],
  },
  {
    title: "Docker, HTML, CSS, Git, and Linux Skills",
    date: "2023 - Present",
    location: "Remote",
    description: [
      "Proficient in using Docker for containerization and managing environments",
      "Skilled in frontend development with HTML and CSS for building user interfaces",
      "Experienced with Git for version control and collaboration in software development",
      "Familiar with Linux environments for server management and deployment",
    ],
  },
];


// export const projects: ProjectItem[] = [
//   {
//     title: "Outr.ai",
//     href: "https://outr.ai",
//     description: [
//       "AI agents for scaling sales outreach",
//       "Role: Product Designer, AI Engineer, and Design Engineer",
//       "Built with Typescript and Next.js",
//     ],
//   },
//   {
//     title: "WaveFinder",
//     href: "https://wavefinder.io",
//     description: [
//       "Marketing message testing powered by AI",
//       "Role: Product Designer, AI Engineer, and Design Engineer",
//       "Built with Typescript and Next.js",
//     ],
//   },
//   {
//     title: "Swyftfin",
//     href: "https://swyftfin.com",
//     description: [
//       "Portable lending platform for home service providers",
//       "Role: Product Designer and Design Engineer",
//       "Built with Typescript and Next.js",
//     ],
//   },
// ];

// export const openSource: OpenSourceItem[] = [
//   {
//     title: "Router.so",
//     href: "https://router.so",
//     description: [
//       "Headless lead router and form backend",
//       "Role: Product Designer and Design Engineer",
//       "200+ Stars on Github, 800+ Users",
//     ],
//   },
//   {
//     title: "Components",
//     href: "https://components.bridger.to",
//     description: [
//       "Collection of components for building marketing websites",
//       "Next.js, Tailwind, React, Typescript, and shadcn/ui",
//       "260+ Stars on Github",
//     ],
//   },
//   {
//     title: "Craft Design System",
//     href: "https://craft-ds.com",
//     description: [
//       "Design system for building websites FAST!",
//       "Next.js, Tailwind, React, Typescript, and shadcn/ui",
//       "170+ Stars on Github",
//     ],
//   },
//   {
//     title: "Next WP",
//     href: "https://wp.9d8.dev",
//     description: [
//       "Wordpress as a headless CMS using Next.js",
//       "Featured by Vercel as a template",
//       "620+ Stars on Github",
//     ],
//   },
// ];
