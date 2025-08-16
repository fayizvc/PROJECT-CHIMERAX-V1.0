
import React, { useState, useEffect } from 'react';
import { PRE_WORKOUT_ROUTINE } from '../constants';
import CircularTimer from './CircularTimer';
import { playAlertSound } from '../utils/audio';

interface PreWorkoutScreenProps {
  onComplete: () => void;
}

const PreWorkoutScreen: React.FC<PreWorkoutScreenProps> = ({ onComplete }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(PRE_WORKOUT_ROUTINE[0].duration);

  const currentExercise = PRE_WORKOUT_ROUTINE[currentExerciseIndex];

  useEffect(() => {
    if (timeLeft <= 0) {
      playAlertSound();
      const nextIndex = currentExerciseIndex + 1;
      if (nextIndex < PRE_WORKOUT_ROUTINE.length) {
        setCurrentExerciseIndex(nextIndex);
        setTimeLeft(PRE_WORKOUT_ROUTINE[nextIndex].duration);
      } else {
        onComplete();
      }
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, currentExerciseIndex, onComplete]);

  const getTimerPercentage = () => {
    const duration = currentExercise.duration;
    return (timeLeft / duration) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 animate-fadeIn">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
      `}</style>
      <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center">
        <div className="mb-6 text-center">
            <h1 className="text-xl font-bold text-amber-400 tracking-widest uppercase">PRE-MISSION PROTOCOL</h1>
            <p className="text-gray-400 font-semibold tracking-widest uppercase mt-2">
                STEP {currentExerciseIndex + 1} / {PRE_WORKOUT_ROUTINE.length}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 truncate">
                {currentExercise.name}
            </h2>
        </div>
        
        <CircularTimer
          percentage={getTimerPercentage()}
          color={'#f59e0b'} // amber-500
          time={timeLeft}
          state={'WARM UP'}
        />
        
        <div className="mt-8 text-center w-full max-w-md">
            <p className="text-lg text-gray-200 h-12 flex items-center justify-center px-4">
              {currentExercise.description}
            </p>
        </div>
        
        <button
          onClick={onComplete}
          className="mt-10 bg-gray-700 text-amber-400 font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50"
        >
          Skip Protocol
        </button>
      </div>
    </div>
  );
};

export default PreWorkoutScreen;