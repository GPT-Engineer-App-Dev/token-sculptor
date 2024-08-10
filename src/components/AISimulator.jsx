import React, { useState, useEffect } from 'react';

const AISimulator = ({ originalCode, onComplete }) => {
  const [currentCode, setCurrentCode] = useState(originalCode);
  const [currentIndex, setCurrentIndex] = useState(0);

  const simulateEdit = () => {
    const lines = originalCode.split('\n');
    if (currentIndex < lines.length) {
      const newLines = [...lines];
      const currentLine = newLines[currentIndex];
      
      // Simulate different types of edits
      if (currentLine.includes('function')) {
        newLines[currentIndex] = currentLine.replace('function', 'const');
      } else if (currentLine.includes('console.log')) {
        newLines[currentIndex] = currentLine.replace('console.log', 'console.info');
      } else if (currentLine.includes('const')) {
        newLines[currentIndex] = currentLine.replace('const', 'let');
      } else if (currentLine.includes('return')) {
        newLines[currentIndex] = currentLine.replace('return', 'return /* modified */');
      } else {
        // If no specific edit, add a comment
        newLines[currentIndex] = `${currentLine} // AI modified`;
      }

      const newCode = newLines.join('\n');
      setCurrentCode(newCode);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(currentCode);
    }
  };

  useEffect(() => {
    const interval = setInterval(simulateEdit, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, originalCode]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">AI Simulation Progress</h3>
      <div className="bg-gray-200 h-4 rounded-full">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${(currentIndex / originalCode.split('\n').length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AISimulator;