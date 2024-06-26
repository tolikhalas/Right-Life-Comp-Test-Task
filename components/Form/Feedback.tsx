"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomForm from "./CustomForm";
import { useTranslations } from "next-intl";

export default function Feedback() {
  const t = useTranslations("Form");

  const [phone, setPhone] = useState("");
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: phone,
    inputs: [
      {
        name: "email",
        inputType: "email",
        value: "",
        label: t("email"),
        placeholder: "johndoe@mail.com",
      },
      {
        name: "name",
        inputType: "text",
        value: "",
        label: t("name"),
        placeholder: "John Doe",
      },
      {
        name: "phone",
        inputType: "phone",
        value: phone,
        label: t("phone"),
        placeholder: "+123-567-7890",
      },
    ],
  });

  const handleChangeText = (name: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      inputs: prevForm.inputs.map((input) =>
        input.name === name ? { ...input, value } : input,
      ),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", form.inputs);
  };

  return (
    <div className="justify-cente roundedr flex items-center md:p-20">
      <div className="mx-auto rounded-xl bg-gray-100 md:flex md:p-10 lg:p-20">
        <Image
          className="flex-1"
          src="https://www.shutterstock.com/shutterstock/photos/302201210/display_1500/stock-photo-business-handshake-in-lofty-office-with-city-view-a-deal-is-struck-302201210.jpg"
          alt="Feedback photo"
          width={400}
          height={400}
        />
        <div className="flex-1">
          <CustomForm
            form={form}
            handleChangeText={handleChangeText}
            handleSubmit={handleSubmit}
            setPhone={setPhone as (value?: string | undefined) => void}
          />
        </div>
      </div>
    </div>
  );
}
