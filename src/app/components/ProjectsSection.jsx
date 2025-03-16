"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Attendance Management & Tracker",
    description:
      "A web-based application that helps students track their attendance based on attended classes. Users can easily monitor and manage their attendance with a intuitive interface.",
    image: "/images/projects/1.png",
    tag: ["Web", "All"],
    gitUrl: "https://github.com/ManyaSh3/AMT-frontend",
    previewUrl: "https://amt-frontend-eosin.vercel.app/",
    techStack: "React, CSS, Node.js, Express, MongoDB",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "A digital platform designed to manage a library’s collection of e-books efficiently. Users can browse, rent, purchase, and download e-books in PDF format. The system also provides advanced administrative features.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ManyaSh3/library-management-system",
    previewUrl: "/",
    techStack: "Python, Flask, SQLite, Bootstrap, Flask-SQLAlchemy, Git",
  },
  {
    id: 3,
    title: "Library Management System V-2",
    description:
      "An enhanced multi-user library management system with improved book issue and return mechanisms. The system offers real-time book tracking, role-based access, and an intuitive user interface.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ManyaSh3/library-management-system-2",
    previewUrl: "/",
    techStack: "Flask, Vue.js, Jinja2, SQLite, Redis, Celery, Bootstrap",
  },
  {
    id: 4,
    title: "DemandEdge",
    description:
      "A machine learning-powered system designed to forecast product demand with high accuracy. It analyzes historical trends, seasonal variations, and product categories to provide actionable insights.",
    image: "/images/projects/4.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/ManyaSh3/DemandEdge",
    previewUrl: "/",
    techStack: "Python, Pandas, NumPy, Scikit-learn, ARIMA, XGBoost,SARIMA,SARIMA-X",
  },
  {
    id: 5,
    title: "Business Data Management",
    description:
      "A data-driven analysis project focused on consumer preferences for local dairy milk. The study includes data cleaning, visualization, and statistical analysis to provide business recommendations.",
    image: "/images/projects/5.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/ManyaSh3/BDM-Project",
    previewUrl: "/",
    techStack: "Python, Pandas, Matplotlib, Seaborn, MS Excel",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    if (tag !== newTag) {
        setTag(newTag);
    }
};



  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <motion.section
        id="projects"
      className="py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }} // Removed `once: true` to allow repeated animations
    >
      {/* Animated Title */}
      <motion.h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        My Projects
      </motion.h2>

      {/* Animated Tags */}
      <motion.div
        className="text-white flex flex-row justify-center items-center gap-2 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }} // Ensure animation retriggers on scroll
      >
        {["All", "Web", "ML","Data Science"].map((category) => (
          <motion.div key={category} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ProjectTag onClick={handleTagChange} name={category} isSelected={tag === category} />
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        {filteredProjects.map((project) => (
          <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          >
      
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStack={project.techStack}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
