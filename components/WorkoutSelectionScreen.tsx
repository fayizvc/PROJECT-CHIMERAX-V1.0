
import React from 'react';
import { WORKOUT_DATA } from '../constants';
import { Workout, WorkoutType } from '../types';

interface WorkoutSelectionScreenProps {
  onSelectWorkout: (workout: Workout) => void;
}

const WorkoutSelectionScreen: React.FC<WorkoutSelectionScreenProps> = ({ onSelectWorkout }) => {
  const handleSelect = (workoutName: WorkoutType) => {
    const selectedWorkout = WORKOUT_DATA.find(w => w.name === workoutName);
    if (selectedWorkout) {
      onSelectWorkout(selectedWorkout);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase">PROJECT CHIMERAX</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 tracking-widest">V1.0 MISSION CONTROL</h2>
      </div>
      <div className="w-full max-w-sm space-y-4">
        {WORKOUT_DATA.map(workout => (
          <button
            key={workout.name}
            onClick={() => handleSelect(workout.name)}
            className="w-full text-center bg-gray-800 border-2 border-gray-700 rounded-lg py-4 px-6 hover:bg-cyan-500 hover:border-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            <span className="text-xl font-bold uppercase tracking-wider">{workout.name}</span>
          </button>
        ))}
      </div>
       <footer className="absolute bottom-4 text-center text-gray-500 text-sm">
        <p>Your mission, should you choose to accept it.</p>
      </footer>
    </div>
  );
};

export default WorkoutSelectionScreen;
