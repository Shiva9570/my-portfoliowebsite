
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import MicDrop from '../components/MicDrop';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { toast } from '@/components/ui/use-toast';

// Import framer-motion for page animations
import { motion, AnimatePresence } from 'framer-motion';

const Index: React.FC = () => {
  useEffect(() => {
    // Preload profile images with updated URLs
    const imageUrls = [
      'https://i.postimg.cc/KjQbbKrm/IMG-20241122-105804.jpg',
      'https://i.postimg.cc/fyRFx8mh/IMG-20230911-145222-841.webp'
    ];
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
    
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my projects and reach out if you'd like to connect.",
        duration: 5000,
      });
    }, 1500);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-zen-dark"
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <MicDrop />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
