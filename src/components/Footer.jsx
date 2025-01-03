import React from 'react'
import logo from "../assets/Logo.jpg";
import X from "../assets/ant-design_x-outlined.png";
import instagram from "../assets/fa6-brands_instagram.png";
import facebook from "../assets/iconoir_facebook.png";
import Linkedin from "../assets/basil_linkedin-outline.png";

const Footer = () => {
    const imagePaths = [
  logo,
  X,
  instagram,
  facebook,
  Linkedin
];
    return (
        <footer className='py-4' style={{ backgroundColor: '#848EA00D' }}>
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
            {/* Logo Section */}
            <div className="flex items-center mb-4 sm:mb-0 mix-blend-multiply">
          <img
            src={imagePaths[0]}
            alt="Company logo"
            width="156"
            height="35"
            className="mr-2"
          />
             <span className="text-xl font-semibold text-gray-800"></span>
            </div>
    
            {/* Social Icons */}
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <img src={imagePaths[1]} alt="1"
                 />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src={imagePaths[2]} alt="2" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src={imagePaths[3]} alt="3" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src={imagePaths[4]} alt="4" />
              </a>
            </div>
          </div>
    
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 mt-4">
            {/* Copyright Section */}
            <p className="text-gray-600 text-sm mb-4 sm:mb-0">&copy; 2024 Recruito AI. All Rights Reserved.</p>
    
            {/* Links Section */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                Privacy
              </a>
            </div>
          </div>
        </footer>
      );
}

export default Footer
