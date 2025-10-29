import React, { useState, useRef, useEffect } from 'react';

interface Testimonial {
  companyName: string;
  testimonialText: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

interface TestimonialCardProps {
  testimonials?: Testimonial[];
  // Keep backward compatibility
  companyName?: string;
  testimonialText?: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  isActive?: boolean;
  onDotClick?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonials,
  companyName, 
  testimonialText, 
  authorName, 
  authorTitle,
  authorImage,
  isActive = true,
  onDotClick
}) => {
  // Default testimonials if none provided
  const defaultTestimonials: Testimonial[] = [
    {
      companyName: companyName || "DRUK",
      testimonialText: testimonialText || "Join a community of industry leading professionals. Join a community of industry leading professionals.",
      authorName: authorName || "Laura Paula",
      authorTitle: authorTitle || "Director @Company"
    },
    {
      companyName: "TECH CORP",
      testimonialText: "Amazing platform that revolutionized our workflow. The templates are incredibly versatile and easy to customize.",
      authorName: "Michael Chen",
      authorTitle: "CTO @TechCorp"
    }
  ];

  const testimonialData = testimonials || defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTestimonial = testimonialData[currentIndex];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (onDotClick) onDotClick();
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  // Touch/Mouse events for horizontal scrolling
  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging) return;
    
    const diffX = startX - clientX;
    const threshold = 50; // Minimum distance to trigger swipe
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }
    
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleEnd(e.changedTouches[0].clientX);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
      {/* Swipeable Content Area */}
      <div
        ref={containerRef}
        className={`select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} active:cursor-grabbing`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
      >
        {/* Company Name */}
        <div className="mb-8 sm:mb-12 transform transition-all duration-700 ease-out">
          <span className="text-white font-bold text-lg sm:text-xl tracking-wider">
            {currentTestimonial.companyName}
          </span>
        </div>
        
        {/* Testimonial Quote */}
        <blockquote className="text-xl sm:text-2xl lg:text-4xl font-light leading-relaxed mb-8 sm:mb-12 transform transition-all duration-700 ease-out opacity-100">
          "{currentTestimonial.testimonialText}"
        </blockquote>
        
        {/* Author Info */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
          <div className="text-lg sm:text-xl font-semibold mb-2">
            {currentTestimonial.authorName}
          </div>
          <div className="text-gray-400 text-base sm:text-lg">
            {currentTestimonial.authorTitle}
          </div>
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center space-x-3">
        {testimonialData.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-none transition-all duration-300 hover:scale-110 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>

      {/* Mobile swipe hint */}
      <div className="mt-4 text-gray-400 text-sm sm:hidden">
        Swipe left or right to navigate
      </div>
    </div>
  );
};

export default TestimonialCard;