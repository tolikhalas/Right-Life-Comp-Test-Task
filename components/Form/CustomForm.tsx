import React, { Dispatch, SetStateAction } from "react";
import FormInput from "./FormInput";
import { useTranslations } from "next-intl";

export default function CustomForm({
  form,
  handleChangeText,
  handleSubmit,
  setPhone,
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
  setPhone: (value?: string | undefined) => void;
}) {
  const t = useTranslations("Form");

  return (
    <form className="grid gap-4 bg-gray-200 p-12" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">{t("header")}</h2>
      {form.inputs.map((input, index) => (
        <FormInput
          name={input.name}
          inputType={input.inputType}
          value={input.value}
          label={input.label}
          placeholder={input.placeholder}
          key={index}
          handleChangeText={handleChangeText}
          setPhone={setPhone}
        />
      ))}
      <input
        type="submit"
        value={t("submit")}
        className="w-full rounded-xl bg-gray-500 py-2 font-semibold text-white hover:cursor-pointer"
      />
    </form>
  );
}
