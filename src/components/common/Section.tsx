import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Hairline above the section. Turn off for the first section after the hero. */
  divider?: boolean;
};

export default function Section({ id, children, className = "", divider = true }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      {divider ? <div className="rule" /> : null}
      <div className="container-x py-20 sm:py-28">{children}</div>
    </section>
  );
}
