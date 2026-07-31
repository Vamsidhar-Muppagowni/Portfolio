import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const projectsData = [
  {
    title: "Edge-Based V2X Protocol",
    desc: "Designed a vehicular communication protocol leveraging Edge and Fog computing.",
    tech: ["Python", "Edge Computing", "IoT"],
    github: "#"
  },
  {
    title: "ShopsBuzz",
    desc: "A MERN stack application mapping local shops to an e-commerce platform.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "#"
  },
  {
    title: "STM32F4 Soil Monitoring",
    desc: "Embedded system to monitor soil moisture using STM32F4 microcontrollers.",
    tech: ["C", "STM32", "Hardware"],
    github: "#"
  },
  {
    title: "Food Preparation Time Prediction",
    desc: "Machine learning model to predict food preparation times for restaurants.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    github: "#"
  },
  {
    title: "Traffic Management System",
    desc: "A computer vision based traffic density management system.",
    tech: ["Python", "OpenCV", "YOLO"],
    github: "#"
  },
  {
    title: "Crash Detection Using Dashcam",
    desc: "AI system to detect vehicular crashes automatically from dashcam footage.",
    tech: ["Python", "TensorFlow", "Computer Vision"],
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            More Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A deeper dive into the technical solutions I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <div 
              key={idx} 
              className="bento-card flex flex-col justify-between h-full group cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-blue-500">
                    <FiFolder size={32} />
                  </div>
                  <div className="flex gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <a href={project.github} className="hover:text-blue-500"><FiGithub size={20} /></a>
                    <a href="#" className="hover:text-blue-500"><FiExternalLink size={20} /></a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>
              
              <ul className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-muted-foreground">
                {project.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
