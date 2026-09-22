import { skills, toolbelt } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Tools I work with" />

      <ul className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <li
              key={skill.name}
              className="flex items-center gap-3 border-r border-b border-line px-5 py-4">
              <Icon className="h-5 w-5 shrink-0" />
              <span className="text-sm text-primary">{skill.name}</span>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-sm text-muted">{toolbelt.join("  ·  ")}</p>
    </Section>
  );
}
