import Image from "next/image";
import Hero from "@/components/Heros/Hero";
import HeroTwo from "@/components/Heros/HeroTwo";
import HeroThree from "@/components/Heros/HeroThree";
import HeroFour from "@/components/Heros/HeroFour";
import HeroFive from "@/components/Heros/HeroFive";
import Feature from "@/components/Features/Featrue";
import FeatureTwo from "@/components/Features/FeatureTwo";
import FeatureThree from "@/components/Features/FeatureThree";
import CarouselLand from "@/components/CarouselLand";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <HeroTwo />
      {/*<HeroThree />
      <HeroFour />
      <HeroFive />
      <Feature /> */}
      <FeatureTwo />
      {/* <FeatureThree /> */}
      <Reviews />
      <CarouselLand />
    </div>
  );
}
