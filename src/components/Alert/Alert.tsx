import React, { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const styles = cva(
  "px-4 py-3 w-full flex justify-center items-center rounded-md",
  {
    variants: {
      status: {
        info: "bg-blue-100 text-blue-500 dark:bg-blue-200/20 dark:text-blue-200",
        warning: "bg-yellow-100 text-yellow-500 dark:bg-yellow-200/20 dark:text-yellow-200",
        success: "bg-green-100 text-green-500 dark:bg-green-200/20 dark:text-green-200",
        error: "bg-red-100 text-red-500 dark:bg-red-200/20 dark:text-red-200",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      status: "info",
    },
  }
);

type AlertProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

export default function Alert<T extends ElementType = "div">({
  as,
  children,
  status,
  ...props
}: AlertProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof AlertProps<T>> &
  VariantProps<typeof styles>) {
  const Component = as || "div";
   

  return (
    <Component
      className={styles({ status})}
      role="alert"
      {...props}
    >
      {children}
    </Component>
  );
}