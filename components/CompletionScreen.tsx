
import React from 'react';
import { CoolDownStretch } from '../types';

interface CompletionScreenProps {
  onReturn: () => void;
  stretches: CoolDownStretch[];
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ onReturn, stretches }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 animate-fadeIn">
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
      `}</style>
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-cyan-400 tracking-widest uppercase mb-4">MISSION COMPLETE</h1>
        <p className="text-lg text-gray-300 mb-8">Well done, operative. Recovery is critical for adaptation.</p>
        
        <div className="bg-gray-800 rounded-lg p-6 text-left border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Post-Mission Cool-Down</h2>
            <ul className="space-y-4">
                {stretches.map((stretch, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">
                          <span className="font-semibold text-white">{stretch.name}:</span> {stretch.description}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        <button
          onClick={onReturn}
          className="mt-10 bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-cyan-400 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
        >
          Return to Mission Control
        </button>
      </div>
    </div>
  );
};

export default CompletionScreen;
