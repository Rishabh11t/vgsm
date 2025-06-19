import React from "react";

const pillars = [
  {
    number: 1,
    title: "Entrepreneurial Mindset Development",
    description:
      "Build the mental muscle to embrace innovation, take risks, and bounce back from failures — the mindset every founder needs to thrive.",
  },
  {
    number: 2,
    title: "Opportunity Recognition & Validation",
    description:
      "Learn how to identify real problems in the world around you, and validate your ideas through customer feedback and hands-on research.",
  },
  {
    number: 3,
    title: "Business Model Design",
    description:
      "Master tools like the Business Model Canvas and Value Proposition Canvas to create sustainable, scalable, and customer-focused ventures.",
  },
  {
    number: 4,
    title: "Market Intelligence & Strategy",
    description:
      "Gain deep insights into your target market, analyze competitors, and design a winning go-to-market strategy to make your startup stand out.",
  },
  {
    number: 5,
    title: "Financial Literacy & Resource Management",
    description:
      "Understand business finance, build lean budgets, model revenue, and manage your resources smartly for long-term success.",
  },
];

const Pillars = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            The Foundation: Five Core Pillars
          </span>
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 text-lg leading-relaxed">
          The Exploration Track is anchored on five powerful pillars designed to
          build a strong entrepreneurial foundation.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            // Custom layout for last two items
            if (index === 3) {
              return (
                <div
                  key="last-two"
                  className="lg:col-span-3 flex flex-col lg:flex-row justify-center gap-8"
                >
                  {[pillars[3], pillars[4]].map((item) => (
                    <div
                      key={item.number}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group w-full lg:w-1/3"
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold mb-6 group-hover:scale-110 transition-transform duration-200">
                        {item.number}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              );
            }

            // Skip the last item (already rendered above)
            if (index === 4) return null;

            // Render first 3 normally
            return (
              <div
                key={pillar.number}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold mb-6 group-hover:scale-110 transition-transform duration-200">
                  {pillar.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
