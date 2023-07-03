"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const isOpen = false;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex sm:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              //   onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#0E45A1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center text-blue-dark font-extrabold text-xl">
            <span className={playfair.className}>Logo</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          {/* Insert your mobile menu content here */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
