"use client";

import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { focusRing } from "@/utils/styles";

const button = tv({
  extend: focusRing,
  base: "cursor-pointer text-sm font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      primary:
        "rounded-lg border border-transparent bg-primary text-primary-foreground hover:bg-primary-hover pressed:bg-primary-pressed",
      secondary:
        "rounded-lg border border-border bg-secondary text-secondary-foreground hover:bg-secondary-hover pressed:bg-secondary-pressed",
      destructive:
        "rounded-lg border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-hover pressed:bg-destructive-pressed",
      icon: "rounded-full border border-transparent bg-transparent text-foreground hover:bg-secondary pressed:bg-secondary-pressed",
    },
    size: {
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = AriaButtonProps & VariantProps<typeof button>;

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        button({ ...renderProps, variant, size, className }),
      )}
    />
  );
};
