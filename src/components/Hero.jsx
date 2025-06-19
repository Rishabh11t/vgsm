import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Explore. Learn. Launch.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Learn the basics of startups and business with the VikaasGarh Startup School Certification Program on Startup and Business Exploration and take your first step toward becoming a future startup founder or a successful businessman.
        </p>
        <a
          href="#apply"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          Apply Now to Join the Cohort
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}