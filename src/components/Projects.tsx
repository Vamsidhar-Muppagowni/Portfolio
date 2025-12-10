import React from "react";
import { ExternalLink, Folder, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Edge-Based V2X Protocol",
    description:
      "Optimized emergency traffic response using fuzzy logic and genetic algorithms. Simulated smart city rerouting strategies using SUMO.",
    technologies: ["SUMO", "Python", "Genetic Algorithms", "Fuzzy Logic"],
    type: "Algorithms & Networking",
    github: "https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-12_powerrangers.git",
  },
  {
    title: "ShopsBuzz – E-Commerce Platform",
    description:
      "Full-stack e-commerce system with MySQL, secure authentication, order workflows, and catalog management.",
    technologies: ["JavaScript", "MySQL", "HTML/CSS", "Express", "Node.js"],
    type: "Full-Stack Development",
    github: "https://github.com/Sandeep-Merugumala/ShopsBuzz.git",
    live: "https://www.shopsbuzz.shop/",
  },
  {
    title: "STM32F4 Soil & Water Monitoring System",
    description:
      "Built a soil & water monitoring system with ADC sensing, UART diagnostics, pump automation, and I2C-LCD visualization.",
    technologies: ["Embedded C", "STM32 HAL", "ADC", "I2C", "UART", "GPIO"],
    type: "Embedded Systems",
    github: "https://github.com/Vamsidhar-Muppagowni/STM32_Smart_Irrigation.git",
  },
  {
    title: "Food Preparation Menu Generator",
    description:
      "Web app that suggests recipes based on available ingredients with an intuitive UI and detailed cooking steps.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    type: "Front-End Development",
    github: "https://github.com/your-link-here",
  },
  {
    title: "Traffic Management Path Optimization",
    description:
      "Implemented Dijkstra and A* algorithms for real-time vehicle routing with live traffic visualization.",
    technologies: ["Data Structures", "Algorithms", "Dijkstra", "A*"],
    type: "Algorithms & Optimization",
    github: "https://github.com/your-link-here",
  },
  {
    title: "Crash Detection System",
    description:
      "Embedded crash detection using potentiometer + distance sensors. Built and tested in Tinkercad.",
    technologies: ["C", "Embedded Systems", "Tinkercad", "Sensors"],
    type: "Embedded Systems",
    github: "https://github.com/your-link-here",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-white rounded-lg p-6 flex flex-col shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Folder className="w-8 h-8 text-blue-500" />
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {/* @ts-ignore */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      title="Go Live"
                      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>

              <h3 className="font-mono font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
