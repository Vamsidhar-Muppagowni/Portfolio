import React from "react";
import { Folder } from "lucide-react";

const projects = [
  {
    title: "Food Preparation Menu Generator",
    description:
      "A web application that suggests recipes based on available ingredients. Features an intuitive interface for ingredient input and displays detailed recipe instructions.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    type: "Front-End Development",
  },
  {
    title: "Traffic Management Path Optimization",
    description:
      "A system to optimize vehicle routing using shortest path algorithms. Implemented Dijkstra's and A* algorithms for efficient pathfinding with real-time traffic visualization.",
    technologies: ["Data Structures", "Algorithms", "Dijkstra's", "A*"],
    type: "Algorithms & Optimization",
  },
  {
    title: "Crash Detection System",
    description:
      "A C-based embedded system to detect crashes using potentiometer and distance sensors. Implemented in Tinkercad for simulation and testing.",
    technologies: ["C", "Embedded Systems", "Tinkercad", "Sensors"],
    type: "Embedded Systems",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-white rounded-lg p-6 flex flex-col shadow-sm"
            >
                <div className="flex items-center gap-3 mb-4">
                <Folder className="w-8 h-8 text-blue-500" />
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded self-center">
                    {project.type}
                  </span>
              </div>
              <h3 className="font-mono font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">{project.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
