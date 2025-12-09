import { Button } from "./ui/button";
import { Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-mono text-gray-600 dark:text-gray-300 mb-4">Hi, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100">Vamsidhar Muppagowni</h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 dark:text-gray-200 mb-6">I build things for the web.</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
          A highly motivated Computer Science student passionate about software development
          and machine learning. Currently pursuing my degree at
          <span className="text-blue-600"> Amrita Vishwa Vidyapeetham</span>.
        </p>
        {/* Address and email removed for a cleaner look */}
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors text-base">View My Work</a>
          <a href="#contact" className="px-6 py-2 rounded border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-base">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
