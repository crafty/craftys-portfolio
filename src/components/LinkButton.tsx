import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent font-medium",
  outline: "border border-line",
};

export function LinkButton({
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={`min-h-11 rounded-lg px-7 py-3.5 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
