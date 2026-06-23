import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full min-h-[120px] bg-transparent border border-white/15 rounded-lg px-4 py-3",
        "text-foreground placeholder:text-muted/60 resize-none",
        "outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,164,92,0.12)]",
        "transition-all duration-300",
        className
      )}
      {...props}
    />
  );
});
