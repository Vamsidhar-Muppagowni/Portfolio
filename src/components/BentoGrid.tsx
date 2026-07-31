import { motion } from "framer-motion";
import { FiCode, FiUser, FiBriefcase, FiExternalLink, FiGithub } from "react-icons/fi";

const BentoGrid = () => {
  return (
    <section id="bento" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Bento Overview
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A comprehensive look at my skills, experience, and what I bring to the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* About Card - Spans 2 cols, 2 rows */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card md:col-span-2 md:row-span-2 flex flex-col justify-between group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6">
                <FiUser size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">About Me</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Hello! I'm Vamsidhar, a Computer Science and Engineering student. My journey in tech started with curiosity about how things work, and has evolved into a deep interest in software development and machine learning.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Beyond coding, I thrive in collaborative environments where I can both learn from others and contribute my own ideas.
              </p>
            </div>
            <img src="/photo.jpg" alt="Vamsidhar" className="absolute -bottom-10 -right-10 w-48 h-48 object-cover rounded-full opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500 blur-sm group-hover:blur-none" />
          </motion.div>

          {/* Education Card - Spans 2 cols, 1 row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card md:col-span-2 md:row-span-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <FiBriefcase className="text-blue-500" size={24} />
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">B.Tech — Computer Science</h4>
                  <p className="text-sm text-muted-foreground">Amrita Vishwa Vidyapeetham</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">6.92 CGPA</span>
                  <p className="text-xs text-muted-foreground mt-1">2023 - 2027</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Card - Spans 1 col, 1 row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card md:col-span-1 md:row-span-1 flex flex-col justify-between bg-blue-500 text-white border-none"
          >
            <FiCode size={32} className="opacity-80" />
            <div>
              <h3 className="text-xl font-bold mb-2">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "React", "Node.js"].map(skill => (
                  <span key={skill} className="text-xs bg-white/20 px-2 py-1 rounded-md">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages/Soft Skills - Spans 1 col, 1 row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bento-card md:col-span-1 md:row-span-1 flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-foreground">Capabilities</h3>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li>&gt; Adaptable</li>
              <li>&gt; Team Player</li>
              <li>&gt; Communicator</li>
              <li>&gt; Problem Solver</li>
            </ul>
          </motion.div>

          {/* Featured Project - Spans 4 cols, 1 row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bento-card md:col-span-4 md:row-span-1 flex flex-col md:flex-row items-center gap-8 group"
          >
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono bg-muted text-foreground px-2 py-1 rounded">FEATURED PROJECT</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Edge-Based V2X Communication Protocol</h3>
              <p className="text-muted-foreground text-sm max-w-2xl mb-6">
                Designed a vehicular communication protocol leveraging Edge and Fog computing to dynamically minimize end-to-end delay while ensuring robust security.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-blue-500 transition-colors">
                  <FiGithub /> Source Code
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-full min-h-[150px] bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <FiExternalLink size={48} className="opacity-20 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
