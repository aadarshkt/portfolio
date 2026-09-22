import { projects } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="Selected work" />

      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`card flex flex-col p-6 ${index === 0 ? "sm:col-span-2" : ""}`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base leading-snug text-primary">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="link">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="mt-0.5 shrink-0 text-muted transition-colors duration-200 hover:text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              ) : null}
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">{project.description}</p>

            <p className="mt-5 text-xs text-muted">{project.tags.join("  ·  ")}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
