import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface StatsCardProps {
  count: number;
  label: string;
  icon: IconDefinition; // Use FontAwesome's IconDefinition type for icons
  bgColor: string; // Background color for the card
}

const StatsCard: React.FC<StatsCardProps> = ({ count, label, icon, bgColor }) => {
  return (
    <div className={`card text-white mb-3 `} style={{ backgroundColor: bgColor, maxWidth: '18rem' }}>
      <div className="card-body d-flex align-items-center">
        <FontAwesomeIcon icon={icon} size="3x" className="me-3" />
        <div>
          <h2 className="card-title">{count}</h2>
          <p className="card-text">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
