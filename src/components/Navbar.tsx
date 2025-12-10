import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";


const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold text-gray-800 dark:text-gray-100">
          VM<span className="text-gray-500 dark:text-gray-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 rounded text-sm font-mono text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-blue-600 dark:text-blue-400 font-mono text-xs mr-1">0{index + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={toggleTheme} className="px-3 py-2 text-sm font-mono border border-gray-400 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </Button>
          <Link
  to="/contactdetails"
  className="px-4 py-2 rounded border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
>
  Get In Touch
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
