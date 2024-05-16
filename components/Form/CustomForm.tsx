import React from "react";
import FormInput from "./FormInput";

export default function CustomForm({
  form,
  handleChangeText,
  handleSubmit,
}: {
  form: {
    inputs: {
      name: string;
      inputType: string;
      value: string;
      label: string;
      placeholder: string;
    }[];
  };
  handleChangeText: (name: string, value: string) => void;
  handleSubmit: (event: React.FormEvent) => void;
}) {
  return (
    <form className="grid gap-4 bg-gray-200 p-12" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Let us hear you</h2>
      {form.inputs.map((input, index) => (
        <FormInput
          name={input.name}
          inputType={input.inputType}
          value={input.value}
          label={input.label}
          placeholder={input.placeholder}
          key={index}
          handleChangeText={handleChangeText}
        />
      ))}
      <input
        type="submit"
        value="Submit"
        className="w-full rounded-xl bg-gray-500 py-2 font-semibold text-white hover:cursor-pointer"
      />
    </form>
  );
}
