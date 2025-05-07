
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'certification' | 'education';
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer Intern",
      company: "Inspirisys Solutions Limited",
      period: "Mar 2025 - Present",
      description: [
        "Working with Java Full Stack technologies including Spring Boot and PostgreSQL",
        "Building responsive web applications and RESTful APIs",
        "Participating in agile development processes and gaining industry experience"
      ],
      type: "work"
    },
    {
      title: "Data Analyst Intern",
      company: "Data Softix",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Analyzed sales data from CSV files and created insightful visualizations",
        "Built interactive bar and line charts to track performance metrics",
        "Developed data cleaning procedures to improve data quality"
      ],
      type: "work"
    },
    {
      title: "Virtual Experience Program",
      company: "Accenture",
      period: "Mar 2023 - Apr 2023",
      description: [
        "Visualized content data to identify trends and patterns",
        "Created compelling data storytelling dashboards",
        "Applied data-driven insights to solve business problems"
      ],
      type: "work"
    },
    {
      title: "Bachelor's Degree, Computer Science",
      company: "Anna University, Chennai",
      period: "2021 - 2025",
      description: [
        "Pursuing a four-year bachelor's degree in Computer Science",
        "Focus on software development and full-stack technologies",
        "Expected graduation in 2025"
      ],
      type: "education"
    },
    {
      title: "Python Certification",
      company: "Infosys",
      period: "Feb 2023",
      description: [
        "Mastered advanced Python concepts including data structures and algorithms",
        "Developed applications to solve real-world problems"
      ],
      type: "certification"
    },
    {
      title: "MongoDB Certification",
      company: "Nan Mudhalvan",
      period: "Mar 2023",
      description: [
        "Gained expertise in NoSQL database design and implementation",
        "Created efficient data models for various applications"
      ],
      type: "certification"
    },
    {
      title: "Office 365 Certification",
      company: "Microsoft",
      period: "Jan 2023",
      description: [
        "Developed proficiency in the complete Microsoft Office suite",
        "Applied productivity tools to streamline business operations"
      ],
      type: "certification"
    },
    {
      title: "Data Visualization Certification",
      company: "Accenture (Forage)",
      period: "Apr 2023",
      description: [
        "Mastered techniques for creating effective data visualizations",
        "Applied visualization principles to communicate insights clearly"
      ],
      type: "certification"
    }
  ];

  // Filter experiences by type
  const workExperience = experiences.filter(exp => exp.type === 'work');
  const certifications = experiences.filter(exp => exp.type === 'certification');
  const education = experiences.filter(exp => exp.type === 'education');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({ experience }) => {
    return (
      <motion.div 
        className="bg-gradient-card rounded-xl p-6 backdrop-blur-md border border-white/10 card-hover mb-6"
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-zen-purple-light">{experience.title}</h3>
            <p className="text-gray-300">{experience.company}</p>
          </div>
          <div className="mt-2 md:mt-0 bg-zen-purple/20 px-3 py-1 rounded-full text-sm">
            {experience.period}
          </div>
        </div>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          {experience.description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="w-20 h-1 bg-zen-purple mx-auto mb-10 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="col-span-1 lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-zen-purple/20 p-2 rounded-lg mr-3">
                <Briefcase className="text-zen-purple-light" size={20} />
              </span>
              Work Experience
            </h3>
            
            {workExperience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="col-span-1 lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-zen-purple/20 p-2 rounded-lg mr-3">
                <BookOpen className="text-zen-purple-light" size={20} />
              </span>
              Education
            </h3>
            
            {education.map((edu, index) => (
              <ExperienceCard key={index} experience={edu} />
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="col-span-1 lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-zen-purple/20 p-2 rounded-lg mr-3">
                <BookOpen className="text-zen-purple-light" size={20} />
              </span>
              Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <ExperienceCard key={index} experience={cert} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
