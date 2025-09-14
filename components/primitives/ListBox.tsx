"use client";

import { Check } from "lucide-react";
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  composeRenderProps,
  type ListBoxItemProps,
  type ListBoxProps,
  ListBoxSection,
  type ListBoxSectionProps,
} from "react-aria-components";
import { cn } from "@/utils/styles";

export const ListBox = <T extends object>({
  className,
  ...props
}: ListBoxProps<T>) => (
  <AriaListBox {...props} className={cn("outline-none p-1", className)} />
);

export const DropdownItem = (props: ListBoxItemProps) => (
  <AriaListBoxItem
    {...props}
    className="group/item grid cursor-default grid-cols-[1fr_20px] items-center gap-2 rounded-md p-2 pr-4 text-sm outline-none ring-ring ring-offset-2 ring-offset-background focus:ring-1 focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  >
    {composeRenderProps(props.children, (children) => (
      <>
        {children}
        <div className="col-start-2 row-start-1 flex items-center">
          <Check className="hidden h-4 w-4 text-primary group-selected/item:block" />
        </div>
      </>
    ))}
  </AriaListBoxItem>
);

export const DropdownSection = <T extends object>(
  props: ListBoxSectionProps<T> & { title?: string },
) => (
  <ListBoxSection
    {...props}
    className="after:block after:h-[5px] after:content-[''] first:-mt-[5px] last:-mb-[5px]"
  >
    {composeRenderProps(props.children, (children) => (
      <>
        {props.title && (
          <div className="mb-1.5 px-2.5 py-1 text-sm font-semibold text-muted-foreground">
            {props.title}
          </div>
        )}
        {children}
      </>
    ))}
  </ListBoxSection>
);
