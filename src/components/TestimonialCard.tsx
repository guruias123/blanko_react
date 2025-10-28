import React from 'react';

interface TestimonialCardProps {
  companyName: string;
  testimonialText: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
  isActive?: boolean;
  onDotClick?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  companyName, 
  testimonialText, 
  authorName, 
  authorTitle,
  authorImage,
  isActive = true,
  onDotClick
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
      {/* Company Name */}
      <div className="mb-8 sm:mb-12">
        <span className="text-white font-bold text-lg sm:text-xl tracking-wider">{companyName}</span>
      </div>
      
      {/* Testimonial Quote */}
      <blockquote className="text-xl sm:text-2xl lg:text-4xl font-light leading-relaxed mb-8 sm:mb-12">
        "{testimonialText}"
      </blockquote>
      
      {/* Author Info */}
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <div className="text-lg sm:text-xl font-semibold mb-2">{authorName}</div>
        <div className="text-gray-400 text-base sm:text-lg">{authorTitle}</div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center space-x-3">
        <button 
          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isActive ? 'bg-white' : 'bg-gray-600 hover:bg-gray-500'
          }`}
          onClick={onDotClick}
        ></button>
        <button 
          className="w-3 h-3 bg-gray-600 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-500"
        ></button>
      </div>
    </div>
  );
};

export default TestimonialCard;