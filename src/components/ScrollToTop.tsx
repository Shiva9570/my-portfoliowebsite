
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 500px
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button 
          className="fixed bottom-6 right-6 bg-zen-purple p-3 rounded-full shadow-lg hover:bg-zen-purple-dark transition-transform duration-300 hover:scale-110 z-50 animate-fade-in"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
