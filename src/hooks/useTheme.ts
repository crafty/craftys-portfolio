import { useMemo, useState, type CSSProperties } from "react";
import { accents, ON_ACCENT, palettes, type Mode } from "../data/portfolio";

export function useTheme(initialMode: Mode = "dark", initialAccent = 0) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [accentIndex, setAccentIndex] = useState(initialAccent);

  const palette = palettes[mode];

  const themeVars = useMemo(() => {
    const accent = accents[accentIndex];
    return {
      "--page": palette.page,
      "--surface": palette.surface,
      "--ink": palette.ink,
      "--muted": palette.muted,
      "--line": palette.line,
      "--accent": accent.color,
      "--accent-ink": mode === "dark" ? accent.textDark : accent.textLight,
      "--on-accent": ON_ACCENT,
      "--logo-tile": palette.surface,
      "--logo-border": palette.line,
      "--logo-ink": palette.ink,
      "--logo-accent": accent.color,
    } as CSSProperties;
  }, [mode, accentIndex, palette]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return { mode, toggleMode, accentIndex, setAccentIndex, themeVars };
}
