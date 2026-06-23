import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full h-12 bg-transparent border-b border-white/15 px-1 py-2",
        "text-foreground placeholder:text-muted/60",
        "outline-none focus:border-gold focus:ring-0",
        "transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
});
