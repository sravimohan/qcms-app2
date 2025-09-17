import {
  FieldError as AriaFieldError,
  Label as AriaLabel,
  type FieldErrorProps,
  type LabelProps,
  Text,
  type TextProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { cn } from "@/utils/styles";

export const Label = (props: LabelProps) => (
  <AriaLabel
    {...props}
    className={cn(
      "w-fit cursor-default text-sm font-medium text-foreground",
      props.className,
    )}
  />
);

export const Description = (props: TextProps) => (
  <Text
    {...props}
    slot="description"
    className={cn("text-sm text-muted-foreground", props.className)}
  />
);

export const FieldError = (props: FieldErrorProps) => (
  <AriaFieldError
    {...props}
    className={cn("text-sm text-destructive", props.className)}
  />
);

export const focusRing = tv({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight]",
  variants: {
    isFocusVisible: {
      false: "outline-none",
      true: "outline-offset-2",
    },
  },
});

export const fieldBorderStyles = tv({
  variants: {
    isInvalid: {
      true: "border-red-600 dark:border-red-400",
    },
  },
});
