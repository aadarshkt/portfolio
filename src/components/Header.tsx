import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-line bg-page/85 backdrop-blur-md" : "border-transparent"
      }`}>
      <div className="container-x">
        <div className="flex h-16 items-center justify-between gap-4 sm:gap-6">
          <a
            href="#top"
            className="text-sm font-medium tracking-tight whitespace-nowrap text-primary"
            aria-label="Back to top">
            {profile.name}
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`text-sm transition-colors duration-200 ${
                  active === link.id ? "text-primary" : "text-secondary hover:text-primary"
                }`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={`mailto:${profile.email}`}
              className="hidden text-sm text-secondary transition-colors duration-200 hover:text-primary sm:block">
              Get in touch
            </a>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="-mr-2 flex h-9 w-9 items-center justify-center text-secondary transition-colors duration-200 hover:text-primary lg:hidden">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-line bg-page lg:hidden">
          <div className="container-x flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-line py-3 text-sm last:border-b-0 ${
                  active === link.id ? "text-primary" : "text-secondary"
                }`}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
