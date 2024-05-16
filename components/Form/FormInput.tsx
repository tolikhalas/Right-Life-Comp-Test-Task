import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function FormInput({
  name,
  inputType,
  value,
  label,
  placeholder,
  handleChangeText,
  setPhone,
}: {
  name: string;
  inputType: string;
  value: string;
  label: string;
  placeholder: string;
  handleChangeText: (name: string, value: string) => void;
  setPhone: (value?: string | undefined) => void;
}) {
  const id = `${label.replace(/\s+/g, "-")}-${name}`;

  return (
    <div className="grid">
      <label className="mb-2 font-semibold" htmlFor={id}>
        {label}
      </label>
      {inputType !== "phone" ? (
        <input
          className="rounded-xl px-4 py-2"
          type={inputType}
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={(e) => handleChangeText(name, e.target.value)}
        />
      ) : (
        <div>
          <PhoneInput
            country={"ch"}
            value={value}
            placeholder={placeholder}
            onChange={setPhone}
          />
        </div>
      )}
    </div>
  );
}
