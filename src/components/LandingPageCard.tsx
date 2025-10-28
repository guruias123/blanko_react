import React from 'react';

interface LandingPageCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  className?: string;
}

const LandingPageCard: React.FC<LandingPageCardProps> = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  className = "" 
}) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;