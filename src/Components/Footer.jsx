import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d1321] text-white py-10 px-6 md:px-16">
      {/* --- Top Footer Sections --- */}
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 md:gap-12 gap-10 xl:gap-16">
        {/* --- Brand Info --- */}
        <div>
          <h2 className="text-red-600 text-xl font-bold mb-2">Zaptro</h2>
          <p className="text-sm mb-4">
            Powering Your World with the Best in Electronics
          </p>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>123 Electronics St. Style City, NY 10001</li>
            <li>Email: support@Zaptro.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>

        {/* --- Customer Service --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* --- Follow Us --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <FaFacebookF className="hover:text-red-500 transition" />
            <FaInstagram className="hover:text-red-500 transition" />
            <FaTwitter className="hover:text-red-500 transition" />
            <FaPinterestP className="hover:text-red-500 transition" />
          </div>
        </div>

        {/* --- Subscribe --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay in the Loop</h3>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to get special offers, free giveaways, and more.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-md border border-gray-600 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md text-white text-sm font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">Zaptro</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
