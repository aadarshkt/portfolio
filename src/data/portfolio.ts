import type { ComponentType } from "react";

import GitHubLogo from "@/assets/GitHubLogo";
import LinkedInLogo from "@/assets/LinkedInLogo";
import ProfilePhoto from "@/assets/Profile_photo.png";

export type IconComponent = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ *
 *  PROFILE — the hero + footer identity
 * ------------------------------------------------------------------ */
export const profile = {
  name: "Aadarsh Kumar Tiwari",
  shortName: "Aadarsh",
  role: "Software Engineer",
  company: "KPIT Technologies",
  alumni: "IIT (ISM) Dhanbad",
  location: "Bengaluru, India",
  email: "aadarshkt1729@gmail.com",
  avatar: ProfilePhoto,
  resumeUrl:
    "https://docs.google.com/document/d/12KYQwS1bdpVX4gGDIBZDppsHf_M-vPlxyHQaIFdXKOM/export?format=pdf",
  /** Position statement, shown as the hero eyebrow. */
  focus: "Backend · AI Systems · Deployment",
  availability: "Open to backend and AI engineering roles",
  headline: "I build distributed backends and the AI systems that run on top of them.",
  subheadline:
    "Software engineer at KPIT Technologies, Bengaluru. I work on multi-agent orchestration for automotive workflows — high-throughput services on Kafka and RabbitMQ, LangGraph pipelines, and the Docker and AWS plumbing that ships them.",
};

export const stats = [
  { value: "2+", label: "Years of backend engineering" },
  { value: "20+", label: "Microservices in production" },
  { value: "50%", label: "Lower MTTR on CI/CD incidents" },
  { value: "1000+", label: "Problems solved" },
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
 *  ABOUT
 * ------------------------------------------------------------------ */
export const about = {
  eyebrow: "About",
  title: "Backend systems, agentic AI, and shipping both",
  paragraphs: [
    "I'm a software engineer at KPIT Technologies in Bengaluru. I work on Kineto Labs, a multi-agent platform that carries an automotive feature from creation all the way to deployment on hardware inside in-vehicle infotainment systems.",
    "Most of my work lives behind the API. I architected an asynchronous notification service on RabbitMQ and PostgreSQL that decouples rule evaluation from dispatch, built high-concurrency catalog APIs serving 1000+ users, and wrote a Spring Boot and Kafka microservice that reads 500+ GitLab pipeline logs a day to surface AI-driven debugging insights — cutting mean time to resolution on CI/CD incidents by roughly half.",
    "On the AI side I build the orchestration layer rather than just calling a model: tool-using LLM agents, retrieval grounded in vector search, and human-in-the-loop checkpoints so a person stays in control of anything consequential.",
    "I'm deliberate about deployment too — Docker, AWS, and enough Kubernetes to ship and debug a service myself — though I'd call that the newest part of my toolkit rather than the strongest. Before KPIT I studied Electronics and Communication Engineering at IIT (ISM) Dhanbad, where competitive programming taught me to care about complexity and correctness.",
  ],
  highlights: ["Distributed systems", "Event-driven architecture", "Agentic AI & RAG", "Cloud deployment"],
};

/* ------------------------------------------------------------------ *
 *  SKILLS — grouped by how I actually use them
 * ------------------------------------------------------------------ */
export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    items: ["FastAPI", "Spring Boot", "REST APIs", "Node.js", "Celery", "Next.js"],
  },
  {
    title: "AI & Agents",
    items: ["LangGraph", "LLM & VLM Agents", "RAG", "pgvector", "MCP", "Tool Calling"],
  },
  {
    title: "Data & Messaging",
    items: ["PostgreSQL", "Redis", "Apache Kafka", "RabbitMQ", "MongoDB"],
  },
  {
    title: "Infra & Deployment",
    items: ["Docker", "Kubernetes", "AWS (ECS, S3, RDS, ElastiCache)", "GitLab CI/CD", "Linux", "Git"],
  },
];

