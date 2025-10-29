import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, iconAlt, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-left mb-8 lg:mb-0">
      <img src={iconSrc} alt={iconAlt} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain flex-shrink-0" />
      <div className='flex flex-col'>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;