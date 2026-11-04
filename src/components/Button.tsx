import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

/** Maps the Figma ComponentButton variants: Default → primary, Variant2 → secondary. */
export type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", type = "button", className, ...props }: ButtonProps) {
  const classes = ["button", `button--${variant}`, className].filter(Boolean).join(" ");

  return <button type={type} className={classes} {...props} />;
}
