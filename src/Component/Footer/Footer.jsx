import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1️⃣ Logo / Site Name */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-3">Swapify</h2>
          <p className="text-gray-400 text-sm">
            Learn, teach, and exchange skills within your local community.
          </p>
        </div>

        {/* 2️⃣ Contact Info */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Info</h3>
          <p className="flex items-center gap-2 text-gray-400 mb-2">
            <Mail className="w-4 h-4" /> contact@swapify.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <Phone className="w-4 h-4" /> +880-1843-835726
          </p>
        </div>

        {/* 3️⃣ Social Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4 mb-2">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
        </div>

        {/* 4️⃣ Privacy / Legal */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3 text-white">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/privacy" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:text-blue-500 transition-colors">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center iteam-center my-5">
        <p className="text-gray-400 text-sm mt-2 ">
            &copy; {new Date().getFullYear()} Swapify. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
