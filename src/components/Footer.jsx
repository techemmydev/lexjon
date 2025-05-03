import React from "react";
import Logo from "../assets/img/calogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#091140] text-white py-10 px-6 sm:px-10 lg:px-20 font-plus-jakarta-sans">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {/* Logo and Description */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-white font-bold text-lg">LEXJON</span>
          </div>
          <p className="text-sm text-gray-300">
            Aliquam rhoncus ligula eu eros pellentesque consequat nec donec
            mattis odio.
          </p>
          <div className="flex gap-3 mt-4">
            <span className="w-9 h-9 rounded-md bg-[#1B2243] shadow-md flex justify-center items-center hover:bg-orange-400 transition">
              <FaFacebookF className="text-white" />
            </span>
            <span className="w-9 h-9 rounded-md bg-[#1B2243] shadow-md flex justify-center items-center hover:bg-orange-400 transition">
              <FaInstagram className="text-white" />
            </span>
            <span className="w-9 h-9 rounded-md bg-[#1B2243]  shadow-md flex justify-center items-center hover:bg-orange-400 transition">
              <FaLinkedinIn className="text-white" />
            </span>
            <span className="w-9 h-9 rounded-md bg-[#1B2243] shadow-md flex justify-center items-center hover:bg-orange-400 transition">
              <FaTwitter className="text-white" />
            </span>
            <span className="w-9 h-9 rounded-md bg-[#1B2243]  shadow-md flex justify-center items-center hover:bg-orange-400 transition">
              <FaYoutube className="text-white" />
            </span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">SERVICES</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Web Design/Development</li>
            <li>Digital Marketing</li>
            <li>Software Development</li>
            <li>Email Marketing</li>
            <li>Digital Education</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">QUICK LINKS</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Product</li>
            <li>Service</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">SUPPORT</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center ">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 w-full sm:w-auto rounded text-black bg-white"
            />
          </div>
          <div className="flex  sm:justify-end mt-3 ">
            <Button className="bg-[#FAAD29] text-white px-4 py-2 rounded hover:bg-orange-500 transition mt-5">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        © 2025 LEXJON Technologies. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
