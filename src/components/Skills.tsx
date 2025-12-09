import React from "react";
import { Code, Users, Target, Brain, Globe } from "lucide-react";

const skills = [
  {
    category: "Technical",
    icon: Code,
    items: ["HTML/CSS", "JavaScript", "JAVA", "Python", "Data Structures"],
  },
  {
    category: "Professional",
    icon: Users,
    items: ["Project Planning", "Coordination", "Team Collaboration"],
  },
  // {
  //   category: "Problem Solving",
  //   icon: Brain,
  //   items: ["Algorithm Design", "Optimization", "Analytical Thinking", "Debugging"],
  // },
  {
    category: "Soft Skills",
    icon: Target,
    items: ["Adaptability", "Calm Under Pressure", "Motivation", "Communication"],
  },
  {
    category: "Languages",
    icon: Globe,
    items: ["English (Upper Intermediate)", "Telugu (Fluent)", "Hindi (Intermediate)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-blue-100 text-blue-600">
                  <skill.icon className="w-5 h-5" />
                </div>
                <h3 className="font-mono font-semibold text-gray-800">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-600 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
