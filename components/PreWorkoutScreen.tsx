
import React, { useState, useEffect, useCallback } from 'react';
import CircularTimer from './CircularTimer';
import { playAlertSound } from '../utils/audio';
import { PauseIcon, PlayIcon, SkipNextIcon, StopIcon } from './icons';
import { PreWorkoutExercise } from '../types';

interface PreWorkoutScreenProps {
  onComplete: () => void;
  routine: PreWorkoutExercise[];
}

const PreWorkoutScreen: React.FC<PreWorkoutScreenProps> = ({ onComplete, routine }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(routine[0].duration);
  const [isPaused, setIsPaused] = useState(false);

  const currentExercise = routine[currentExerciseIndex];

  const advanceExercise = useCallback(() => {
    const nextIndex = currentExerciseIndex + 1;
    if (nextIndex < routine.length) {
      setCurrentExerciseIndex(nextIndex);
      setTimeLeft(routine[nextIndex].duration);
    } else {
      onComplete();
    }
  }, [currentExerciseIndex, onComplete, routine]);

  useEffect(() => {
    if (isPaused) return;

    if (timeLeft <= 0) {
      playAlertSound();
      advanceExercise();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isPaused, advanceExercise]);

  const getTimerPercentage = () => {
    const duration = currentExercise.duration;
    return (timeLeft / duration) * 100;
  };
  
  const togglePause = () => setIsPaused(prev => !prev);
  
  const skipCurrentExercise = () => {
    playAlertSound();
    advanceExercise();
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
                STEP {currentExerciseIndex + 1} / {routine.length}
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
        
        <div className="flex items-center space-x-6 mt-8">
           <button 
            onClick={skipCurrentExercise}
            aria-label="Skip Exercise"
            className="flex items-center justify-center w-12 h-12 bg-gray-700 text-amber-400 rounded-full shadow-lg transform hover:scale-110 hover:bg-amber-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50">
            <SkipNextIcon className="w-6 h-6"/>
          </button>
          <button 
            onClick={togglePause} 
            aria-label={isPaused ? 'Resume' : 'Pause'}
            className="flex items-center justify-center w-16 h-16 bg-amber-500 text-gray-900 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50">
            {isPaused ? <PlayIcon className="w-8 h-8"/> : <PauseIcon className="w-8 h-8"/>}
          </button>
           <button 
            onClick={onComplete}
            aria-label="Skip Warmup"
            className="flex items-center justify-center w-12 h-12 bg-gray-700 text-red-400 rounded-full shadow-lg transform hover:scale-110 hover:bg-red-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50">
            <StopIcon className="w-6 h-6"/>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PreWorkoutScreen;
