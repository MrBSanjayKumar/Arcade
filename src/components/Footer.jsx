import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGamepad } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
            <FaGamepad className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">GameVault</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GameVault. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
