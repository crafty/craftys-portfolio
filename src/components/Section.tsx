import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  /** Classes for the heading, e.g. its bottom margin */
  titleClassName?: string;
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  titleClassName = "mb-12",
  className = "py-18",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className="font-mono text-[14px] text-accent-ink">{eyebrow}</div>
      <h2
        className={`mt-2 font-display text-[40px] font-bold tracking-[-.02em] ${titleClassName}`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
