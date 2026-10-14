import { useEffect, useId, useRef, useState } from "react";
import type { Mode } from "../data/portfolio";
import { AccentPicker } from "./AccentPicker";
import { Logo } from "./Logo";
import { MenuButton } from "./MenuButton";
import { ModeToggle } from "./ModeToggle";
import { NavLinks } from "./NavLinks";

/** Matches Tailwind's `md` breakpoint, where the full nav takes over */
const DESKTOP_QUERY = "(min-width: 48rem)";

interface HeaderProps {
  mode: Mode;
  onToggleMode: () => void;
  accentIndex: number;
  onSelectAccent: (index: number) => void;
}

export function Header({ mode, onToggleMode, accentIndex, onSelectAccent }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-5 border-b border-line bg-page">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-8 py-4">
        <a href="#top" aria-label="craycraft.dev, back to top" className="flex items-center">
          <Logo />
        </a>
        <nav className="hidden flex-wrap items-center gap-6 font-mono text-[14px] md:flex">
          <NavLinks />
          <AccentPicker selected={accentIndex} onSelect={onSelectAccent} />
          <ModeToggle mode={mode} onToggle={onToggleMode} />
        </nav>
        <div className="flex md:hidden">
          <MenuButton
            ref={buttonRef}
            open={menuOpen}
            onToggle={() => setMenuOpen((o) => !o)}
            controls={menuId}
          />
        </div>
      </div>

      {menuOpen && (
        <nav
          id={menuId}
          className="absolute inset-x-0 top-full border-b border-line bg-page font-mono text-[14px] md:hidden"
        >
          <div className="mx-auto flex max-w-[1120px] flex-col px-8 pb-6">
            <NavLinks onNavigate={closeMenu} className="flex min-h-11 items-center" />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <AccentPicker selected={accentIndex} onSelect={onSelectAccent} />
              <ModeToggle mode={mode} onToggle={onToggleMode} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
