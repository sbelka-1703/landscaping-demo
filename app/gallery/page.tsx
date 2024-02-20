"use client";
import Image from "next/image";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const images = [
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
];

const Gallery: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-10/12 gap-4 mx-4">
        {images.map((image, index) => (
          <div key={index}>
            <Zoom>
              <img
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src={image}
                alt=""
              />
            </Zoom>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
