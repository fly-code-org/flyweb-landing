// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "MHPs", href: "/mhps" },
  { name: "NIRA", href: "/nira" },
  { name: "Features", href: "/features" },
  { name: "Our Story", href: "/our-story" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/">
          <Image
            src="/icons/fly_logo.png"
            alt="FLY Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                pathname === link.href
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Button */}
        <Link
          href="/download"
          className="px-5 py-2 rounded-2xl text-white font-semibold shadow-lg 
             bg-[radial-gradient(circle_at_left_center,_#C36AFD,_#7A5AF8_70%)] 
             hover:opacity-90 transition">
          Download App
        </Link>
      </div>
    </nav>
  );
}
