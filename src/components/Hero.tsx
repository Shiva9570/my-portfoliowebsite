
import React from 'react';
import ProfileCarousel from './ProfileCarousel';
import { ArrowRight, Download, Github, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Using the provided images with corrected links
  const profileImages = [
    'https://i.postimg.cc/KjQbbKrm/IMG-20241122-105804.jpg', // First image
    'https://i.postimg.cc/fyRFx8mh/IMG-20230911-145222-841.webp', // Second image
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Matrix-style code rain background effect
  const MatrixRain = () => {
    return (
      <div className="matrix-code font-code">
        {/* Content would be injected via JS, but we'll keep it simple */}
        <div className="opacity-5 select-none overflow-hidden text-[10px] text-zen-neon">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j} className="inline-block">
                  {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Matrix code background */}
      <MatrixRain />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left column: Profile image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-none">
            <ProfileCarousel images={profileImages} className="animate-float" />
          </div>
          
          {/* Right column: Text content */}
          <motion.div 
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              className="inline-block text-zen-purple-light font-medium mb-2"
              variants={itemVariants}
            >
              Hello, I am
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
              variants={itemVariants}
            >
              Shibendra Mishra
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl font-medium text-gray-300 mb-6"
              variants={itemVariants}
            >
              Java Full Stack Developer &amp; Underground Rapper
            </motion.div>
            
            <motion.p 
              className="text-xl italic text-gradient font-semibold mb-8 md:max-w-md mx-auto lg:mx-0"
              variants={itemVariants}
            >
              "From Spring Boot to Studio Booth — I build systems &amp; spit truth."
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={containerVariants}
            >
              <motion.a 
                href="#" 
                className="btn-glow px-6 py-3 rounded-full font-medium text-white flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                View Resume
              </motion.a>
              
              <motion.a 
                href="#projects" 
                className="bg-zen-dark border border-zen-purple/30 hover:border-zen-purple px-6 py-3 rounded-full font-medium text-white transition-colors flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                See Projects
              </motion.a>
              
              <motion.a 
                href="#music" 
                className="bg-zen-dark border border-zen-blue/30 hover:border-zen-blue px-6 py-3 rounded-full font-medium text-white transition-colors flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Music size={18} />
                Listen to My Music
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-12 hidden lg:block"
              variants={itemVariants}
            >
              <a 
                href="#about"
                className="flex items-center gap-2 text-zen-purple-light hover:text-zen-purple transition-colors"
              >
                Explore More <ArrowRight size={16} className="animate-bounce-soft" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
