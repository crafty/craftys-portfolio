import type { Job } from "../data/portfolio";

export function TimelineItem({ when, role, org, blurb }: Job) {
  return (
    <div className="relative">
      <span className="absolute top-2 -left-[45px] box-content size-3.5 rounded-full border-3 border-page bg-accent" />
      <div className="font-mono text-[14px] text-muted">{when}</div>
      <h3 className="mt-1 font-display text-[24px] font-medium">
        {role} <span className="text-accent-ink">@ {org}</span>
      </h3>
      <p className="mt-2 max-w-[640px] text-muted">{blurb}</p>
    </div>
  );
}
