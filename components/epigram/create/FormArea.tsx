import React from "react";
import TextArea from "@/components/core/input/textArea";

interface IFormAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  required: boolean;
  errorMessage?: string[];
}

export default function FormArea({
  className,
  rows,
  placeholder,
  name,
  title,
  required,
  errorMessage,
  onChange,
  value,
  ...rest
}: IFormAreaProps) {
  return (
    <>
      <label htmlFor={name} className="text-2xl font-semibold">
        {title}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="text-end">
        <TextArea
          className={className || "textarea-solid w-full"}
          rows={rows}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          {...rest}
        />
        <span className="text-red-500">{errorMessage}</span>
      </div>
    </>
  );
}
