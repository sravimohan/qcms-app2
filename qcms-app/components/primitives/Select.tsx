"use client";
import { ChevronDown } from "lucide-react";
import {
  Select as AriaSelect,
  ListBox,
  type SelectProps,
  SelectValue,
  type ValidationResult,
} from "react-aria-components";
import { cn } from "@/utils/styles";
import { Button } from "./Button";
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
          "flex h-10 cursor-default items-center gap-4 rounded-lg border border-border bg-card py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:shadow-none",
        )}
      >
        <SelectValue className="flex-1 text-sm data-[placeholder]:italic" />
        <ChevronDown
          aria-hidden
          className="h-4 w-4 text-muted-foreground group-disabled:text-muted-foreground"
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
