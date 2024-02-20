import Image from "next/image";
import React from "react";

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
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
