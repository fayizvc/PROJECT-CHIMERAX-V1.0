
import React, { useState } from 'react';
import WorkoutSelectionScreen from './components/WorkoutSelectionScreen';
import WorkoutScreen from './components/WorkoutScreen';
import CompletionScreen from './components/CompletionScreen';
import PreWorkoutScreen from './components/PreWorkoutScreen';
import { AppScreen, Workout } from './types';

const App: React.FC = () => {
  const [appScreen, setAppScreen] = useState<AppScreen>(AppScreen.SELECTION);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  const handleSelectWorkout = (workout: Workout) => {
    setSelectedWorkout(workout);
    setAppScreen(AppScreen.PRE_WORKOUT);
  };

  const handlePreWorkoutComplete = () => {
    setAppScreen(AppScreen.WORKOUT);
  };

  const handleWorkoutComplete = () => {
    setAppScreen(AppScreen.COMPLETE);
  };

  const handleReturnToSelection = () => {
    setSelectedWorkout(null);
    setAppScreen(AppScreen.SELECTION);
  };

  const renderScreen = () => {
    switch (appScreen) {
      case AppScreen.PRE_WORKOUT:
        return <PreWorkoutScreen onComplete={handlePreWorkoutComplete} />;
      case AppScreen.WORKOUT:
        return selectedWorkout ? (
          <WorkoutScreen workout={selectedWorkout} onComplete={handleWorkoutComplete} />
        ) : null; // Should not happen
      case AppScreen.COMPLETE:
        return <CompletionScreen onReturn={handleReturnToSelection} />;
      case AppScreen.SELECTION:
      default:
        return <WorkoutSelectionScreen onSelectWorkout={handleSelectWorkout} />;
    }
  };

  return <div className="bg-gray-900">{renderScreen()}</div>;
};

export default App;