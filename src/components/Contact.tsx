import { contact } from "../data/portfolio";
import { LinkButton } from "./LinkButton";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="03 / contact"
      title="Let's talk"
      titleClassName="mb-4"
      className="pt-18 pb-24"
    >
      <p className="mb-8 max-w-[520px] text-muted">{contact.note}</p>
      <div className="flex flex-wrap gap-4 font-mono text-[14px]">
        <LinkButton href={`mailto:${contact.email}`}>
          {contact.email}
        </LinkButton>
        {contact.links.map((link) => (
          <LinkButton
            key={link.label}
            href={link.href}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </LinkButton>
        ))}
      </div>
    </Section>
  );
}
