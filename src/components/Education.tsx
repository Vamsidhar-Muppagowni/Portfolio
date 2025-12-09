import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    school: "Amrita Vishwa Vidyapeetham, Tamil Nadu",
    years: "2023 - 2027",
    score: "6.92 CGPA",
    scoreLabel: "Current CGPA",
  },
  {
    degree: "Higher Secondary — MPC",
    school: "Narayana Educational Institutions",
    years: "2021 - 2023",
    score: "91%",
    scoreLabel: "Final Score",
  },
  {
    degree: "Secondary School — CBSE",
    school: "Viswabharathi Wisewoods School",
    years: "2020 - 2021",
    score: "86%",
    scoreLabel: "Final Score",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div key={edu.degree} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <h3 className="font-mono font-semibold text-lg text-gray-800">{edu.degree}</h3>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-gray-700 font-medium">{edu.school}</span>
                <span className="flex items-center gap-1 text-gray-500 font-mono text-sm">
                  <Calendar className="w-4 h-4" />
                  {edu.years}
                </span>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="bg-blue-100 rounded-lg p-4 text-center flex-1">
                  <p className="text-2xl font-bold text-blue-700 font-mono">{edu.score}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.scoreLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
