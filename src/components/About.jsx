import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About the Program
          </span>
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            VikaasGarh Startup School Certification Program on Startup and Business Exploration is a six-week learning experience for students and professionals who are just beginning their journey, even without any prior knowledge of startups or business. This beginner-friendly program walks you through the fundamentals of startups and business using practical learning, real problem-solving, and guidance from experienced mentors. It helps you build skills, explore ideas, and gain the confidence to take your first step toward becoming a future startup founder or a successful business owner.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
            <span className="text-blue-800 font-medium text-sm">
              VIGSIA INCELERATE FUTUREC VENTURES PRIVATE LIMITED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;