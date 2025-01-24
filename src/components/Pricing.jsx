import React from "react";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "Basic Plan",
      price: "$19/month",
      features: ["1 Website", "10 GB Storage", "Basic Support", "Free SSL"],
    },
    {
      id: 2,
      title: "Standard Plan",
      price: "$49/month",
      features: [
        "5 Websites",
        "50 GB Storage",
        "Priority Support",
        "Free SSL & Domain",
      ],
    },
    {
      id: 3,
      title: "Premium Plan",
      price: "$99/month",
      features: [
        "Unlimited Websites",
        "Unlimited Storage",
        "24/7 Support",
        "Free SSL, Domain & Backup",
      ],
    },
  ];

  return (
    <div id="pricing" className="pt-24 bg-gray-100 min-h-screen p-8">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-12">
        PRICING
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h2>
            <p className="text-3xl font-bold text-blue-500 mb-6">
              {plan.price}
            </p>
            <ul className="list-none space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
