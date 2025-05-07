
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, User, Music } from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <section id="about" className="section-padding bg-gradient-zen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-2 text-center"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-zen-purple mx-auto mb-10 rounded-full"
            variants={itemVariants}
          ></motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gradient-card rounded-xl p-6 backdrop-blur-md border border-white/10 card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="bg-zen-purple/20 p-3 rounded-lg">
                  <BookOpen className="text-zen-purple-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-3">Education</h3>
              </div>
              <p className="text-gray-300">
                Bachelor's degree in Computer Science, batch 2021-2025, at Anna University, Chennai, with a focus on software development.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-card rounded-xl p-6 backdrop-blur-md border border-white/10 card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="bg-zen-blue/20 p-3 rounded-lg">
                  <Code className="text-zen-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-3">Development</h3>
              </div>
              <p className="text-gray-300">
                Specializing in Java Full Stack development with expertise in Spring Boot, PostgreSQL, and building responsive web applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-card rounded-xl p-6 backdrop-blur-md border border-white/10 card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="bg-zen-purple/20 p-3 rounded-lg">
                  <Music className="text-zen-purple-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-3">Creativity</h3>
              </div>
              <p className="text-gray-300">
                Underground rapper, beat maker, and creative tech enthusiast passionate about blending technology with artistic expression.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-card rounded-xl p-8 backdrop-blur-md border border-white/10"
            variants={itemVariants}
          >
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                Currently interning at <span className="text-zen-blue">Inspirisys Solutions Limited</span>, where I'm applying my skills in real-world business scenarios and gaining valuable industry experience in full-stack development.
              </p>
              
              <p className="mb-4">
                My technical foundation is built on <span className="text-zen-purple-light">Java Full Stack development</span>, with expertise in Spring Boot, PostgreSQL, and front-end technologies including HTML, CSS, and JavaScript. I approach software development with a focus on creating efficient, scalable, and user-friendly solutions.
              </p>
              
              <p>
                Beyond coding, I'm passionate about music production and rap. As one of the first from my hometown to incorporate regional language and street culture into rap music, I bring the same creativity and innovative thinking to my technical work.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
