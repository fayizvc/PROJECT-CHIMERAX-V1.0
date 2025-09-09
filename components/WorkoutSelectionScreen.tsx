
import React, { useState } from 'react';
import { WORKOUT_DATA_V1, WORKOUT_DATA_V2 } from '../constants';
import { Workout } from '../types';

interface WorkoutSelectionScreenProps {
  onSelectWorkout: (workout: Workout) => void;
}

const WorkoutSelectionScreen: React.FC<WorkoutSelectionScreenProps> = ({ onSelectWorkout }) => {
  const [selectedVersion, setSelectedVersion] = useState<'v1' | 'v2'>('v2');

  const workoutsToDisplay = selectedVersion === 'v1' ? WORKOUT_DATA_V1 : WORKOUT_DATA_V2;
  
  const versionButtonClasses = (version: 'v1' | 'v2') => 
    `w-1/2 py-3 text-sm sm:text-base font-bold uppercase tracking-wider focus:outline-none transition-colors duration-300 ${
      selectedVersion === version 
      ? 'bg-cyan-500 text-gray-900' 
      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
    }`;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase">PROJECT CHIMERAX</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 tracking-widest">MISSION CONTROL</h2>
      </div>

      <div className="w-full max-w-md mx-auto">
        <div className="flex rounded-lg border-2 border-gray-700 overflow-hidden mb-4">
          <button onClick={() => setSelectedVersion('v2')} className={`${versionButtonClasses('v2')} rounded-l-md`}>
            V2.0 Protocol
          </button>
          <button onClick={() => setSelectedVersion('v1')} className={`${versionButtonClasses('v1')} rounded-r-md`}>
            V1.0 Missions
          </button>
        </div>

        <div className="text-center bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6 min-h-[6rem] flex items-center justify-center">
            {selectedVersion === 'v2' ? (
                <p className="text-gray-300">A sustainable, long-term fitness plan focusing on form and steady progress.</p>
            ) : (
                <p className="text-gray-300">The original high-intensity protocols. Short, sharp, and effective.</p>
            )}
        </div>

        <div className="w-full space-y-4">
          {workoutsToDisplay.map(workout => (
            <button
              key={workout.name}
              onClick={() => onSelectWorkout(workout)}
              className="w-full text-left bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-5 hover:bg-cyan-500 hover:border-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
            >
              <span className="text-lg font-bold uppercase tracking-wider">{workout.name}</span>
            </button>
          ))}
        </div>
      </div>

       <footer className="absolute bottom-4 text-center text-gray-500 text-sm">
        <p>Select your protocol. Execute the mission.</p>
      </footer>
    </div>
  );
};

export default WorkoutSelectionScreen;
