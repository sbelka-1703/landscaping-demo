"use client";
import "./style.css";
import "blaze-slider/dist/blaze.css";
import Image from "next/image";
import { useBlazeSlider } from "react-blaze-slider";

export default function CarouselLand() {
  const elRef = useBlazeSlider({
    all: {
      slidesToShow: 3,
      slidesToScroll: 3,
      enableAutoplay: true,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  });

  return (
    <div className="w-full flex justify-center">
      <div className="blaze-slider w-full md:w-5/6 xl:w-2/4" ref={elRef}>
        <div className="blaze-container">
          <div className="blaze-track-container">
            <div className="blaze-track">
              <div>
                <Image
                  width={1000}
                  height={1000}
                  alt="..."
                  src="/landscape-1088-960-1.webp"
                />
              </div>
              <div>
                <Image
                  width={1000}
                  height={1000}
                  alt="..."
                  src="/landscape-1088-960-2.webp"
                />
              </div>
              <div>
                <Image
                  width={1000}
                  height={1000}
                  alt="..."
                  src="/landscape-1152-832-1.webp"
                />
              </div>
              <div>
                <Image
                  width={1000}
                  height={1000}
                  alt="..."
                  src="/landscape-1152-896-1.webp"
                />
              </div>
              <div>
                <Image
                  width={1000}
                  height={1000}
                  alt="..."
                  src="/landscape-1152-896-2.webp"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="controls">
          <button className="blaze-prev ">prev</button>
          <div className="blaze-pagination"></div>
          <button className="blaze-next">next</button>
        </div>
      </div>
    </div>
  );
}
