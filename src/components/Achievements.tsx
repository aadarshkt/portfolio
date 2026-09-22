import { achievements } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Achievements" title="Recognition" />

      <ol className="border-t border-line">
        {achievements.map((achievement) => (
          <li key={achievement.id} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-10">
            <p className="label pt-1">{achievement.year}</p>

            <div>
              <h3 className="text-base text-primary">{achievement.title}</h3>
              <p className="mt-1 text-sm text-secondary">{achievement.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{achievement.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
