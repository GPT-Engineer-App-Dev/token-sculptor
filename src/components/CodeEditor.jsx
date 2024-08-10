import React from 'react';

const CodeEditor = ({ code, onChange, readOnly }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
      className="w-full h-64 p-2 font-mono text-sm border border-gray-300 rounded"
      placeholder="Enter your code here..."
    />
  );
};

export default CodeEditor;