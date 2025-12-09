import React from "react";
import { Button } from "./ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold text-gray-800">
          VM<span className="text-gray-500">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 rounded text-sm font-mono text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-600 font-mono text-xs mr-1">0{index + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/contactdetails"
          className="px-4 py-2 rounded border border-gray-400 text-gray-700 font-medium hover:bg-gray-100 transition-colors text-sm"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
