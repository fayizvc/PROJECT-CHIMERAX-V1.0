
import { Workout, WorkoutType } from './types';

export const WORK_DURATION = 40;
export const REST_DURATION = 20;
export const TOTAL_ROUNDS = 3;

export const WORKOUT_DATA: Workout[] = [
  {
    name: WorkoutType.UPPER_SIEGE,
    exercises: [
      {
        name: 'Incline Push-ups',
        focus: 'Squeeze your glutes and brace your core. Keep elbows at a 45-degree angle to your body, not flared out.',
        execution: 'Hands on an elevated, stable surface (desk, sofa arm). Body in a rigid line from head to heels. Lower your chest to the surface, pause, and explode back up.',
        fallback: 'Increase the elevation height.',
        overdrive: 'Lower the elevation height.',
      },
      {
        name: 'Plank Shoulder Taps',
        focus: "Imagine a glass of water on your lower back. Don't spill it. This is an anti-rotation core exercise.",
        execution: 'Assume a high plank (on hands), feet slightly wider for stability. Without rocking your hips, lift one hand and tap the opposite shoulder.',
        fallback: 'Hold a standard high plank for the 40s.',
        overdrive: 'Slow the movement down, pausing for a second with each tap.',
      },
      {
        name: 'Supermans / Floor Swimmers',
        focus: 'Keep your neck neutral by looking at the floor in front of you. This is for your back, not your neck.',
        execution: 'Lie on your stomach, arms and legs extended. Simultaneously lift chest, arms, and thighs off the floor, squeezing your glutes and lower back muscles.',
        fallback: 'Lift only your upper body or only your legs.',
        overdrive: 'At the top of the lift, pull your elbows back towards your spine (like a row), then extend again before lowering.',
      },
      {
        name: 'Hollow Body Hold / Leg Raises',
        focus: "The connection between your lower back and the floor is everything. If it arches, you've gone too far.",
        execution: 'Lie on your back. Press your lower back firmly into the floor. Extend legs and arms, lifting your head and shoulder blades off the ground. Find the lowest point you can hold your arms/legs without your lower back arching.',
        fallback: 'Perform bent-knee leg raises.',
        overdrive: 'Add a gentle rocking motion (Hollow Body Rocks).',
      },
    ],
  },
  {
    name: WorkoutType.PROPULSION,
    exercises: [
      {
        name: 'Deep Bodyweight Squats',
        focus: 'Drive your knees out, not letting them collapse inward. Power up through your heels.',
        execution: 'Feet shoulder-width apart. Sit back as if into a chair, keeping your chest up and back straight. Go as deep as you can while maintaining a neutral spine.',
        fallback: 'Squat to a chair or sofa and stand back up.',
        overdrive: 'Pause for 2 seconds at the bottom of the squat before exploding up.',
      },
      {
        name: 'Alternating Reverse Lunges',
        focus: 'Maintain a proud chest and stable core. Most of the work is done by the front leg.',
        execution: 'Step one foot straight back, lowering until both knees form 90-degree angles. Lightly tap your back knee to the ground. Drive through the front heel to return to standing.',
        fallback: "Reduce the range of motion; don't go as deep.",
        overdrive: 'From the lunge, drive the back knee up into a high-knee position in front of you before starting the next rep.',
      },
      {
        name: 'Glute Bridges',
        focus: 'Squeeze your glutes HARD at the top. This is not a lower back exercise.',
        execution: 'Lie on your back, knees bent, feet flat on the floor close to your glutes. Drive through your heels to lift your hips high, forming a straight line from shoulders to knees.',
        fallback: 'Perform with a smaller range of motion.',
        overdrive: 'Perform with one leg extended straight, turning it into a single-leg glute bridge (20s per side).',
      },
      {
        name: 'Skater Jumps',
        focus: 'This is your cardio/agility burst. Cover as much ground as you can, landing softly and springing into the next jump.',
        execution: 'Start standing. Leap laterally to your right, landing on your right foot while your left leg sweeps behind you. Immediately leap to the left.',
        fallback: 'Perform lateral steps instead of jumps.',
        overdrive: 'Touch the floor with your opposite hand on each landing.',
      },
    ],
  },
  {
    name: WorkoutType.THE_CRUCIBLE,
    exercises: [
      {
        name: 'Burpees (Progressive)',
        focus: 'Maintain a rhythm. Find a pace you can sustain for 40 seconds.',
        execution: 'Place hands on the floor, step feet back to a plank, perform a push-up (on knees is fine), step feet back in, stand, and jump.',
        fallback: 'Remove the push-up and the jump (just step back, step in, stand up).',
        overdrive: 'Use a full chest-to-deck push-up and jump explosively.',
      },
      {
        name: 'Mountain Climbers',
        focus: 'Keep your hips low and your core braced. This is not a "pogo-stick" motion.',
        execution: 'From a high plank, drive your knees to your chest in a running motion.',
        fallback: 'Perform the movement slowly and deliberately.',
        overdrive: 'Increase speed; make it an all-out sprint.',
      },
      {
        name: 'Squat Jumps',
        focus: 'Emphasize a soft, quiet landing. This protects your joints.',
        execution: 'Squat down to parallel, then explode vertically. Land softly with bent knees, immediately absorbing the impact into the next squat.',
        fallback: 'Perform fast bodyweight squats without the jump.',
        overdrive: 'Try to tuck your knees towards your chest at the peak of the jump (Tuck Jump).',
      },
      {
        name: 'Plank Jacks',
        focus: 'The goal is core stability. Do not let your hips sag or rise.',
        execution: 'Assume an elbow plank. Keeping your upper body still, "jack" your feet out wide and then back together.',
        fallback: 'From the plank, step one foot out to the side at a time.',
        overdrive: 'Perform from a high plank (on hands), adding a push-up every 5 jacks.',
      },
    ],
  },
];

export const COOL_DOWN_STRETCHES = [
    "Quad Stretch: Stand, pull one heel to your glute. Keep knees together.",
    "Seated Hamstring Stretch: Sit, extend one leg, and fold over it.",
    "Pigeon Pose: Excellent for tight hips. Look this one up for proper form.",
    "Doorway Chest Stretch: Place forearms on a door frame and lean through.",
    "Child's Pose: Restorative pose for the back and shoulders."
];
