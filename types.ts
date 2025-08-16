
export enum AppScreen {
  SELECTION = 'SELECTION',
  PRE_WORKOUT = 'PRE_WORKOUT',
  WORKOUT = 'WORKOUT',
  COMPLETE = 'COMPLETE',
}

export enum WorkoutType {
  UPPER_SIEGE = 'UPPER SIEGE',
  PROPULSION = 'PROPULSION',
  THE_CRUCIBLE = 'THE CRUCIBLE',
}

export enum TimerState {
  WORK = 'WORK',
  REST = 'REST',
}

export interface Exercise {
  name: string;
  focus: string;
  execution: string;
  fallback: string;
  overdrive: string;
}

export interface PreWorkoutExercise {
  name: string;
  duration: number;
  description: string;
}

export interface Workout {
  name: WorkoutType;
  exercises: Exercise[];
}