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
      "w-fit cursor-default text-sm font-medium text-zinc-950 dark:text-zinc-200",
      props.className,
    )}
  />
);

export const Description = (props: TextProps) => (
  <Text
    {...props}
    slot="description"
    className={cn("text-sm text-zinc-600 dark:text-zinc-400", props.className)}
  />
);

export const FieldError = (props: FieldErrorProps) => (
  <AriaFieldError
    {...props}
    className={cn("text-sm text-red-600 dark:text-red-400", props.className)}
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
