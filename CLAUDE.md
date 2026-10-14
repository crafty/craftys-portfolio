# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Vite dev server with HMR
- `npm run build`: type-check (`tsc -b`) and then a production build to `dist/`
- `npm run lint`: ESLint (typescript-eslint, react-hooks, react-refresh)
- `npm run preview`: serve the production build

There is no test runner. Check changes with `npm run build` and `npm run lint`.

## What this is

A single-page developer portfolio in React 19, TypeScript, Vite 8 and Tailwind CSS v4 (through the `@tailwindcss/vite` plugin; there is no `tailwind.config` or PostCSS config). It was converted from a design-tool export in `reference/Portfolio Redesign.html`. That file is a self-unpacking bundle: the real markup is a JSON-encoded template and the assets are base64 entries in a manifest, so you can't read it directly. It is the visual source of truth, and changes should keep the page matching it unless asked otherwise.

## Theming architecture

Dark/light mode and the 5 accent colors change at runtime, so colors can't be fixed Tailwind values. Three pieces work together:

1. **`src/data/portfolio.ts`** defines the `palettes` (dark/light) and `accents`. Each accent has a fill `color` plus text-safe variants (`textLight`/`textDark`) for contrast.
2. **`src/hooks/useTheme.ts`** holds the `mode` and `accentIndex` state and returns `themeVars`, an object of CSS custom properties (`--page`, `--surface`, `--ink`, `--muted`, `--line`, `--accent`, `--accent-ink`, `--on-accent`, plus `--logo-*` for `Logo.tsx`). `App.tsx` applies them as an inline `style` on the root wrapper div, not on `:root`.
3. **`src/index.css`** maps those variables into Tailwind with `@theme inline` (`--color-page: var(--page)` and so on), which gives utilities like `bg-page`, `text-muted`, `border-line` and `text-accent-ink`.

To add a themed color, add it to `Palette`/`palettes`, emit it from `useTheme`, and map it in `@theme inline`. Use `text-accent-ink` (not `text-accent`) for accent-colored text so it stays readable in light mode. Values that come from data per item (such as each swatch's background) use an inline `style`.

`Logo.tsx` was written by the user and reads its own `--logo-*` variables, with fallbacks. Theme it through `useTheme` rather than editing the component.

## Conventions

- Text sizes use arbitrary pixel values (`text-[14px]`) rather than Tailwind's scale (`text-sm`), because the scale also sets `line-height`. The root sets `leading-[1.6]`, and nearly everything is meant to inherit it.
- Fonts (JetBrains Mono, Space Grotesk, Work Sans) are self-hosted variable woff2 files in `src/assets/fonts/`, declared in `index.css` and exposed as `font-mono`, `font-display` and `font-sans`.
- Content (jobs, projects, contact) lives in `src/data/portfolio.ts`; components render it and don't hard-code it. Projects and the contact note are still placeholders (`[PROJECT NAME]` and so on).
- The header switches to a hamburger menu below Tailwind's `md` breakpoint. `Header.tsx` keeps a `DESKTOP_QUERY` constant (`48rem`) that must stay in sync with `md`, and uses it to close the menu when the viewport widens.
- TS config enables `verbatimModuleSyntax` (use `import type` for types) and `erasableSyntaxOnly` (no enums, namespaces or constructor parameter properties). Components are named exports; `App` is the one default export.
- React 19: pass `ref` as a regular prop (see `MenuButton.tsx`) rather than using `forwardRef`.
