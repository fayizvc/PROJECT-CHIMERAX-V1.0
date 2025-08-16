
import React, { useState, useEffect, useCallback } from 'react';
import { Workout, TimerState, Exercise } from '../types';
import { WORK_DURATION, REST_DURATION, TOTAL_ROUNDS } from '../constants';
import CircularTimer from './CircularTimer';
import { PlayIcon, PauseIcon, StopIcon } from './icons';
import { playAlertSound } from '../utils/audio';

type DetailTab = 'execution' | 'fallback' | 'overdrive';

interface WorkoutScreenProps {
  workout: Workout;
  onComplete: () => void;
}

const WorkoutScreen: React.FC<WorkoutScreenProps> = ({ workout, onComplete }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timerState, setTimerState] = useState<TimerState>(TimerState.WORK);
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<DetailTab>('execution');

  const currentExercise = workout.exercises[currentExerciseIndex];

  const advanceWorkout = useCallback(() => {
    if (timerState === TimerState.WORK) {
      setTimerState(TimerState.REST);
      setTimeLeft(REST_DURATION);
    } else { // It was REST
      const nextExerciseIndex = currentExerciseIndex + 1;
      if (nextExerciseIndex < workout.exercises.length) {
        setCurrentExerciseIndex(nextExerciseIndex);
        setTimerState(TimerState.WORK);
        setTimeLeft(WORK_DURATION);
      } else {
        const nextRound = currentRound + 1;
        if (nextRound > TOTAL_ROUNDS) {
          onComplete();
        } else {
          setCurrentRound(nextRound);
          setCurrentExerciseIndex(0);
          setTimerState(TimerState.WORK);
          setTimeLeft(WORK_DURATION);
        }
      }
    }
  }, [timerState, currentExerciseIndex, workout.exercises.length, currentRound, onComplete]);


  useEffect(() => {
    if (isPaused) return;

    if (timeLeft <= 0) {
      playAlertSound();
      advanceWorkout();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isPaused, advanceWorkout]);

  const togglePause = () => setIsPaused(prev => !prev);

  const getTimerPercentage = () => {
    const duration = timerState === TimerState.WORK ? WORK_DURATION : REST_DURATION;
    return (timeLeft / duration) * 100;
  };
  
  const getTabContent = () => {
      const exercise: Exercise = currentExercise;
      return exercise[activeTab];
  }
  
  const getTabClassName = (tabName: DetailTab) => {
    return `px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors duration-200 focus:outline-none ${
        activeTab === tabName 
        ? 'bg-gray-700 text-cyan-400' 
        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
    }`;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        <div className="mb-6 text-center">
            <p className="text-gray-400 font-semibold tracking-widest uppercase">
                Round {currentRound} / {TOTAL_ROUNDS}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1 truncate">
                {currentExercise.name}
            </h1>
        </div>
        
        <CircularTimer
          percentage={getTimerPercentage()}
          color={timerState === TimerState.WORK ? '#22d3ee' : '#4ade80'}
          time={timeLeft}
          state={timerState}
        />

        <div className="mt-6 text-center w-full">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Focus</p>
            <p className="text-base text-gray-200 mt-1 h-10 flex items-center justify-center">{currentExercise.focus}</p>
        </div>

        <div className="w-full mt-6">
            <div className="flex border-b border-gray-700">
                <button onClick={() => setActiveTab('execution')} className={getTabClassName('execution')}>Execution</button>
                <button onClick={() => setActiveTab('fallback')} className={getTabClassName('fallback')}>Fallback (Easier)</button>
                <button onClick={() => setActiveTab('overdrive')} className={getTabClassName('overdrive')}>Overdrive (Harder)</button>
            </div>
            <div className="bg-gray-800 p-4 rounded-b-lg min-h-[100px] border border-t-0 border-gray-700">
                <p className="text-gray-300">{getTabContent()}</p>
            </div>
        </div>

        <div className="flex items-center space-x-6 mt-8">
          <button 
            onClick={togglePause} 
            className="flex items-center justify-center w-16 h-16 bg-cyan-500 text-gray-900 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50">
            {isPaused ? <PlayIcon className="w-8 h-8"/> : <PauseIcon className="w-8 h-8"/>}
          </button>
           <button 
            onClick={onComplete} 
            className="flex items-center justify-center w-12 h-12 bg-gray-700 text-red-400 rounded-full shadow-lg transform hover:scale-110 hover:bg-red-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50">
            <StopIcon className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutScreen;