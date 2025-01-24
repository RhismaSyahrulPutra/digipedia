import React from "react";
import LogoNormal from "../assets/Logo-Normal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="pt-20 bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center h-full">
          <div>
            <img src={LogoNormal} className="h-64" alt="Digipedia Logo" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between ">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-center">About Us</h3>
            <p className="mt-4 text-justify text-gray-600">
              We are a passionate team dedicated to delivering top-notch
              services. Our mission is to provide innovative solutions that
              empower businesses to succeed in the digital world.
            </p>
          </div>
          <div className="flex justify-left gap-6 mt-6">
            {/* Social Media Buttons */}
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-[0_4px_10px_0_rgba(72,187,120,0.6)] hover:bg-green-500 hover:text-white transition duration-200"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="md" />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-[0_4px_10px_0_rgba(225,48,108,0.6)] hover:bg-pink-500 hover:text-white transition duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} size="md" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
