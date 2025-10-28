import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, iconAlt, title, description }) => {
  return (
    <div className="flex gap-4">
      <img src={iconSrc} alt={iconAlt} />
      <div className='flex flex-col'>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;