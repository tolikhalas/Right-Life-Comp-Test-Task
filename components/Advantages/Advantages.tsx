import React from "react";
import AdvantageCards from "./AdvantageCards";
import { useTranslations } from "next-intl";

export default function Advantages() {
  const t = useTranslations("Advantages");

  const cards = [
    {
      image: {
        src: "https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg",
        alt: "Advatage 1 Image",
      },
      text: {
        header: t("firstCard.header"),
        info: t("firstCard.info"),
      },
    },
    {
      image: {
        src: "https://www.shutterstock.com/shutterstock/photos/2063156102/display_1500/stock-photo-nice-to-meet-you-in-our-team-friendly-man-leader-boss-shake-hand-of-new-staff-member-welcome-young-2063156102.jpg",
        alt: "Advatage 2 Image",
      },
      text: {
        header: t("secondCard.header"),
        info: t("secondCard.info"),
      },
      reversed: true,
    },
    {
      image: {
        src: "https://www.shutterstock.com/image-photo/california-usa-1st-may-2023-600nw-2297530397.jpg",
        alt: "Advatage 3 Image",
      },
      text: {
        header: t("thirdCard.header"),
        info: t("thirdCard.info"),
      },
    },
  ];

  return (
    <div className="flex items-center justify-center py-10">
      <AdvantageCards cards={cards} />
    </div>
  );
}
