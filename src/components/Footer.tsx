import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zen-dark border-t border-zen-purple/20 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.a 
              href="mailto:shivendra9570.mishra@gmail.com" 
              className="bg-zen-purple/20 p-3 rounded-full hover:bg-zen-purple/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Mail className="text-zen-purple-light" size={20} />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/shibendra-mishra-1a536a237/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zen-purple/20 p-3 rounded-full hover:bg-zen-purple/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Linkedin className="text-zen-purple-light" size={20} />
            </motion.a>
            
            <motion.a 
              href="https://github.com/Shiva9570" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zen-purple/20 p-3 rounded-full hover:bg-zen-purple/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Github className="text-zen-purple-light" size={20} />
            </motion.a>
            
            <motion.a 
              href="https://www.instagram.com/jii_misharji" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zen-purple/20 p-3 rounded-full hover:bg-zen-purple/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Instagram className="text-zen-purple-light" size={20} />
            </motion.a>

            <motion.a 
              href="https://www.youtube.com/@sumitbeats" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zen-purple/20 p-3 rounded-full hover:bg-zen-purple/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Youtube className="text-zen-purple-light" size={20} />
            </motion.a>

            <motion.a 
              href="https://www.youtube.com/@Go.flexrcords" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zen-purple/20 p-3 rounded-full hover:bg-zen-purple/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Youtube className="text-zen-purple-light" size={20} />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xl font-semibold text-gradient mb-2">
              Code. Create. Connect.
            </p>
            <p className="text-gray-400">
              Building systems that empower and music that inspires.
            </p>
          </motion.div>
          
          <div className="text-gray-500 text-sm">
            <p>&copy; {currentYear} Shibendra Mishra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
