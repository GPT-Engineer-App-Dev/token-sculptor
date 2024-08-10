import React from 'react';
import { diffLines } from 'diff';

const DiffDisplay = ({ originalCode, modifiedCode }) => {
  const diff = diffLines(originalCode, modifiedCode);

  return (
    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
      {diff.map((part, index) => (
        <span
          key={index}
          className={`${
            part.added ? 'bg-green-200' : part.removed ? 'bg-red-200' : ''
          }`}
        >
          {part.value}
        </span>
      ))}
    </pre>
  );
};

export default DiffDisplay;