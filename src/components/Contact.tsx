import { navLinks, profile, socials } from "@/data/portfolio";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr] sm:gap-16">
          <div>
            <h2 className="text-3xl leading-tight text-primary sm:text-4xl">Let&apos;s work together</h2>

            <p className="mt-5 max-w-md leading-relaxed text-secondary">
              {profile.availability}. The fastest way to reach me is email.
            </p>

            <a href={`mailto:${profile.email}`} className="btn btn-primary mt-8">
              Email me
            </a>
          </div>

          <dl className="space-y-6 sm:text-right">
            <div>
              <dt className="label">Email</dt>
              <dd className="mt-1.5">
                <a href={`mailto:${profile.email}`} className="link text-sm">
                  {profile.email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="label">Based in</dt>
              <dd className="mt-1.5 text-sm text-primary">{profile.location}</dd>
            </div>

            <div>
              <dt className="label">Elsewhere</dt>
              <dd className="mt-2 flex gap-3 sm:justify-end">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-secondary transition-colors duration-200 hover:border-line-strong hover:text-primary">
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rule mt-16" />

        <div className="mt-6 flex flex-col gap-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}
          </p>

          <nav className="flex flex-wrap gap-5">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="link text-xs">
                {link.label}
              </a>
            ))}
          </nav>

          <p>Built with React, TypeScript &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
