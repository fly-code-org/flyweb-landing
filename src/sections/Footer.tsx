"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ComingSoonModal from "./ComingSoon";

export default function Footer() {

    const [modalOpen, setModalOpen] = useState(false);
  return (
    <footer className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/icons/footerbg.png"
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      {/* White Box Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-t-2xl shadow-lg px-6 py-10 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <Image
              src="/icons/fly_logo.png"
              alt="Fly Logo"
              width={40}
              height={40}
            />
            <div className="flex gap-4 mt-6 py-5">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-700 hover:text-purple-600">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-700 hover:text-purple-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
        <div className="flex flex-col items-end">
        <h3 className="text-lg font-semibold mb-4">
            Click here to download the App
        </h3>
        <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-2 rounded-2xl text-white font-semibold shadow-lg 
              bg-black 
              hover:opacity-90 transition"
          >
            Download App
          </button>
        </div>

        </div>
      </div>

      {/* Bottom Title Text */}
      <div className="text-left px-25 text-white font-bold text-xl md:text-2xl py-8">
        Ab dil ki baat dil mein mt rakho, fly per share kro!
      </div>
      <ComingSoonModal open={modalOpen} onClose={() => setModalOpen(false)} />
          
    </footer>
  );
}
