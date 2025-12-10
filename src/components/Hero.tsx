import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-mono text-gray-600 dark:text-gray-300 mb-4">Hi, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Vamsidhar Muppagowni
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          I build things for the web.
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
          A highly motivated Computer Science student passionate about software development
          and machine learning. Currently pursuing my degree at
          <span className="text-blue-600"> Amrita Vishwa Vidyapeetham</span>.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          
          {/* View My Work Button */}
          <a
            href="#projects"
            className="px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors text-base"
          >
            View My Work
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="px-6 py-3 rounded border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-base"
          >
            Contact Me
          </a>

          {/* ANIMATED RESUME BUTTON */}
          <a
            href="/Vamsidhar_Muppagowni_Resume.pdf" 
            download="Vamsidhar_Muppagowni_Resume.pdf"
            className="group relative inline-flex h-12 w-32 items-center justify-center overflow-hidden rounded border border-gray-400 bg-transparent px-6 font-medium text-gray-700 shadow-sm transition-all duration-300 hover:w-56 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {/* View 1: Default (Icon + "Resume") - Slides UP on hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-full">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </div>

            {/* View 2: Hover (Icon + "Download My Resume") - Slides IN from bottom */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full transition-all duration-300 group-hover:translate-y-0">
              <Download className="h-4 w-4" />
              <span className="whitespace-nowrap">Download My Resume</span>
            </div>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;