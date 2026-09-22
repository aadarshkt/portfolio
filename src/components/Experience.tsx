import { education, experience } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <ol className="border-t border-line">
        {experience.map((role) => (
          <li key={role.id} className="grid gap-3 border-b border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-10">
            <p className="label pt-1">{role.period}</p>

            <div>
              <h3 className="text-lg text-primary">{role.role}</h3>
              <p className="mt-1 text-sm text-secondary">
                {role.company} · {role.location}
              </p>

              <p className="mt-4 leading-relaxed text-secondary">{role.summary}</p>

              <ul className="mt-4 space-y-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-secondary">
                    <span aria-hidden="true" className="text-muted">
                      —
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-muted">{role.tags.join("  ·  ")}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="eyebrow mt-16">Education</h3>

      <ol className="mt-6 border-t border-line">
        {education.map((item) => (
          <li key={item.id} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-10">
            <p className="label pt-1">{item.period}</p>

            <div>
              <h4 className="text-base text-primary">{item.degree}</h4>
              <p className="mt-1 text-sm text-secondary">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
