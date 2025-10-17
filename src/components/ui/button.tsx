import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg hover:shadow-xl":
              variant === "default",
            "border-2 border-primary text-primary hover:bg-primary hover:text-white":
              variant === "outline",
            "hover:bg-muted": variant === "ghost",
          },
          {
            "h-10 px-4 py-2 text-sm": size === "sm",
            "h-12 px-6 py-3 text-base": size === "default",
            "h-14 px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
