/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    title: "This is the best white t-shirt out there",
    rating: 5,
    content: `
        <p>Absolutely thrilled with the transformation! The team was professional, punctual, and the attention to detail was top-notch. Highly recommend for anyone looking to elevate their outdoor space.</p>
      `,
    author: "Mark Edwards",
    avatarSrc:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "Adds the perfect variety to my wardrobe",
    rating: 4,
    content: `
        <p>From design to execution, every step was handled with care and expertise. Our garden has never looked better. A big thank you to the whole crew for their hard work and dedication.</p>
      `,
    author: "Blake Reid",
    avatarSrc:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "All good things come in 6-Packs",
    rating: 5,
    content: `
        <p>Impressed by the quick and efficient service. The landscaping team went above and beyond, leaving us with a stunning yard that's the envy of our neighbors. Fantastic job!</p>
      `,
    author: "Ben Russel",
    avatarSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    rating: 5,
    content: `
      <p>The quality of work is unmatched. They turned our vague ideas into a beautiful reality, enhancing our home's curb appeal significantly. Great communication and service all around.</p>
    `,
    date: "July 16, 2021",
    datetime: "2021-07-16",
    author: "Emily Selman",
    avatarSrc:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  },
  {
    id: 5,
    rating: 5,
    content: `
      <p>Professional, reliable, and creative. The landscaping results speak for themselves. We appreciated the personalized approach and the commitment to achieving our vision. Exceptional experience from start to finish.</p>
    `,
    date: "July 12, 2021",
    datetime: "2021-07-12",
    author: "Hector Gibbons",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold mb-8">Reviews</h1>
      </div>
      <div className="bg-white mb-8">
        <div>
          <h2 className="sr-only">Customer Reviews</h2>

          <div className="flex flex-col lg:flex-row  lg:space-x-16 w-full  justify-center rounded-md ">
            {reviews.map((review, reviewIdx) => (
              <div
                key={review.id}
                className="flex space-x-4 b w-10/12 lg:w-2/12  px-8 text-sm text-gray-500"
              >
                <div className="flex-none py-10">
                  <Image
                    src={review.avatarSrc}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1 py-10">
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div
                    className="prose prose-sm mt-4 max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
