"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Coolze AC Website",
    description:
      "Coolze AC Website is a project that I worked on for a client. It is a website for an air conditioning company.",
    image: "/images/coolzeac.png",
    tag: ["All", "Client"],
    gitUrl: "https://github.com/MitraWebsite/Coolze",
    previewUrl: "https://coolzeac.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This is my portfolio website. I built it using Next.js, Tailwind CSS, and Framer Motion.",
    image: "/images/portfolio-latest.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/VictoryoM/my-portfolio",
    previewUrl: "https://victoryo.vercel.app",
  },
  {
    id: 3,
    title: "DragonSteel Website",
    description:
      "DragonSteel Website is a project that I am still working on for a client.",
    image: "/images/dragonsteel.png",
    tag: ["All", "Client"],
    gitUrl: "/",
    previewUrl: "https://dragonsteel.vercel.app",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "This is a project that I did when I was learning React.",
    image: "/images/portfolio-react.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/VictoryoM/assignment-709",
    previewUrl: "https://victoryos.vercel.app",
  },
  {
    id: 5,
    title: "Quizie 721",
    description: "Quizie 721 is a project that I did when I was studying.",
    image: "/images/portfolio-react.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/VictoryoM/quizie-721",
    previewUrl: "https://quizie-721.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Client"
          isSelected={tag === "Client"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