/* ------------------------------------------------------------------ *
 *  EXPERIENCE
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
    company: "KPIT Technologies",
    period: "Jun 2024 — Present",
    location: "Bengaluru, India",
    summary: "Backend services and agentic AI for automotive engineering workflows.",
    highlights: [
      "Architected Kineto Labs, a multi-agent orchestration platform carrying automotive features from creation through to deployment on in-vehicle infotainment hardware.",
      "Designed an asynchronous notification service on RabbitMQ and PostgreSQL, decoupling rule evaluation from dispatch to keep delivery reliable and latency low under peak load.",
      "Built high-concurrency backend APIs for the workbench catalog service, managing 100+ workbenches for 1000+ active users.",
      "Wrote a Spring Boot and Kafka microservice processing 500+ daily GitLab pipeline logs across 20+ microservices, surfacing AI-driven resolution suggestions.",
      "Cut mean time to resolution for CI/CD incidents by ~50%, resolving 100+ weekly incidents and scaling adoption to 50+ clients.",
      "Integrated LDAP authentication with role-based access control across the catalog and AIOps microservices, covering 200+ users across 10+ distinct roles.",
    ],
    tags: ["Python", "Java", "FastAPI", "Spring Boot", "Kafka", "RabbitMQ", "PostgreSQL", "LangGraph", "Docker"],
  },
];

/* ------------------------------------------------------------------ *
 *  EDUCATION
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
    degree: "B.Tech, Electronics & Communication Engineering",
    institution: "IIT (ISM) Dhanbad",
    period: "2020 — 2024",
    detail:
      "Coursework in data structures and algorithms and object-oriented programming, alongside competitive programming.",
  },
];

/* ------------------------------------------------------------------ *
 *  PROJECTS
 * ------------------------------------------------------------------ */
export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "claims",
    name: "Agentic AI Claims Assessment",
    description:
      "A production system that turns phone photos, video or LiDAR into metric floor plans and 3D point clouds, then assesses insurance claims on top of them. I built the reconstruction core — a FastAPI and Celery/Redis pipeline driving COLMAP and Open3D — plus a tool-using LLM agent orchestrating damage detection, severity scoring and cost estimation. A pgvector RAG layer grounds every finding in the policy clause it cites. Containerised on AWS and serving 500+ users.",
    tags: ["FastAPI", "Celery", "Redis", "pgvector", "LLM / VLM Agents", "AWS", "COLMAP"],
  },
  {
    id: "agent-orch",
    name: "Agent Orchestration Platform",
    description:
      "A YAML-driven platform for composing multi-agent workflows on LangGraph. Executors register themselves through a decorator and describe their own inputs in JSON Schema, so the UI builds every configuration form with no frontend changes — a type is code, a node is data. LangGraph runs synchronously on a worker thread while FastAPI's event loop stays free, with updates handed back thread-safely and streamed to the browser over SSE. Adds human-in-the-loop approvals on a PostgreSQL checkpointer, MCP tool discovery, per-agent Docker images and conditional routing between nodes.",
    tags: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "SSE", "MCP", "Docker", "Next.js"],
  },
  {
    id: "workflow-engine",
    name: "Distributed Workflow Engine",
    description:
      "A high-throughput engine orchestrating DAG-based workflows, resolving dependencies with Kahn's algorithm and executing independent tasks in parallel. A self-healing scheduler built on Java virtual threads and Redis heartbeats detects node failure and re-queues stalled work without losing data, while Spring Data Redis Pub/Sub propagates state across workers in milliseconds. A pluggable task registry via the Strategy pattern and Spring Bean Factory, with JPA optimistic locking for exactly-once execution semantics.",
    tags: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
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
    id: "leetcode",
    name: "LeetCode",
    rating: "1764",
    solved: "480+",
    link: "https://leetcode.com/aadarshkt/",
  },
  {
    id: "codeforces",
    name: "Codeforces",
    rating: "1364",
    solved: "400+",
    link: "https://codeforces.com/profile/aadarshkt",
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
 *  ACHIEVEMENTS
 * ------------------------------------------------------------------ */
export type Achievement = { id: string; title: string; issuer: string; year: string; detail: string };

export const achievements: Achievement[] = [
  {
    id: "jee-advanced",
    title: "Rank 4901, JEE Advanced",
    issuer: "Out of ~25,000 candidates",
    year: "2020",
    detail: "India's national engineering entrance examination.",
  },
  {
    id: "cf-round-852",
    title: "Rank 2986, Codeforces Round 852 (Div. 2)",
    issuer: "Out of ~17,000 participants",
    year: "2022",
    detail: "Rated contest placing in the top fifth of the field.",
  },
];

/* ------------------------------------------------------------------ *
 *  OPEN SOURCE
 * ------------------------------------------------------------------ */
export type OpenSourceContribution = { id: string; project: string; detail: string };

export const openSource: OpenSourceContribution[] = [
  {
    id: "continue",
    project: "Continue.dev",
    detail:
      "Contributed custom language-model integrations and fixed critical UI bugs in this open-source AI coding assistant.",
  },
  {
    id: "rowboat",
    project: "Rowboat",
    detail:
      "Added exponential backoff to the note-tagging retry path, preventing an infinite retry loop when tagging failed.",
  },
];
