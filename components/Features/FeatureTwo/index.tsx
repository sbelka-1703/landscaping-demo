import { FaLeaf } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { GiGardeningShears } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";

const features = [
  {
    name: "Sustainable Landscaping",
    description:
      "Embrace eco-friendly designs with our sustainable landscaping services. From drought-resistant plants to water-conserving irrigation systems, our approach ensures beauty without compromising the planet.",
    icon: FaLeaf,
    iconTextColor: "text-green-400",
    iconBg: "bg-black",
  },
  {
    name: "Irrigation Solutions",
    description:
      "Efficient watering systems are key to a lush, green landscape. Our tailored irrigation solutions ensure that your gardens thrive with optimal water usage, saving you time and resources.",
    icon: IoIosWater,
    iconTextColor: "text-blue-400",
    iconBg: "bg-black",
  },
  {
    name: "Garden Care & Maintenance",
    description:
      "Our expert team provides meticulous garden care and maintenance. With services from pruning to mulching, we keep your outdoor space immaculate and flourishing throughout the seasons.",
    icon: GiGardeningShears,
    iconBg: "bg-black",
  },
  //   {
  //     name: "Outdoor Lighting",
  //     description:
  //       "Illuminate your evenings with our custom outdoor lighting services. Highlight your landscape's best features and enhance safety with energy-efficient, aesthetic lighting solutions.",
  //     icon: IoSunny,
  //     iconTextColor: "text-yellow-300",
  //     iconBg: "bg-black",
  //   },
];

export default function FeatureTwo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Outdoor Space{" "}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the art of outdoor living with our comprehensive landscape
            services. Whether you&apos;re looking to create a serene garden
            oasis or a vibrant, eco-friendly yard, our team is dedicated to
            bringing your vision to life. Experience the harmony of nature
            blended with innovative design.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div
                    className={`mb-6 flex h-10 w-10 items-center justify-center rounded-lg ${feature.iconBg}`}
                  >
                    <feature.icon
                      className={`h-6 w-6 ${
                        feature.iconTextColor || "text-white"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
