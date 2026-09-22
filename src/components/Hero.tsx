import { profile, socials, stats } from "@/data/portfolio";
import Reveal from "./common/Reveal";

export default function Hero() {
  return (
    <section id="top" className="container-x pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-16">
        <Reveal>
          <p className="eyebrow">{profile.availability}</p>

          <h1 className="mt-5 text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl">{profile.name}</h1>

          <p className="mt-5 text-lg text-primary sm:text-xl">{profile.headline}</p>

          <p className="mt-6 max-w-xl leading-relaxed text-secondary">{profile.subheadline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              Email me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-sm">
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:justify-self-end">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-44 w-44 rounded-xl border border-line object-cover sm:h-52 sm:w-52"
          />
        </Reveal>
      </div>

      <Reveal delay={160}>
        <dl className="mt-16 grid grid-cols-2 border-t border-l border-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-b border-line px-6 py-5">
              <dd className="font-display text-2xl text-primary sm:text-3xl">{stat.value}</dd>
              <dt className="mt-1 text-xs leading-snug text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
