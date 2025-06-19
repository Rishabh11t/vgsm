import React, { useState, useEffect } from "react";
import logo from "../assets/VikasGarh-removebg-preview1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  // Handle navigation click
  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: "#about", label: "About Program" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#mentors", label: "Mentors" },
    { href: "#faq", label: "FAQ" },
    { href: "#schedule", label: "Schedule" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer group transition-transform duration-200 hover:scale-105"
            onClick={scrollToTop}
          >
            <img 
              src={logo} 
              alt="VikasGarh Logo" 
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative text-gray-600 hover:text-blue-600 font-medium text-sm xl:text-base transition-all duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#register');
            }}
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            Register Now
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0.5' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-base transition-all duration-200 rounded-lg mx-2"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="px-2 pt-4">
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#register');
                }}
                className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Register Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}