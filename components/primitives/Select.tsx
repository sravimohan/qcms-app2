"use client";

import { ChevronDown } from "lucide-react";
import {
  Select as AriaSelect,
  Button,
  ListBox,
  type SelectProps,
  SelectValue,
  type ValidationResult,
} from "react-aria-components";
import { cn } from "@/utils/styles";
import { Description, FieldError, fieldBorderStyles, Label } from "./Field";
import { DropdownItem, DropdownSection } from "./ListBox";
import { Popover } from "./Popover";

export { DropdownItem as SelectItem, DropdownSection as SelectSection };

export interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: MySelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      className={cn("group flex flex-col gap-1", props.className)}
    >
      {label && <Label>{label}</Label>}
      <Button
        className={cn(
          fieldBorderStyles({}),
          "flex h-10 cursor-default items-center gap-4 rounded-lg border border-black/10 bg-white/90 py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-none",
        )}
      >
        <SelectValue className="flex-1 text-sm data-[placeholder]:italic" />
        <ChevronDown
          aria-hidden
          className="h-4 w-4 text-zinc-600 group-disabled:text-zinc-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600"
        />
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-none"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}
