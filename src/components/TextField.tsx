import type { InputHTMLAttributes } from "react";
import "./TextField.css";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

export function TextField({ id, label, type = "text", ...props }: TextFieldProps) {
  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <input className="text-field__input" id={id} type={type} {...props} />
    </div>
  );
}
