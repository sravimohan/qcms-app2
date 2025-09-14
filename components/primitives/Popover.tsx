"use client";

import {
  Popover as AriaPopover,
  composeRenderProps,
  type PopoverProps,
} from "react-aria-components";
import { cn } from "@/utils/styles";

export const Popover = ({ className, children, ...props }: PopoverProps) => (
  <AriaPopover
    {...props}
    className={composeRenderProps(className, (className) =>
      cn(
        "rounded-xl border border-black/10 bg-white/60 shadow-lg backdrop-blur-xl backdrop-saturate-200 dark:border-white/10 dark:bg-zinc-900/70",
        className,
      ),
    )}
  >
    {children}
  </AriaPopover>
);
