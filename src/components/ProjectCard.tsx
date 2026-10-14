import type { Project } from "../data/portfolio";

interface ProjectCardProps extends Project {
  href: string | null;
}

export function ProjectCard({
  name,
  blurb,
  tags,
  href = "#projects",
}: ProjectCardProps) {
  return (
    <a
      href={href ?? ""}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 flex-[1_1_320px] flex-col gap-3 rounded-xl border border-line bg-surface p-7 transition-[translate,border-color] duration-150 ease-in-out hover:-translate-y-[3px] hover:border-accent"
    >
      <div className="h-1 w-10 rounded-xs bg-accent" />
      <h3 className="mt-2 font-display text-[22px] font-medium">{name}</h3>
      <p className="text-muted">{blurb}</p>
      <div className="mt-auto pt-2 font-mono text-[13px] text-accent-ink">
        {tags.join(" · ")}
      </div>
    </a>
  );
}
