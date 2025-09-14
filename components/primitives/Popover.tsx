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
        "bg-popover text-popover-foreground border border-border rounded-md shadow-lg backdrop-blur-lg",
        className,
      ),
    )}
  >
    {children}
  </AriaPopover>
);
