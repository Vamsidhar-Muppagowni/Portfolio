import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-gray-700 dark:text-gray-200 text-base leading-relaxed">
            <p>
              Hello! I'm Vamsidhar, a Computer Science and Engineering student with a passion for creating digital solutions that make a difference. My journey in tech started with curiosity about how things work, and has evolved into a deep interest in
              <span className="text-blue-600"> software development</span> and
              <span className="text-blue-600"> machine learning</span>.
            </p>
            <p>
              I enjoy working on projects that challenge me to learn new technologies and solve complex problems. Whether it's building a web application or implementing algorithms for optimization, I'm always eager to expand my skill set.
            </p>
            <p>
              Beyond coding, I'm a strong believer in teamwork and effective communication. I thrive in collaborative environments where I can both learn from others and contribute my own ideas.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/photo.jpg"
              alt="Vamsidhar"
                className="w-72 h-72 object-cover rounded-full border border-gray-300 shadow-lg bg-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
