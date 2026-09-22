import { competitive } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

export default function CodingCompetitions() {
  return (
    <Section id="competitive">
      <SectionHeading eyebrow="Competitive" title="Sport programming" />

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="label py-3 font-medium">
              Platform
            </th>
            <th scope="col" className="label py-3 text-right font-medium">
              Rating
            </th>
            <th scope="col" className="label py-3 text-right font-medium">
              Solved
            </th>
          </tr>
        </thead>
        <tbody>
          {competitive.map((profile) => (
            <tr key={profile.id} className="border-b border-line">
              <td className="py-4 text-sm">
                <a href={profile.link} target="_blank" rel="noopener noreferrer" className="link text-primary">
                  {profile.name}
                </a>
              </td>
              <td className="py-4 text-right font-display text-lg text-primary">{profile.rating}</td>
              <td className="py-4 text-right text-sm text-secondary">{profile.solved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
