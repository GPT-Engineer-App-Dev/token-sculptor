import React from 'react';
import CodeDiffViewer from '../components/CodeDiffViewer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Code Diff Viewer</h1>
      <CodeDiffViewer />
    </div>
  );
};

export default Index;