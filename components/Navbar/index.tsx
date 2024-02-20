"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <Disclosure as="nav" className="bg-white  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl  px-4 sm:px-8 lg:px-9 ">
            <div className="flex h-28 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center -ml-8">
                  <Link href="/">
                    <Image
                      className=" rounded-3xl w-64 sm:w-72"
                      // src="/deer_valley_logos_svg/Frame-12.svg"
                      src="/deer_valley_logos_svg/Frame-7.svg"
                      alt="Your Company"
                      width={"300"}
                      height={"300"}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-16 lg:h-11 my-auto ">
                  {/* Current: "border-green-900 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href="/"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-2xl font-medium text-gray-500  " +
                      (pathname === "/"
                        ? "border-green-700 "
                        : "border-transparent hover:text-gray-700 hover:border-gray-300")
                    }
                  >
                    Home
                  </Link>
                  <Link
                    href="/gallery"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-2xl font-medium text-gray-500 " +
                      (pathname === "/gallery"
                        ? "border-green-700"
                        : "border-transparent hover:text-gray-700 hover:border-gray-300")
                    }
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/reviews"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-2xl font-medium text-gray-500 " +
                      (pathname === "/about"
                        ? "border-green-700"
                        : "border-transparent hover:text-gray-700 hover:border-gray-300")
                    }
                  >
                    Reviews
                  </Link>
                  <Link
                    href="/about"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-2xl font-medium text-gray-500 " +
                      (pathname === "/about"
                        ? "border-green-700"
                        : "border-transparent hover:text-gray-700 hover:border-gray-300")
                    }
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className={
                      "inline-flex items-center border-b-2 px-1 pt-1 text-2xl font-medium text-gray-500 " +
                      (pathname === "/contact"
                        ? "border-green-700"
                        : "border-transparent hover:text-gray-700 hover:border-gray-300")
                    }
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-900">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-green-50 border-green-900 text-green-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={
                  "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-gray-500 " +
                  (pathname === "/"
                    ? "border-green-900 bg-green-50 text-green-700 "
                    : "border-transparent hover:border-gray-300 hover:bg-gray-50")
                }
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/services"
                className={
                  "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-gray-500 " +
                  (pathname === "/services"
                    ? "border-green-900 bg-green-50 text-green-700 "
                    : "border-transparent hover:border-gray-300 hover:bg-gray-50")
                }
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className={
                  "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-gray-500 " +
                  (pathname === "/about"
                    ? "border-green-900 bg-green-50 text-green-700 "
                    : "border-transparent hover:border-gray-300 hover:bg-gray-50")
                }
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/reviews"
                className={
                  "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-gray-500 " +
                  (pathname === "/about"
                    ? "border-green-900 bg-green-50 text-green-700 "
                    : "border-transparent hover:border-gray-300 hover:bg-gray-50")
                }
              >
                Reviews
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className={
                  "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-gray-500 " +
                  (pathname === "/contact"
                    ? "border-green-900 bg-green-50 text-green-700 "
                    : "border-transparent hover:border-gray-300 hover:bg-gray-50")
                }
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
