"use client";
import Image from "next/image";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const images = [
  "/landscape-1088-960-2.webp",
  "/landscape-1088-960-1.webp",
  "/landscape-1088-960-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-160-64-5.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-832-2.webp",
  "/landscape-1152-896-3.webp",
  "/landscape-1152-896-1.webp",
  "/landscape-1152-896-2.webp",
  "/landscape-1152-896-3.webp",
  "/landscape-1152-832-1.webp",
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
