
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Languages
    { name: 'Java', level: 90, category: 'Languages' },
    { name: 'Python', level: 75, category: 'Languages' },
    { name: 'JavaScript', level: 80, category: 'Languages' },
    { name: 'HTML', level: 85, category: 'Languages' },
    { name: 'CSS', level: 80, category: 'Languages' },
    
    // Databases
    { name: 'PostgreSQL', level: 85, category: 'Databases' },
    { name: 'MySQL', level: 80, category: 'Databases' },
    { name: 'MongoDB', level: 70, category: 'Databases' },
    
    // Tools
    { name: 'Spring Boot', level: 85, category: 'Tools' },
    { name: 'Power BI', level: 70, category: 'Tools' },
    { name: 'VS Code', level: 90, category: 'Tools' },
    { name: 'Jupyter', level: 75, category: 'Tools' },
    { name: 'Figma', level: 65, category: 'Tools' },
    { name: 'Canva', level: 80, category: 'Tools' },
    
    // Concepts
    { name: 'OOPs', level: 90, category: 'Concepts' },
    { name: 'DBMS', level: 85, category: 'Concepts' },
    { name: 'OS', level: 80, category: 'Concepts' },
    { name: 'Networking', level: 75, category: 'Concepts' },
  ];

  // Group skills by category
  const skillCategories = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const SkillBar: React.FC<{ skill: Skill, inView: boolean }> = ({ skill, inView }) => {
    return (
      <motion.div className="mb-4" variants={itemVariants}>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
          <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
        </div>
        <div className="progress-bar">
          {inView && (
            <div 
              className="progress-value" 
              style={{ '--progress-value': `${skill.level}%` } as React.CSSProperties} 
            />
          )}
        </div>
      </motion.div>
    );
  };

  // Ref and inView hook for triggering animations
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-zen-purple mx-auto mb-10 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>

          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {Object.entries(skillCategories).map(([category, skills]) => (
              <motion.div 
                key={category} 
                className="bg-gradient-card rounded-xl p-6 backdrop-blur-md border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category}</h3>
                <div>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} inView={inView} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
