import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';

// Import all slides
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    // Smooth scroll to the target slide
    const targetElement = document.getElementById(`slide-${slideIndex}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const slideElements = slides.map((_, index) => 
        document.getElementById(`slide-${index}`)
      );
      
      let closestSlide = 0;
      let minDistance = Infinity;
      
      slideElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSlide = index;
          }
        }
      });
      
      if (closestSlide !== currentSlide) {
        setCurrentSlide(closestSlide);
      }
    };

    const throttledHandleScroll = () => {
      clearTimeout(throttledHandleScroll.timeout);
      throttledHandleScroll.timeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(throttledHandleScroll.timeout);
    };
  }, [currentSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          handleSlideChange(currentSlide + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlide > 0) {
          handleSlideChange(currentSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="relative">
      <Navigation 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={handleSlideChange}
      />
      
      {slides.map((SlideComponent, index) => (
        <div key={index} id={`slide-${index}`}>
          <SlideComponent />
        </div>
      ))}
    </div>
  );
}

export default App;