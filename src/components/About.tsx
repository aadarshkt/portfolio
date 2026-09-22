import { about, profile } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

const facts = [
  { label: "Role", value: `${profile.role}, ${profile.company}` },
  { label: "Education", value: profile.alumni },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title={about.title} />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
        <div className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-secondary">
              {paragraph}
            </p>
          ))}

          <p className="pt-2 text-sm text-muted">{about.highlights.join("  ·  ")}</p>
        </div>

        <dl className="space-y-6">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd className="mt-1.5 text-sm break-words text-primary">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
