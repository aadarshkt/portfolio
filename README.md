# Aadarsh Kumar Tiwari — Portfolio

A minimal, typography-led single-page portfolio: warm neutral surfaces, a single amber
accent, hairline rules instead of cards-with-shadows, and a serif/sans type pairing.
Ships with a dark theme and a light theme.

## Stack

| | |
|---|---|
| Build | **Vite 6** |
| UI | **React 18** + **TypeScript** (strict) |
| Styling | **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`) |
| Type | **Newsreader** (display) + **Plus Jakarta Sans** (body) |
| Motion | A quiet IntersectionObserver fade — no animation libraries |

No runtime dependencies beyond React. Total shipped JS is ~63 KB gzip.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
```

> Note: this environment has `NODE_ENV=production` set globally, which makes npm skip
> devDependencies. If `npm install` leaves out Vite/Tailwind/TypeScript, run
> `npm install --include=dev`.

## Editing your content

**Everything you'll normally change lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**

| Export | What it controls |
|---|---|
| `profile` | Name, role, company, alumni, email, location, avatar, résumé link, hero copy |
| `stats` | The four hero numbers |
| `navLinks` | Header navigation + footer links (must match the section `id`s) |
| `socials` | Footer links (label + icon) |
| `about` | Bio paragraphs + a short highlight line |
| `skillGroups` | Skills, grouped by category — `{ title, items[] }` |
| `experience` | Work history rows |
| `education` | Education rows |
| `projects` | Project cards — `name`, `description`, `tags`, optional `link` |
| `competitive` | Ratings table (rating + problems solved) |
| `achievements` | Ranks and awards |
| `openSource` | Open-source contributions, shown under Achievements |

All content reflects Aadarsh's actual résumé. To update a claim, edit the value here —
no component changes are needed.

### Swapping the résumé and photo

- **Résumé:** the "View resume" button points at a Google Doc — set `profile.resumeUrl` in
  `src/data/portfolio.ts`. The document must be shared as *"Anyone with the link can view"*,
  otherwise visitors hit a request-access wall.
- **Photo:** replace `src/assets/Profile_photo.png`.

### Adding a section

1. Add an entry to `navLinks` in `src/data/portfolio.ts`.
2. Create `src/components/YourSection.tsx` using the shared wrappers:

```tsx
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";
import Reveal from "./common/Reveal";

export default function YourSection() {
  return (
    <Section id="your-id">
      <SectionHeading eyebrow="Eyebrow" title="Your title" subtitle="Optional subtitle" />
      <Reveal delay={80}>{/* content */}</Reveal>
    </Section>
  );
}
```

3. Render it inside `<main>` in `src/App.tsx`.

## Theming

The palette is deliberately small: **warm neutral surfaces + one amber accent**. The
warmth is inherited from the sunset reference artwork
(`StockCake-Reaching_Toward_Sunset-3280376-medium.jpg`), but the saturated orange/gold is
kept as an accent rather than splashed across the page.

Design tokens live in [`src/index.css`](src/index.css):

- `:root` holds the **light** values, `.dark` overrides them for **dark**.
- `@theme inline` exposes them as Tailwind utilities:

  | Utility | Purpose |
  |---|---|
  | `bg-page` / `bg-surface` | page background and raised panels |
  | `text-primary` / `text-secondary` / `text-muted` | the three text levels |
  | `border-line` / `border-line-strong` | hairline and emphasised borders |
  | `text-accent` / `bg-accent` / `text-accent-soft` | the single amber accent |

- Primitives: `.container-x`, `.rule` (hairline), `.eyebrow`, `.label`, `.card`, `.btn`
  / `.btn-primary` / `.btn-ghost`, `.link`, `.reveal`.
- Changing the accent means editing `--accent` (and `--on-accent`, the text colour that
  sits on top of an accent fill) in both `:root` and `.dark`.

All text/background pairs meet **WCAG AA** (≥ 4.5:1) in both themes.

Theme preference is resolved as: saved choice → OS setting → dark, and is persisted in
`localStorage`. An inline script in `index.html` applies it before first paint so there
is no flash of the wrong theme.

## Project structure

```
index.html                     Vite entry (fonts, meta, no-flash theme script)
src/
  main.tsx                     React root
  App.tsx                      Page composition (Header / main / footer)
  index.css                    Design tokens + primitives (Tailwind v4)
  data/portfolio.ts            ← your content
  context/ThemeContext.tsx     Theme state + persistence
  hooks/useActiveSection.ts    Scroll-spy for the nav
  components/
    Header.tsx  Hero.tsx  About.tsx  Skills.tsx  Experience.tsx
    Projects.tsx  CodingCompetitions.tsx  Achievements.tsx  Testimonials.tsx
    Contact.tsx                Footer + call to action
    BackToTop.tsx  ThemeToggle.tsx
    common/                    Section, SectionHeading, Reveal
  assets/                      SVG icon components + profile photo
public/                        favicon
```

`Experience`, `Experience`'s education block, `Achievements` and `Testimonials` are all
thin wrappers over data — restyle them in one file and every entry follows.

## Accessibility & performance

- Every text/background pair meets WCAG AA contrast in both themes.
- Scroll reveals respect `prefers-reduced-motion`.
- Decorative marks are `aria-hidden`; all interactive elements have visible focus rings
  and accessible labels.
- No animation or UI libraries — the whole page is React, Tailwind and CSS.
