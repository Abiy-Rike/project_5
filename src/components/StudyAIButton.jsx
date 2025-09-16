import React from 'react';
import { openStudyAI } from '../utils/studyAI';

const StudyAIButton = ({ className = '', children = 'Study AI+' }) => {
  const handleClick = async () => {
    await openStudyAI();
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-300 ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default StudyAIButton;