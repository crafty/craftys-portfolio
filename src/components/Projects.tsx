import { projects } from "../data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="02 / side projects"
      title="Things I build for fun"
    >
      <div className="flex flex-wrap gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  );
}
