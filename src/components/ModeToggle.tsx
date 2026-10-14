import type { Mode } from "../data/portfolio";

interface ModeToggleProps {
  mode: Mode;
  onToggle: () => void;
}

export function ModeToggle({ mode, onToggle }: ModeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Switch color mode"
      className="min-h-11 rounded-full border border-line bg-transparent px-4 py-2 font-mono text-[13px] text-ink"
    >
      {mode === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
