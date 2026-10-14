import { jobs } from "../data/portfolio";
import { Section } from "./Section";
import { TimelineItem } from "./TimelineItem";

export function WorkHistory() {
  return (
    <Section id="work" eyebrow="01 / work history" title="Where I've worked">
      <div className="ml-1.5 flex flex-col gap-12 border-l-2 border-line pl-9">
        {jobs.map((job) => (
          <TimelineItem key={`${job.org}-${job.when}`} {...job} />
        ))}
      </div>
    </Section>
  );
}
