import React from "react";
import Image from "next/image";

export default function Advantage({
  card: {
    image: { src, alt },
    text: { header, info },
    reversed,
  },
}: {
  card: {
    image: {
      src: string;
      alt: string;
    };
    text: {
      header: string;
      info: string;
    };
    reversed?: boolean;
  };
}) {
  return (
    <div className={`md:flex ${reversed ? "flex-row-reverse" : ""}`}>
      <div className="flex-1 flex-col bg-gray-400 py-10 text-white">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          {header}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl">{info}</p>
      </div>
      <div className="flex-1">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="mx-auto max-w-[320px] md:max-w-full"
        />
      </div>
    </div>
  );
}
