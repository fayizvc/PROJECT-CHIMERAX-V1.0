
import React, { useState } from 'react';
import WorkoutSelectionScreen from './components/WorkoutSelectionScreen';
import WorkoutScreen from './components/WorkoutScreen';
import CompletionScreen from './components/CompletionScreen';
import PreWorkoutScreen from './components/PreWorkoutScreen';
import { AppScreen, Workout } from './types';
import { PRE_WORKOUT_ROUTINE_V1, PRE_WORKOUT_ROUTINE_V2, COOL_DOWN_STRETCHES_V1, COOL_DOWN_STRETCHES_V2 } from './constants';

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
    if (!selectedWorkout && (appScreen === AppScreen.WORKOUT || appScreen === AppScreen.PRE_WORKOUT || appScreen === AppScreen.COMPLETE)) {
        // Fallback to selection if workout is null
        setAppScreen(AppScreen.SELECTION);
        return <WorkoutSelectionScreen onSelectWorkout={handleSelectWorkout} />;
    }

    switch (appScreen) {
      case AppScreen.PRE_WORKOUT:
        const preWorkoutRoutine = selectedWorkout?.version === 'v2' ? PRE_WORKOUT_ROUTINE_V2 : PRE_WORKOUT_ROUTINE_V1;
        return <PreWorkoutScreen onComplete={handlePreWorkoutComplete} routine={preWorkoutRoutine} />;
      case AppScreen.WORKOUT:
        return selectedWorkout ? (
          <WorkoutScreen workout={selectedWorkout} onComplete={handleWorkoutComplete} />
        ) : null;
      case AppScreen.COMPLETE:
        const coolDownStretches = selectedWorkout?.version === 'v2' ? COOL_DOWN_STRETCHES_V2 : COOL_DOWN_STRETCHES_V1;
        return <CompletionScreen onReturn={handleReturnToSelection} stretches={coolDownStretches} />;
      case AppScreen.SELECTION:
      default:
        return <WorkoutSelectionScreen onSelectWorkout={handleSelectWorkout} />;
    }
  };

  return <div className="bg-gray-900">{renderScreen()}</div>;
};

export default App;
