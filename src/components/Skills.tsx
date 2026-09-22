import { skillGroups } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="What I work with" />

      <dl className="grid gap-x-16 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <dt className="label">{group.title}</dt>
            <dd className="mt-3 text-sm leading-relaxed text-secondary">{group.items.join("  ·  ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
