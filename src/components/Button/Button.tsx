import React, { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const styles = cva(
  "flex rounded-md justify-center items-center font-semibold",
  {
    variants: {
      size: {
        sm: "h-8 text-sm px-3",
        md: "h-10 text-base px-4",
      },
      variant: {
        solid: "",
        outline: "",
        ghost: "",
      },
      colorScheme: {
        brand: "",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "brand",
        className: "bg-indigo-500 text-white",
      },
      {
        variant: "outline",
        colorScheme: "brand",
        className: "border border-indigo-600 text-indigo-600",
      },
      {
        variant: "ghost",
        colorScheme: "brand",
        className: "text-indigo-600",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "solid",
      colorScheme: "brand",
    },
  }
);

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

export default function Button<T extends ElementType = "button">({
  as,
  children,
  size,
  variant,
  colorScheme,
  fullWidth,
  ...props
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> &
  VariantProps<typeof styles>) {
  const Component = as || "button";

  return (
    <Component
      className={styles({ size, variant, colorScheme, fullWidth })}
      {...props}
    >
      {children}
    </Component>
  );
}