import { accents } from "../data/portfolio";

interface AccentPickerProps {
  selected: number;
  onSelect: (index: number) => void;
}

export function AccentPicker({ selected, onSelect }: AccentPickerProps) {
  return (
    <div className="flex items-center gap-1.5">
      {accents.map((accent, i) => {
        const pressed = i === selected;
        return (
          <button
            key={accent.name}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Accent color: ${accent.name}`}
            aria-pressed={pressed}
            className={`size-6 rounded-full border-2 p-0 shadow-[inset_0_0_0_2px_var(--page)] ${
              pressed ? "border-ink" : "border-transparent"
            }`}
            style={{ backgroundColor: accent.color }}
          />
        );
      })}
    </div>
  );
}
