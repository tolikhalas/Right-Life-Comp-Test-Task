"use client";

import React from "react";
import Carousel from "./Carousel";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  const images = [
    {
      src: "https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg",
      alt: "Switzerland Consulting Hero src 1",
    },
    {
      src: "https://www.shutterstock.com/shutterstock/photos/2302678453/display_1500/stock-photo-virtual-assistant-crm-or-friendly-woman-in-call-center-consulting-speaking-or-talking-at-customer-2302678453.jpg",
      alt: "Switzerland Consulting Hero src 2",
    },
    {
      src: "https://www.shutterstock.com/shutterstock/photos/757835674/display_1500/stock-photo-young-woman-consulting-customer-in-office-757835674.jpg",
      alt: "Switzerland Consulting Hero src 3",
    },
  ];

  return (
    <article className="relative flex w-full items-center justify-center gap-8 lg:flex">
      <div className="z-1 mx-auto w-full lg:mx-0">
        <Carousel images={images} />
      </div>
      <div className="absolute mx-20 flex-row justify-center text-xl text-white md:text-3xl lg:mx-0">
        <h2>
          {t("header")}{" "}
          <span className="font-semibold">{t("header_bold")}</span>
        </h2>
        <p>
          {t("info")} <span className="font-semibold">{t("info_bold")}</span>
        </p>
      </div>
    </article>
  );
}
