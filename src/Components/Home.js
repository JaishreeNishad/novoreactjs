import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div>
      <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
        <li
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="relative"
        >
          <Link to="/" className="text-white py-7 px-3 inline-block hover:text-yellow-800">
            HOME
          </Link>
          {isDropdownOpen && (
            <div
              className="absolute bg-black  text-white z-10 mt-1"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <a
                href="#"
                className="block px-8 py-2 text-sm  border-solid border-2 border-gray-600 text-white hover:text-yellow-800"
              >
                ONE PAGE
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                PHOTOGRAPHER
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                BUSINESS
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                PORTFOLIO
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                SHOP
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                AGENCY
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                FREELANCER
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                CATEGORIES
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                SPLIT SCREEN
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                SPLIT SCREEN2
              </a>
              <a
                href="#"
                className="block px-8 py-2 text-sm text-white border-solid border-2 border-gray-600 hover:text-yellow-800"
              >
                SHOWCASE WITH THUMNAILS
              </a>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Home;
