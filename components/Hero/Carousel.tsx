// carousel.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";

const Carousel = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative mx-auto h-60 w-80 md:h-[600px] md:w-[800px]">
      <div className="overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0 transform" : "hidden"
            }`}
          >
            <Image
              width={600}
              height={400}
              src={image.src}
              alt={image.alt}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-70"></div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md focus:outline-none"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md focus:outline-none"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
