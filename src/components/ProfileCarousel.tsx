import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface ProfileCarouselProps {
  images: string[];
  className?: string;
}
const ProfileCarousel: React.FC<ProfileCarouselProps> = ({
  images,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    // Auto rotate images every 5 seconds
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };
  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };
  return <div className={cn('relative w-72 h-96 md:w-80 md:h-[400px]', className)}>
      <div className="relative w-full h-full overflow-hidden shadow-xl border-2 border-zen-purple/30 rounded-xl">
        {/* Shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zen-dark/80 z-10"></div>
        
        {/* Current image */}
        <div className={cn('absolute inset-0 transition-opacity duration-600 ease-in-out', isAnimating ? 'opacity-0' : 'opacity-100')}>
          <img src={images[currentIndex]} alt="Shibendra Mishra" className="w-full h-full object-contain" />
        </div>
        
        {/* Next image (for transition) */}
        <div className={cn('absolute inset-0 transition-opacity duration-600 ease-in-out', isAnimating ? 'opacity-100' : 'opacity-0')}>
          <img src={images[(currentIndex + 1) % images.length]} alt="Shibendra Mishra" className="w-full h-full object-contain" />
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => <button key={index} className={cn('w-2 h-2 rounded-full transition-all duration-300', index === currentIndex ? 'bg-zen-purple-light w-4' : 'bg-white/50 hover:bg-white/80')} onClick={() => setCurrentIndex(index)} aria-label={`Go to image ${index + 1}`} />)}
      </div>
      
      {/* Navigation arrows */}
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-1 z-20" onClick={prevImage} aria-label="Previous image">
        <ChevronLeft size={20} className="text-white/80" />
      </button>
      
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-1 z-20" onClick={nextImage} aria-label="Next image">
        <ChevronRight size={20} className="text-white/80" />
      </button>
      
      {/* Enhanced pulse effect */}
      <div className="absolute inset-0 animate-pulse-glow"></div>
    </div>;
};
export default ProfileCarousel;