type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-2xl sm:mb-16">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

      <h2 className="mt-3 text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]">{title}</h2>

      {subtitle ? <p className="mt-5 text-base leading-relaxed text-secondary">{subtitle}</p> : null}
    </header>
  );
}
