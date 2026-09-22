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
              I&apos;m open to new roles and collaborations. The fastest way to reach me is email.
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
              <dt className="label">Elsewhere</dt>
              <dd className="mt-1.5 flex gap-5 sm:justify-end">
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
