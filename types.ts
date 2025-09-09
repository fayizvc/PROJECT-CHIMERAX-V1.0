
export enum AppScreen {
  SELECTION = 'SELECTION',
  PRE_WORKOUT = 'PRE_WORKOUT',
  WORKOUT = 'WORKOUT',
  COMPLETE = 'COMPLETE',
}

export enum WorkoutType {
  // V1
  UPPER_SIEGE = 'UPPER SIEGE',
  PROPULSION = 'PROPULSION',
  THE_CRUCIBLE = 'THE CRUCIBLE',
  // V2
  MONDAY_PUSH = 'MONDAY: UPPER BODY (PUSH)',
  TUESDAY_LEGS_CORE = 'TUESDAY: LOWER BODY & CORE',
  THURSDAY_PULL = 'THURSDAY: UPPER BODY (PULL)',
  FRIDAY_FULL_BODY = 'FRIDAY: FULL BODY',
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

export interface CoolDownStretch {
    name: string;
    description: string;
}

export interface Workout {
  name: WorkoutType;
  exercises: Exercise[];
  version: 'v1' | 'v2';
}
