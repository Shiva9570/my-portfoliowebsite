
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Music, Play } from 'lucide-react';

const MicDrop: React.FC = () => {
  const musicChannels = [
    {
      name: "Sumit Beats",
      description: "Beat production and instrumentals",
      link: "https://www.youtube.com/channel/channel-id-1",
      type: "beats"
    },
    {
      name: "Go.flexrcords",
      description: "Main rap channel featuring original tracks",
      link: "https://www.youtube.com/channel/channel-id-2",
      type: "main"
    }
  ];

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

  const MusicCard: React.FC<{ channel: any }> = ({ channel }) => {
    return (
      <motion.div 
        className="bg-gradient-card rounded-xl overflow-hidden backdrop-blur-md border border-white/10 card-hover"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-zen-purple/20 p-3 rounded-full">
              {channel.type === "beats" ? (
                <Music className="text-zen-purple-light" size={24} />
              ) : (
                <Play className="text-zen-purple-light" size={24} />
              )}
            </div>
            <h3 className="text-xl font-semibold ml-3 text-gradient">{channel.name}</h3>
          </div>
          
          <p className="text-gray-300 mb-6">
            {channel.description}
          </p>
          
          <a 
            href={channel.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zen-purple/20 hover:bg-zen-purple/30 text-white px-4 py-2 rounded-full transition-colors"
          >
            <ExternalLink size={16} />
            <span>Visit Channel</span>
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="music" className="section-padding bg-gradient-zen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="flex flex-col items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            🎤 Mic Drop Zone
          </h2>
          
          <motion.div 
            className="w-20 h-1 bg-zen-purple mx-auto mb-8 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          
          <p className="text-center text-gray-300 max-w-2xl">
            First from my hometown to rap using regional language &amp; street culture. 
            I blend technical precision with creative flow — in code and in rhymes.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {musicChannels.map((channel, index) => (
            <MusicCard key={index} channel={channel} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MicDrop;
