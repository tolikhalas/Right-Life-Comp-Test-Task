import React from "react";

export default function FormInput({
  name,
  inputType,
  value,
  label,
  placeholder,
  handleChangeText,
}: {
  name: string;
  inputType: string;
  value: string;
  label: string;
  placeholder: string;
  handleChangeText: (name: string, value: string) => void;
}) {
  const id = `${label.replace(/\s+/g, "-")}-${name}`;

  return (
    <div className="grid">
      <label className="mb-2 font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="rounded-xl px-4 py-2"
        type={inputType}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={(e) => handleChangeText(name, e.target.value)}
      />
    </div>
  );
}
