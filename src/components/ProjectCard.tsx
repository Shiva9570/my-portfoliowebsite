
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  image
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="project-card w-full h-[340px] cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`project-card-inner w-full h-full relative transition-transform duration-500 ${isFlipped ? 'transform-flip' : ''}`}>
        {/* Front of card */}
        <div className="project-card-front absolute inset-0 bg-gradient-card border border-white/10 rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
            <p className="text-sm text-gray-300 mb-4">{description}</p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mt-2">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs bg-zen-purple/20 text-zen-purple-light px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-4 text-sm text-gray-400">
              Hover to see details
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="project-card-back absolute inset-0 bg-gradient-card border border-white/10 rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm transform rotate-y-180">
          <div className="flex-1 flex flex-col items-center justify-center">
            {image && (
              <img 
                src={image} 
                alt={title} 
                className="w-16 h-16 object-cover mb-4 rounded-lg"
              />
            )}
            
            <h3 className="text-xl font-semibold mb-4 text-center text-gradient">{title}</h3>
            
            <p className="text-sm text-gray-200 text-center mb-6">
              {description}
            </p>
            
            <div className="flex justify-center gap-4">
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-zen-purple/20 hover:bg-zen-purple/30 text-white px-4 py-2 rounded-full transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}
              
              {liveLink && (
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-zen-blue/20 hover:bg-zen-blue/30 text-white px-4 py-2 rounded-full transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs bg-zen-purple/20 text-zen-purple-light px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
