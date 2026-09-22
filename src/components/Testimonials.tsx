import { testimonials } from "@/data/portfolio";
import Section from "./common/Section";
import SectionHeading from "./common/SectionHeading";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="References" title="What people say" />

      <ul className="grid gap-10 sm:grid-cols-2 sm:gap-x-16">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <blockquote className="text-base leading-relaxed text-primary">
              <span aria-hidden="true" className="text-muted">
                “
              </span>
              {testimonial.quote}
              <span aria-hidden="true" className="text-muted">
                ”
              </span>
            </blockquote>

            <p className="mt-4 text-sm text-muted">
              {testimonial.name} — {testimonial.title}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
