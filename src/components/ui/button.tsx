import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "default" | "sm" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: false;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-black hover:bg-gold-soft focus-visible:ring-gold/60 border border-gold",
  outline:
    "border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold focus-visible:ring-gold/40",
  ghost:
    "text-foreground/80 hover:text-foreground hover:bg-white/5 focus-visible:ring-white/20",
};

const sizeClasses: Record<Size, string> = {
  default: "h-11 px-6 text-sm tracking-wide",
  sm: "h-9 px-4 text-xs tracking-wide",
  lg: "h-14 px-9 text-base tracking-wider",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "default", type = "button", ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase",
          "transition-colors duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.98]",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
