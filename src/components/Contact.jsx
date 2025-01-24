import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="pt-20 bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {/* Card 1 - Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-center">Contact Us</h3>
          <div className="mt-4">
            <form>
              {/* First Name */}
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              {/* Last Name */}
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Your message here..."
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Card 2 - Our Office and Get in Touch */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-center">Our Office</h3>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965089516!2d107.56075449198627!3d-6.903271950805587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1737396960766!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Get in Touch */}
          <h3 className="text-xl font-semibold text-center mt-8">
            Get in Touch
          </h3>
          <div className="flex justify-center gap-4 mt-4">
            {/* Social Media Buttons */}
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-[0_4px_10px_0_rgba(72,187,120,0.6)] hover:bg-green-500 hover:text-white transition duration-200"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-[0_4px_10px_0_rgba(225,48,108,0.6)] hover:bg-pink-500 hover:text-white transition duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="mailto:your-email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-[0_4px_10px_0_rgba(229,57,53,0.6)] hover:bg-red-500 hover:text-white transition duration-200"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-[0_4px_10px_0_rgba(59,89,152,0.6)] hover:bg-blue-500 hover:text-white transition duration-200"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
