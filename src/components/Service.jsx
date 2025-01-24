import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faDatabase,
  faCloud,
  faToolbox,
  faShieldAlt,
  faCamera,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Build modern websites.",
      icon: faCode,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Design user-friendly interfaces.",
      icon: faDesktop,
    },
    {
      id: 3,
      title: "Database Management",
      description: "Efficient data storage.",
      icon: faDatabase,
    },
    {
      id: 4,
      title: "Cloud Services",
      description: "Reliable cloud solutions.",
      icon: faCloud,
    },
    {
      id: 5,
      title: "IT Support",
      description: "Professional support services.",
      icon: faToolbox,
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Secure your data.",
      icon: faShieldAlt,
    },
    {
      id: 7,
      title: "Photography",
      description: "Capture stunning moments.",
      icon: faCamera,
    },
    {
      id: 8,
      title: "Marketing",
      description: "Grow your audience.",
      icon: faUsers,
    },
  ];

  return (
    <div id="service" className="pt-24 bg-gray-100 min-h-screen p-8">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        OUR SERVICE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="text-5xl text-gray-400 group-hover:text-blue-500 mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
