import React from "react";
import { FieldError } from "react-hook-form";
import "./custom-input.scss";

type CustomInputProps = {
  label: string;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

function CustomInput({ label, inputRef, error, ...otherProps }: CustomInputProps): JSX.Element {
  return (
    <div className="custom-input">
      <label>{label}</label>
      <input
        className={`custom-input__input ${error ? "custom-input__input--error" : ""}`}
        ref={inputRef}
        placeholder={label}
        {...otherProps}
      />
    </div>
  );
}

export default CustomInput;
