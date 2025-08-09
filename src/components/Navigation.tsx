import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (slideIndex: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, onSlideChange }) => {
  const handlePrevious = () => {
    if (currentSlide > 0) {
      onSlideChange(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    }
  };

  return (
    <motion.div 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <button
        onClick={handlePrevious}
        disabled={currentSlide === 0}
        className={`p-3 rounded-full transition-all ${
          currentSlide === 0 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl'
        }`}
      >
        <ChevronUp size={24} />
      </button>

      <div className="flex flex-col space-y-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            onClick={() => onSlideChange(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide 
                ? 'bg-blue-900 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentSlide === totalSlides - 1}
        className={`p-3 rounded-full transition-all ${
          currentSlide === totalSlides - 1 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl'
        }`}
      >
        <ChevronDown size={24} />
      </button>

      <div className="mt-4 text-sm text-gray-600">
        {currentSlide + 1} / {totalSlides}
      </div>
    </motion.div>
  );
};

export default Navigation;