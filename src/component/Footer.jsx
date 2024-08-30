import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">ShoesHub</h1>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8">
        &copy; 2024 ShoesHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
