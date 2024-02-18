import { FaLeaf } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { GiGardeningShears } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import Image from "next/image";

const features = [
  {
    name: "Sustainable Landscaping",
    description:
      "Embrace eco-friendly designs with our sustainable landscaping services. From drought-resistant plants to water-conserving irrigation systems, our approach ensures beauty without compromising the planet.",
    icon: FaLeaf,
  },

  {
    name: "Garden Care & Maintenance",
    description:
      "Our expert team provides meticulous garden care and maintenance. With services from pruning to mulching, we keep your outdoor space immaculate and flourishing throughout the seasons.",
    icon: GiGardeningShears,
  },
  {
    name: "Outdoor Lighting",
    description:
      "Illuminate your evenings with our custom outdoor lighting services. Highlight your landscape's best features and enhance safety with energy-efficient, aesthetic lighting solutions.",
    icon: IoSunny,
  },
];

export default function FeatureThree() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Enhance Your Outdoor Space{" "}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover the art of outdoor living with our comprehensive
                landscape services. Whether you&apos;re looking to create a
                serene garden oasis or a vibrant, eco-friendly yard, our team is
                dedicated to bringing your vision to life. Experience the
                harmony of nature blended with innovative design.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-black"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden  px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src="/landscape-1152-896-1.webp"
                  alt="Product screenshot"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
