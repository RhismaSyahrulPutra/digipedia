import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="home"
            smooth={true}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center sm:justify-start"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Digipedia
            </span>
          </Link>

          {/* Navigation links */}
          <ul className="flex flex-wrap items-center justify-center sm:justify-start mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                to="about"
                smooth={true}
                className="hover:underline mr-4 sm:mr-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="service"
                smooth={true}
                className="hover:underline mr-4 sm:mr-6"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                className="hover:underline mr-4 sm:mr-6"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Footer Copyright */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
          © 2025{" "}
          <Link to="home" smooth={true} className="hover:underline">
            Digipedia™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
