"use client";
import { nav_links } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-300 md:bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="#home" alt="home">
                <Image src="/hero.jpg" width={50} height={50} className="rounded-full"/>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block text-black space-x-9">
              {nav_links.map((nav) => (
                <Link key={nav.link} href={nav.link}>
                  {nav.text}
                </Link>
              ))}
            </div>

            <div className="-mr-2 flex md:hidden">
              {!isOpen && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#414361]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed flex top-0 right-0 w-full h-screen overflow-hidden">
          <div className=" z-50 glass-effect w-36"></div>

          <div className="flex justify-between items-start px-2 pt-2 pb-3 sm:px-3 bg-white w-full">
            <div className="flex flex-col space-y-7">{nav_links.map((nav) => (
              <Link
                key={nav.link}
                href={nav.link}
                onClick={() => setIsOpen(false)}
              >
                {nav.text}
              </Link>
            ))}</div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
