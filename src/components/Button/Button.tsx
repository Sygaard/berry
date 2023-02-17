import React, { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const styles = cva(
  "inline-flex whitespace-nowrap justify-center items-center font-semibold",
  {
    variants: {
      size: {
        xs: "min-h-[24px] min-w-[24px] text-xs px-2",
        sm: "min-h-[32px] min-w-[32px] text-sm px-3",
        base: "min-h-[40px] min-w-[40px] text-base px-4",
        lg: "min-h-[48px] min-w-[48px] text-lg px-6",
      },
      variant: {
        solid: "",
        outline: "",
        subtle: "",
        ghost: "",
        link: "",
      },
      colorScheme: {
        gray: "",
        blue: ""
      },
      fullWidth: {
        true: "w-full",
      },
      borderRadius: {
        md: "rounded-md",
        full: "rounded-full"
      },
      justifyContent: {
        center: "justify-center",
        start: "start"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "gray",
        className: "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 dark:bg-white dark:text-gray-700 dark:hover:bg-gray-100 dark:active:bg-gray-200",
      },
      {
        variant: "outline",
        colorScheme: "gray",
        className: "border border-gray-200 text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-700",
      },
      {
        variant: "subtle",
        colorScheme: "gray",
        className: "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500"
      },
      {
        variant: "ghost",
        colorScheme: "gray",
        className: "text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-700",
      },
      {
        variant: "link",
        colorScheme: "gray",
        className: "text-gray-700 hover:text-gray-600 active:text-gray-500 dark:text-gray-100 dark:hover:text-gray-200 dark:active:text-gray-300",
      },
      {
        variant: "solid",
        colorScheme: "blue",
        className: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-200 dark:text-gray-800 dark:hover:bg-blue-300 dark:active:bg-blue-400",
      },
      {
        variant: "outline",
        colorScheme: "blue",
        className: "border border-current text-blue-600 hover:bg-blue-100 active:bg-blue-200 dark:text-blue-200 dark:hover:bg-blue-800 dark:active:bg-blue-700",
      },
      {
        variant:"subtle",
        colorScheme: "blue",
        className: "bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-700 dark:text-blue-100 dark:hover:bg-blue-600 dark:active:bg-blue-500"
      },
      {
        variant: "ghost",
        colorScheme: "blue",
        className: "text-blue-600 hover:bg-blue-100 active:bg-blue-200 dark:text-blue-200 dark:hover:bg-blue-800 dark:active:bg-blue-700",
      },
      {
        variant: "link",
        colorScheme: "blue",
        className: "text-blue-600 hover:text-blue-500 active:text-blue-400 dark:text-blue-200 dark:hover:text-blue-300 dark:active:text-blue-400",
      },
    ],
    defaultVariants: {
      size: "base",
      variant: "solid",
      colorScheme: "gray",
      borderRadius: "md",
      justifyContent: "center"
    },
  }
);

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  leftIcon?: ReactNode,
};

export default function Button<T extends ElementType = "button">({
  as,
  children,
  leftIcon,
  size,
  variant,
  colorScheme,
  fullWidth,
  borderRadius,
  justifyContent,
  ...props
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> &
  VariantProps<typeof styles>) {
  const Component = as || "button";

  return (
    <Component
      className={styles({ size, variant, colorScheme, fullWidth, borderRadius, justifyContent })}
      {...props}
    >
      {leftIcon ? (
        <span className="mr-2">{leftIcon}</span>
      ) : null}
      {children}
    </Component>
  );
}