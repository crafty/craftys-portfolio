import type { Ref } from "react";

interface MenuButtonProps {
  open: boolean;
  onToggle: () => void;
  controls: string;
  ref?: Ref<HTMLButtonElement>;
}

const bar = "absolute left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-ink transition duration-200";

export function MenuButton({ open, onToggle, controls, ref }: MenuButtonProps) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls={controls}
      className="relative size-11 rounded-full border border-line bg-transparent"
    >
      <span className={`${bar} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[14px]"}`} />
      <span className={`${bar} top-1/2 -translate-y-1/2 ${open ? "opacity-0" : ""}`} />
      <span className={`${bar} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[14px]"}`} />
    </button>
  );
}
