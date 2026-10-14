const navLinks = [
  { label: "work", href: "#work" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

interface NavLinksProps {
  className?: string;
  onNavigate?: () => void;
}

export function NavLinks({ className = "", onNavigate }: NavLinksProps) {
  return navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={onNavigate}
      className={`text-muted hover:text-accent-ink ${className}`}
    >
      {link.label}
    </a>
  ));
}
