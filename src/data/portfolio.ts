import type { ComponentType } from "react";

import CPlusPlus from "@/assets/CPlusPlus";
import CSS3 from "@/assets/CSS3";
import Express from "@/assets/Express";
import GitHubLogo from "@/assets/GitHubLogo";
import HTML5 from "@/assets/HTML5";
import Javascript from "@/assets/Javascript";
import LinkedInLogo from "@/assets/LinkedInLogo";
import MongoDB from "@/assets/MongoDB";
import NodeJS from "@/assets/NodeJS";
import ProfilePhoto from "@/assets/Profile_photo.png";
import ReactJS from "@/assets/ReactJS";
import TailwindCSS from "@/assets/TailwindCSS";

export type IconComponent = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ *
 *  PROFILE — the hero + footer identity
 * ------------------------------------------------------------------ */
export const profile = {
  name: "Aadarsh Kumar Tiwari",
  shortName: "Aadarsh",
  role: "Software Engineer",
  company: "KPIT",
  alumni: "IIT (ISM) Dhanbad",
  location: "India",
  email: "aadarshkt1729@gmail.com",
  avatar: ProfilePhoto,
  resumeUrl: "/Aadarsh_Kumar_Tiwari_Resume.pdf",
  availability: "Open to new opportunities",
  headline: "Software engineer at KPIT, alumnus of IIT (ISM) Dhanbad.",
  subheadline:
    "I build web products end to end — from the details in the interface to the services behind them. Lately I've been focused on React, Node and the small decisions that make software feel considered.",
};

export const stats = [
  { label: "Years of experience", value: "3+" },
  { label: "Problems solved", value: "800+" },
  { label: "Projects shipped", value: "15+" },
  { label: "Technologies", value: "20+" },
];

/* ------------------------------------------------------------------ *
 *  NAVIGATION + SOCIALS
 * ------------------------------------------------------------------ */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "competitive", label: "Competitive" },
  { id: "contact", label: "Contact" },
];

export type Social = { label: string; href: string; icon: IconComponent };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/aadarshkt", icon: GitHubLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aadarshkt/", icon: LinkedInLogo },
];

/* ------------------------------------------------------------------ *
 *  ABOUT — paragraphs rendered in order
 * ------------------------------------------------------------------ */
export const about = {
  eyebrow: "About",
  title: "A little about me",
  paragraphs: [
    "Welcome to my corner of the internet. I'm Aadarsh Kumar Tiwari, a software engineer at KPIT and an alumnus of IIT (ISM) Dhanbad.",
    "I love building things that make a difference — clean interfaces, solid backends, and the small details people feel but never notice. I believe digital superintelligence is the next step of evolution, and I'd like to help shape it responsibly.",
    "When I'm not shipping, you'll find me grinding competitive programming problems, reading about systems design, or chasing a good sunset.",
  ],
  highlights: ["Systems design", "Product craft", "Competitive programming", "AI & tooling"],
};

/* ------------------------------------------------------------------ *
 *  SKILLS — icon + name. Add or remove freely.
 * ------------------------------------------------------------------ */
export type Skill = { name: string; icon: IconComponent };

export const skills: Skill[] = [
  { name: "HTML5", icon: HTML5 },
  { name: "CSS3", icon: CSS3 },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: ReactJS },
  { name: "Node.js", icon: NodeJS },
  { name: "Express", icon: Express },
  { name: "MongoDB", icon: MongoDB },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "C++", icon: CPlusPlus },
];

/** Extra tools, listed as plain text under the skills grid */
export const toolbelt = [
  "TypeScript",
  "Redux",
  "Next.js",
  "REST APIs",
  "GraphQL",
  "Git",
  "Docker",
  "PostgreSQL",
  "Redis",
  "Firebase",
  "AWS",
  "Python",
  "Linux",
  "Figma",
  "Jest",
  "CI/CD",
];

/* ------------------------------------------------------------------ *
 *  EXPERIENCE — PLACEHOLDER: replace with your real history
 * ------------------------------------------------------------------ */
export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    id: "kpit",
    role: "Software Engineer",
    company: "KPIT",
    period: "2024 — Present",
    location: "India",
    summary: "PLACEHOLDER — one line on what you own and the impact you had.",
    highlights: [
      "PLACEHOLDER — a shipped outcome with a number attached (latency, adoption, revenue).",
      "PLACEHOLDER — a technical problem you solved and how.",
      "PLACEHOLDER — a collaboration or leadership moment.",
    ],
    tags: ["TypeScript", "React", "Node.js"],
  },
  {
    id: "internship",
    role: "Software Engineer Intern",
    company: "PLACEHOLDER — Company",
    period: "2023 — 2024",
    location: "Remote",
    summary: "PLACEHOLDER — what the team did and your slice of it.",
    highlights: [
      "PLACEHOLDER — feature you built end to end.",
      "PLACEHOLDER — measurable improvement you drove.",
    ],
    tags: ["React", "Express", "MongoDB"],
  },
];

