import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { size?: number };

/**
 * Colors come from CSS variables, so the theme and accent color drive the logo.
 * Set these anywhere above it (e.g. :root or [data-theme="dark"]):
 *   --logo-tile    tile fill
 *   --logo-border  tile outline
 *   --logo-ink     the "C"
 *   --logo-accent  the dot
 * The second value in each var() is the fallback (dark theme, coral).
 */
export function Logo({ size = 44, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="14"
        strokeWidth="2"
        style={{
          fill: "var(--logo-tile, #151920)",
          stroke: "var(--logo-border, #262c36)",
        }}
      />
      <path
        d="M43.8 20.4 A18 18 0 1 0 43.8 43.6"
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        style={{ stroke: "var(--logo-ink, #eceff4)" }}
      />
      <circle
        cx="50"
        cy="32"
        r="5"
        style={{ fill: "var(--logo-accent, #ff7a59)" }}
      />
    </svg>
  );
}
