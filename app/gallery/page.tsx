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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            width={1000}
            height={1000}
            className="h-auto max-w-full rounded-lg"
            src={image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
