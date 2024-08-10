import React, { useState, useEffect } from 'react';

const AISimulator = ({ originalCode, onComplete }) => {
  const [currentCode, setCurrentCode] = useState(originalCode);
  const [currentIndex, setCurrentIndex] = useState(0);

  const simulateEdit = () => {
    const tokens = originalCode.split(/(\s+)/);
    if (currentIndex < tokens.length) {
      const newToken = tokens[currentIndex].toUpperCase();
      const newCode = [
        ...tokens.slice(0, currentIndex),
        newToken,
        ...tokens.slice(currentIndex + 1),
      ].join('');
      setCurrentCode(newCode);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(currentCode);
    }
  };

  useEffect(() => {
    const interval = setInterval(simulateEdit, 500);
    return () => clearInterval(interval);
  }, [currentIndex, originalCode]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">AI Simulation Progress</h3>
      <div className="bg-gray-200 h-4 rounded-full">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${(currentIndex / originalCode.split(/(\s+)/).length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AISimulator;