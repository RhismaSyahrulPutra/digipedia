import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 border-b border-gray-200 z-50 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">
            DigiPedia
          </span>
        </div>

        {/* Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-50 md:static md:block md:w-auto md:bg-transparent`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {/* Home */}
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer block py-2 px-3 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer block py-2 px-3 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About
              </Link>
            </li>

            {/* Service Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Service
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-44 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                  <ul
                    className="py-2 text-sm text-gray-800"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    <li>
                      <Link
                        to="service"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="pricing"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="coming-soon"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-200 cursor-not-allowed opacity-50"
                        onClick={(e) => e.preventDefault()} // Menonaktifkan klik
                      >
                        Coming Soon
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer block py-2 px-3 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
