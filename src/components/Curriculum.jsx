import React, { useState } from "react";

const weekContent = {
  1: {
    title: "Week 1: Entrepreneurial Foundation",
    items: [
      "🧠 Introduction to Entrepreneurial Mindset",
      "💡 Understanding Innovation and Risk-Taking",
      "🔄 Learning from Failure and Building Resilience",
      "🎯 Setting Your Entrepreneurial Goals",
      "📝 Personal Strengths and Skills Assessment",
    ],
  },
  2: {
    title: "Week 2: Opportunity Discovery", 
    items: [
      "🔍 Problem Identification Techniques",
      "👥 Customer Interview and Research Methods",
      "✅ Idea Validation Frameworks",
      "📊 Market Research Fundamentals",
      "🎯 Defining Your Target Customer",
    ],
  },
  3: {
    title: "Week 3: Business Model Design",
    items: [
      "🎨 Business Model Canvas Workshop",
      "💰 Value Proposition Design",
      "📈 Revenue Model Planning",
      "🔗 Key Partnerships and Resources",
      "⚙️ Cost Structure Analysis",
    ],
  },
  4: {
    title: "Week 4: Market Strategy",
    items: [
      "🎯 Go-to-Market Strategy Development",
      "🏆 Competitive Analysis",
      "📱 Digital Marketing Basics",
      "🤝 Customer Acquisition Strategies",
      "📊 Metrics and KPIs",
    ],
  },
  5: {
    title: "Week 5: Financial Planning & Launch",
    items: [
      "💵 Financial Planning and Budgeting",
      "📈 Revenue Forecasting",
      "💸 Funding Options Overview",
      "🚀 Launch Preparation",
      "🎓 Next Steps and Continued Learning",
    ],
  },
};

const Curriculum = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16" id="curriculum">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            VikaasGarh Startup School
          </span>
        </h1>
        <h2 className="text-xl text-center text-gray-600 font-medium mb-10">
          Exploration Track – 5-Week Cohort
        </h2>

        {/* Pillars Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-3 px-4 rounded-lg font-medium text-blue-800 shadow-sm">Entrepreneurial Mindset</div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 py-3 px-4 rounded-lg font-medium text-purple-800 shadow-sm">Opportunity Recognition</div>
          <div className="bg-gradient-to-r from-green-100 to-green-200 py-3 px-4 rounded-lg font-medium text-green-800 shadow-sm">Business Model</div>
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 py-3 px-4 rounded-lg font-medium text-orange-800 shadow-sm">Market Strategy</div>
          <div className="bg-gradient-to-r from-pink-100 to-pink-200 py-3 px-4 rounded-lg font-medium text-pink-800 shadow-sm">Financial Literacy</div>
        </div>

        {/* Week Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(weekContent).map(([week, data]) => (
            <button
              key={week}
              onClick={() => setSelectedWeek(Number(week))}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedWeek === Number(week)
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-105"
              }`}
            >
              {data.title.split(":")[0]} {/* Just "Week 1", etc */}
            </button>
          ))}
        </div>

        {/* Week Content */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {weekContent[selectedWeek].title}
          </h3>
          <ul className="list-none space-y-4">
            {weekContent[selectedWeek].items.map((item, index) => (
              <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500 text-gray-700 hover:bg-blue-50 transition-colors duration-200">
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="text-center mt-10">
          <a
            href="#apply"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Apply for Next Cohort
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;