/* ------------------------------------------------------------------ *
 *  EDUCATION — PLACEHOLDER details
 * ------------------------------------------------------------------ */
export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    id: "iit-ism",
    degree: "B.Tech — PLACEHOLDER (e.g. Computer Science)",
    institution: "IIT (ISM) Dhanbad",
    period: "2020 — 2024",
    detail: "PLACEHOLDER — CGPA, societies, positions of responsibility, awards.",
  },
  {
    id: "school",
    degree: "Higher Secondary — PLACEHOLDER stream",
    institution: "PLACEHOLDER — School name",
    period: "2018 — 2020",
    detail: "PLACEHOLDER — achievements that are worth mentioning.",
  },
];

/* ------------------------------------------------------------------ *
 *  PROJECTS — your headline work
 * ------------------------------------------------------------------ */
export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "scanx",
    name: "ScanX — QR Student Access",
    description:
      "A React Native app that lets students access campus facilities by scanning a QR code, replacing manual entry registers.",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "https://github.com/aadarshkt/scanx_client",
  },
  {
    id: "company-portal",
    name: "Company Registration Portal",
    description:
      "Implemented full CRUD functionality for job and internship postings, wired into a Node.js backend with role-based access.",
    tags: ["React", "Node.js", "Express"],
    link: "https://github.com/aadarshkt/CDC-company-portal",
  },
  {
    id: "library",
    name: "Library Management Application",
    description:
      "A web application to manage a library's books. Titles are created, read, updated and deleted against a MySQL database via ISBN.",
    tags: ["React", "MySQL", "REST"],
    link: "https://github.com/aadarshkt/library_client",
  },
  {
    id: "solar-flare",
    name: "Solar Flare Detection UI",
    description:
      "Co-developed the interface for a system that detects solar flares in X-ray data, making a research pipeline approachable.",
    tags: ["React", "Python", "ML"],
    link: "https://github.com/aadarshkt/inter_iit",
  },
];

/* ------------------------------------------------------------------ *
 *  COMPETITIVE PROGRAMMING
 * ------------------------------------------------------------------ */
export type CompetitiveProfile = {
  id: string;
  name: string;
  rating: string;
  solved: string;
  link: string;
};

export const competitive: CompetitiveProfile[] = [
  {
    id: "codeforces",
    name: "Codeforces",
    rating: "1364",
    solved: "400+",
    link: "https://codeforces.com/profile/aadarshkt",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    rating: "1764",
    solved: "180+",
    link: "https://leetcode.com/aadarshkt/",
  },
  {
    id: "codechef",
    name: "CodeChef",
    rating: "1543",
    solved: "50+",
    link: "https://www.codechef.com/users/aadarshkt",
  },
  {
    id: "atcoder",
    name: "AtCoder",
    rating: "1165",
    solved: "158",
    link: "https://atcoder.jp/users/aadarshkt",
  },
];

/* ------------------------------------------------------------------ *
 *  ACHIEVEMENTS — PLACEHOLDER
 * ------------------------------------------------------------------ */
export type Achievement = { id: string; title: string; issuer: string; year: string; detail: string };

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "PLACEHOLDER — award or certification",
    issuer: "PLACEHOLDER — issuer",
    year: "2025",
    detail: "PLACEHOLDER — one line on what it was for.",
  },
  {
    id: "ach-2",
    title: "PLACEHOLDER — rank or contest result",
    issuer: "PLACEHOLDER — platform",
    year: "2024",
    detail: "PLACEHOLDER — one line on the result.",
  },
  {
    id: "ach-3",
    title: "PLACEHOLDER — open source or community",
    issuer: "PLACEHOLDER — org",
    year: "2024",
    detail: "PLACEHOLDER — one line on your contribution.",
  },
];

/* ------------------------------------------------------------------ *
 *  TESTIMONIALS — PLACEHOLDER (great for client trust)
 * ------------------------------------------------------------------ */
export type Testimonial = { id: string; quote: string; name: string; title: string };

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "PLACEHOLDER — a short, specific quote about working with you. Concrete beats generic.",
    name: "PLACEHOLDER — Name",
    title: "PLACEHOLDER — Role, Company",
  },
  {
    id: "t-2",
    quote: "PLACEHOLDER — what they'd tell someone else considering hiring you.",
    name: "PLACEHOLDER — Name",
    title: "PLACEHOLDER — Role, Company",
  },
  {
    id: "t-3",
    quote: "PLACEHOLDER — a line about the outcome you delivered together.",
    name: "PLACEHOLDER — Name",
    title: "PLACEHOLDER — Role, Company",
  },
];
