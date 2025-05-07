
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const githubProfile = "https://github.com/shivendra9570";
  
  const projects = [
    {
      title: "Attendance Management System",
      description: "Face recognition-based student tracking system for academic institutions",
      techStack: ["Java", "Spring Boot", "OpenCV", "PostgreSQL"],
      githubLink: githubProfile,
      liveLink: githubProfile,
      image: "/placeholder.svg"
    },
    {
      title: "Notes Web App",
      description: "CRUD application for managing notes with user authentication",
      techStack: ["JavaScript", "Node.js", "MongoDB", "Express"],
      githubLink: githubProfile,
      liveLink: githubProfile,
      image: "/placeholder.svg"
    },
    {
      title: "To-Do App",
      description: "Dynamic task manager with priority sorting and deadline reminders",
      techStack: ["React", "Firebase", "CSS"],
      githubLink: githubProfile,
      liveLink: githubProfile,
      image: "/placeholder.svg"
    },
    {
      title: "Mind Trick Number Game",
      description: "Interactive logic puzzle game using JavaScript",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: githubProfile,
      liveLink: githubProfile,
      image: "/placeholder.svg"
    },
    {
      title: "Trend Tracker",
      description: "Daily trending news aggregator organized by category",
      techStack: ["Python", "Flask", "News API", "Bootstrap"],
      githubLink: githubProfile,
      liveLink: githubProfile,
      image: "/placeholder.svg"
    },
    {
      title: "Bookstore E-commerce UI",
      description: "UX/UI design for an online bookstore platform",
      techStack: ["Figma", "UX Design", "UI Design"],
      githubLink: githubProfile,
      liveLink: githubProfile,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-zen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="w-20 h-1 bg-zen-purple mx-auto mb-10 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
