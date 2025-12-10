import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Get In Touch
        </h2>

        <p className="text-gray-700 dark:text-gray-200 text-base mb-8">
          I'm open to internship opportunities and happy to connect. Feel free to reach out by email!
        </p>

        {/* FIXED BUTTON — Now Navigates Correctly */}
        <Link
          to="/contactdetails"
          className="inline-block px-6 py-2 rounded bg-blue-600 text-white font-medium 
                     hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors text-base"
        >
          Say Hello
        </Link>
      </div>
    </section>
  );
};

export default Contact;
