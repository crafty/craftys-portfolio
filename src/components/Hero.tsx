import { LinkButton } from "./LinkButton";

export function Hero() {
  return (
    <section className="pt-28 pb-24">
      <div className="font-mono text-[14px] tracking-[.08em] text-accent-ink uppercase">
        Developer
      </div>
      <h1 className="mt-4 font-display text-[clamp(48px,9vw,104px)] leading-none font-bold tracking-[-.03em]">
        Dan
        <br />
        Craycraft<span className="text-accent-ink">.</span>
      </h1>
      <p className="mt-8 max-w-[560px] text-[20px] text-muted">
        Front-end focused engineer building accessible, maintainable React apps for web and mobile.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <LinkButton href="#projects">See my projects</LinkButton>
        <LinkButton href="#contact" variant="outline" className="font-medium">
          Get in touch
        </LinkButton>
      </div>
    </section>
  );
}
