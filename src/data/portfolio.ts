export interface Job {
  when: string;
  role: string;
  org: string;
  blurb: string;
}

export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  href: string | null;
}

export interface Accent {
  name: string;
  /** Fill color for swatches, dots and buttons */
  color: string;
  /** Text-safe accent on light backgrounds */
  textLight: string;
  /** Text-safe accent on dark backgrounds */
  textDark: string;
}

export type Mode = "dark" | "light";

export interface Palette {
  page: string;
  surface: string;
  ink: string;
  muted: string;
  line: string;
}

export const accents: Accent[] = [
  {
    name: "Coral",
    color: "#ff7a59",
    textLight: "#c2410c",
    textDark: "#ff8f72",
  },
  { name: "Teal", color: "#2dd4bf", textLight: "#0f766e", textDark: "#2dd4bf" },
  {
    name: "Violet",
    color: "#a78bfa",
    textLight: "#6d28d9",
    textDark: "#b4a0fb",
  },
  {
    name: "Amber",
    color: "#fbbf24",
    textLight: "#a16207",
    textDark: "#fbbf24",
  },
  { name: "Blue", color: "#60a5fa", textLight: "#1d4ed8", textDark: "#7ab4fb" },
];

export const palettes: Record<Mode, Palette> = {
  dark: {
    page: "#0d0f12",
    surface: "#151920",
    ink: "#eceff4",
    muted: "#9aa3b2",
    line: "#262c36",
  },
  light: {
    page: "#f5f7fa",
    surface: "#ffffff",
    ink: "#10141a",
    muted: "#4b5563",
    line: "#d8dee8",
  },
};

export const ON_ACCENT = "#10141a";

export const jobs: Job[] = [
  {
    when: "May 2024 – Present",
    role: "Senior Software Developer",
    org: "Flanders",
    blurb:
      "Promoted from Senior Frontend Developer in Sep 2025. Build React apps and NodeJS APIs, led a major platform upgrade on the frontend, and drove Docker and Kubernetes adoption across deployment pipelines.",
  },
  {
    when: "Jun 2022 – Apr 2024",
    role: "Software Engineer",
    org: "Horner Automation",
    blurb:
      "Led a customer support chat bot built with React, ChatGPT, Node NLP and AWS Serverless Functions, and added Stripe billing to an open-source IoT platform.",
  },
  {
    when: "Jun 2022 – Jul 2023",
    role: "Frontend Developer",
    org: "1stBet",
    blurb:
      "Turned a React Native horse-wagering app into a themeable, white-label SaaS product, and upgraded React and the UI library across major versions.",
  },
  {
    when: "Apr 2019 – May 2022",
    role: "Full-Stack Developer",
    org: "Moser",
    blurb:
      "Built web and mobile apps for clients, including a suite of apps for a fluid analysis company and a React Native inventory app, and improved accessibility on Indiana's SNAP benefits portal.",
  },
  {
    when: "Jul 2018 – Apr 2019",
    role: "Front-End Developer",
    org: "Goodwill of Central and Southern Indiana",
    blurb:
      "Built an inventory and online selling platform: a customer site, an admin site and an iOS app for posting products to multiple marketplaces.",
  },
];

const nullfbProject: Project = {
  name: "nullfb.co",
  blurb:
    "An online store front for my fingerboard company NullFB. We specialize in making high quality decks and concrete obstacles.",
  tags: ["shopify", "squarespace"],
  href: "https://nullfb.co/",
};

const fingerDexProject: Project = {
  name: "fingerdex",
  blurb:
    "FingerDex is a community-driven brand & creators directory dedicated to discovering and exploring the world of fingerboarding products.",
  tags: ["ReactJS", "Vite", "Typescript", "Claude"],
  href: "https://fingerdex.org/",
};

const codepenProject: Project = {
  name: "codepen",
  blurb:
    "Codepen is a website which allows you to develop fun things in the web. I have a profile on there with a bunch of little tid bits I've built in the past.",
  tags: ["ReactJS", "PUG", "CSS"],
  href: "https://codepen.io/craycrafty",
};

export const projects: Project[] = [
  fingerDexProject,
  codepenProject,
  nullfbProject,
];

export const contact = {
  note: "I'm currently open to full and part time work.",
  email: "shout@dancraycraft.dev",
  links: [
    { label: "GitHub", href: "https://github.com/crafty" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/craycraftdan/" },
  ],
};
