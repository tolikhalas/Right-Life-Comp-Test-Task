"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomForm from "./CustomForm";

export default function Feedback() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    inputs: [
      {
        name: "email",
        inputType: "email",
        value: "",
        label: "Email",
        placeholder: "johndoe@mail.com",
      },
      {
        name: "name",
        inputType: "text",
        value: "",
        label: "Your name",
        placeholder: "John Doe",
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
      <div className="mx-auto rounded-xl bg-gray-100 md:flex md:p-20">
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
          />
        </div>
      </div>
    </div>
  );
}
