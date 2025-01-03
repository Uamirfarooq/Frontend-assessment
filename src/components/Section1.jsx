import React, { useState } from 'react';
import image1 from "../assets/docker-pattern-right 3.png";
import image2 from "../assets/docker-pattern-right 4.png";
import logo from "../assets/logo.png";
import Vector from "../assets/Vector.png";
import Vector1 from "../assets/Vector 1.png";
import Vector2 from "../assets/Vector w.png";


const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-gradient-to-tr from-slate-50 via-slate-100 to-red-50 flex justify-center px-4 relative">
        <img
          src={image1}
          alt="Background Pattern"
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[537px] lg:h-[502px] absolute  right-0 opacity-80"
        />
        <img
          src={image2}
          alt="Background Pattern"
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[537px] lg:h-[502px] absolute top-[150px] md:top-[250px] lg:top-[319px] left-0 opacity-90"
        />
      <div className="w-full max-w-[1200px]  mb-36">
        {/* Background Images */}

        <div className="py-4 flex justify-center">
          <div className="w-full max-w-[90vw] lg:max-w-[80vw] h-14 py-8 relative z-20 bg-gray-50 rounded-full flex items-center justify-between px-6 md:px-4  lg:px-8 border border-white shadow-lg">
            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="Logo"
                className="h-8 md:h-10 w-auto mix-blend-multiply"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between w-48 lg:w-64 font-semibold">
              <div className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text px-2 relative">
              <img
                    src={Vector}
                    alt="Hero Background"
                    className="absolute right-0 bg-gradient-to-t from-white to-blue-50"
                />
                Home
              </div>
              <div className='px-2'>Features</div> 
              <div className='px-2'>Pricing</div>
              <div className='px-2'>Resource</div>
            </div>

            {/* Contact Button */}
            <button className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-4 text-white">
              Contact Us
            </button>

            {/* Mobile Hamburger Icon */}
            <button
              className="block md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-16 left-0 w-full bg-gray-50 border-t border-gray-200 shadow-md md:hidden">
                <div className="flex flex-col items-center py-4 space-y-4">
                  <div className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text relative">
                  <img
                    src={Vector}
                    alt="Hero Background"
                    className="absolute -right-4 "
                />
                    Home
                  </div>
                  <div>Features</div>
                  <div>Pricing</div>
                  <div>Resource</div>
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-4 text-white">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Hero Section */}
        <div className="flex flex-col items-center mt-12 md:mt-24 text-center">
          <div className="flex items-center flex-col text-2xl md:text-4xl lg:text-6xl font-semibold">
            <span className="p-2 ">Revolutionize Your Hiring</span>
            <span className="p-2">
              Process with{' '}
              <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text relative">
              <img
                    src={Vector1}
                    alt="Hero Background"
                    className="absolute -right-10 top-0 bg-gradient-to-t from-white to-blue-50 h-5 mix-blend-multiply hidden md:block"
                />
              <img
                    src={Vector1}
                    alt="Hero Background"
                    className="absolute -right-11 -top-1 bg-gradient-to-t from-white to-blue-50 h-2 mix-blend-multiply hidden md:block"
                />
                Recruito AI
              </span>
            </span>
          </div>
          <div className="flex items-center flex-col text-sm md:text-base mt-4">
            <span className="p-1">
              Your fully automated hiring assistant that sources, screens,
            </span>
            <span className="p-1">and interviews candidates effortlessly</span>
          </div>
          <div className="flex flex-wrap justify-center mt-6">
            <button className="py-2 px-4 border border-gray-400 rounded-full mt-2 mr-2">
              Start Your Free Trial
            </button>
            <button className="flex items-center justify-center border  mt-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-4 text-white relative">
            <img
                    src={Vector2}
                    alt="Hero Background"
                    className=""
                />
            <img
                    src={Vector2}
                    alt="Hero Background"
                    className="h-2 relative -top-1"
                />
                
              <span> &nbsp; &nbsp; Request a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
