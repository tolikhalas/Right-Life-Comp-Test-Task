import React from "react";
import Advantage from "./Advantage";

export default function AdvantageCards({
  cards,
}: {
  cards: {
    image: {
      src: string;
      alt: string;
    };
    text: {
      header: string;
      info: string;
    };
  }[];
}) {
  return (
    <div className="flex-col justify-center space-y-8">
      {cards.map((card, index) => (
        <Advantage card={card} key={index} />
      ))}
    </div>
  );
}
