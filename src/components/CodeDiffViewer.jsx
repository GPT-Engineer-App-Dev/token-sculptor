import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import DiffDisplay from './DiffDisplay';
import AISimulator from './AISimulator';

const CodeDiffViewer = () => {
  const [originalCode, setOriginalCode] = useState('');
  const [modifiedCode, setModifiedCode] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleStartSimulation = () => {
    setIsSimulating(true);
  };

  const handleSimulationComplete = (newCode) => {
    setModifiedCode(newCode);
    setIsSimulating(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Original Code</h2>
        <CodeEditor code={originalCode} onChange={setOriginalCode} readOnly={isSimulating} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Modified Code</h2>
        <CodeEditor code={modifiedCode} onChange={setModifiedCode} readOnly={true} />
      </div>
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-2">Diff View</h2>
        <DiffDisplay originalCode={originalCode} modifiedCode={modifiedCode} />
      </div>
      <div className="md:col-span-2 mt-4">
        <button
          onClick={handleStartSimulation}
          disabled={isSimulating || !originalCode}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {isSimulating ? 'Simulating...' : 'Start AI Simulation'}
        </button>
      </div>
      {isSimulating && (
        <div className="md:col-span-2">
          <AISimulator
            originalCode={originalCode}
            onComplete={handleSimulationComplete}
          />
        </div>
      )}
    </div>
  );
};

export default CodeDiffViewer;