
import { Workout, WorkoutType, PreWorkoutExercise, CoolDownStretch } from './types';

export const WORK_DURATION = 40;
export const REST_DURATION = 20;
export const TOTAL_ROUNDS = 3;

// V1.0 DATA
export const PRE_WORKOUT_ROUTINE_V1: PreWorkoutExercise[] = [
  { name: 'Jumping Jacks', duration: 30, description: 'A classic full-body warm-up to get your heart rate up.' },
  { name: 'Arm Circles', duration: 20, description: 'Loosen up your shoulder joints. Go forwards for 10s, then backwards.' },
  { name: 'High Knees', duration: 30, description: 'Drive your knees up towards your chest. Keep a brisk pace.' },
  { name: 'Leg Swings', duration: 30, description: 'Hold onto something for balance. Swing one leg forward and back for 15s, then switch.' },
  { name: 'Torso Twists', duration: 20, description: 'Stand with feet shoulder-width apart and rotate your upper body side to side.' }
];

export const WORKOUT_DATA_V1: Workout[] = [
  {
    name: WorkoutType.UPPER_SIEGE,
    version: 'v1',
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
    version: 'v1',
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
    version: 'v1',
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

export const COOL_DOWN_STRETCHES_V1: CoolDownStretch[] = [
    { name: "Quad Stretch", description: "Stand, pull one heel to your glute. Keep knees together." },
    { name: "Seated Hamstring Stretch", description: "Sit, extend one leg, and fold over it." },
    { name: "Pigeon Pose", description: "Excellent for tight hips. Look this one up for proper form." },
    { name: "Doorway Chest Stretch", description: "Place forearms on a door frame and lean through." },
    { name: "Child's Pose", description: "Restorative pose for the back and shoulders." }
];


// V2.0 DATA
export const PRE_WORKOUT_ROUTINE_V2: PreWorkoutExercise[] = [
  { name: 'Arm Swings & Lateral Steps', duration: 30, description: 'Swing arms forward and back while stepping side-to-side.'},
  { name: 'Skipping Without Rope', duration: 30, description: 'Mimic skipping rope. Stay light on your feet.'},
  { name: 'Cross Touch and Reach', duration: 30, description: 'Touch your right hand to your left foot, then reach for the sky. Alternate sides.'},
  { name: 'High Stepping', duration: 30, description: 'Drive your knees up high, alternating legs at a moderate pace.'},
  { name: 'Adductor Stretch in Standing', duration: 30, description: 'Stand with feet wide, lean to one side, keeping the other leg straight. Hold for 15s per side.'},
];

export const WORKOUT_DATA_V2: Workout[] = [
  {
    name: WorkoutType.MONDAY_PUSH,
    version: 'v2',
    exercises: [
      { name: 'Push-ups', focus: 'Chest, shoulders, and triceps. Keep your body in a straight line.', execution: 'From a high plank, lower your chest towards the floor, then push back up.', fallback: 'Perform push-ups on your knees.', overdrive: 'Slow down the lowering phase to 3 seconds.' },
      { name: 'Pike Push-ups', focus: 'Emphasis on shoulders.', execution: 'From a downward-dog position, bend your elbows to lower the top of your head towards the floor.', fallback: 'Reduce the angle of your body; walk hands further from feet.', overdrive: 'Elevate your feet on a low surface.' },
      { name: 'Chair Dips', focus: 'Triceps. Keep your back close to the chair.', execution: 'With hands on the edge of a sturdy chair, lower your body by bending your elbows, then press back up.', fallback: 'Keep your knees bent and feet closer to your body.', overdrive: 'Straighten your legs out in front of you.' },
      { name: 'Plank Up-Downs', focus: 'Core stability and shoulder strength.', execution: 'Start in an elbow plank. Push up one arm at a time to a high plank, then lower back down.', fallback: 'Hold a static elbow or high plank.', overdrive: 'Increase your speed while keeping hips stable.' }
    ]
  },
  {
    name: WorkoutType.TUESDAY_LEGS_CORE,
    version: 'v2',
    exercises: [
      { name: 'Bodyweight Squats', focus: 'Quads, glutes, and hamstrings. Keep your chest up.', execution: 'Sit back as if into a chair, going as deep as you can while maintaining a straight back.', fallback: 'Squat to a chair and stand back up.', overdrive: 'Pause for 2 seconds at the bottom of each squat.' },
      { name: 'Alternating Lunges', focus: 'Unilateral leg strength and stability.', execution: 'Step forward with one leg, lowering until both knees are at 90-degree angles. Push off the front foot to return.', fallback: 'Perform reverse lunges (stepping backward).', overdrive: 'Add a small jump when switching legs.' },
      { name: 'Glute Bridges', focus: 'Posterior chain activation. Squeeze glutes at the top.', execution: 'Lie on your back, knees bent. Drive through your heels to lift your hips towards the ceiling.', fallback: 'Reduce the range of motion.', overdrive: 'Perform with one leg extended (20s per side).' },
      { name: 'Lying Leg Raises', focus: 'Lower abdominals. Keep your lower back pressed into the floor.', execution: 'Lie on your back and raise your straight legs towards the ceiling, then slowly lower them.', fallback: 'Perform with bent knees.', overdrive: 'Add a small hip lift at the top of the movement.' }
    ]
  },
  {
    name: WorkoutType.THURSDAY_PULL,
    version: 'v2',
    exercises: [
      { name: 'Supermans', focus: 'Lower back, glutes, and hamstrings.', execution: 'Lie on your stomach, arms extended. Lift your chest, arms, and legs off the floor simultaneously.', fallback: 'Lift only your upper body.', overdrive: 'Hold the top position for 3 seconds on each rep.' },
      { name: 'Prone "Y" Raises', focus: 'Upper back and shoulder stability.', execution: 'Lie face down, arms forming a "Y" shape. Lift your arms off the floor, squeezing shoulder blades together.', fallback: 'Perform with no weight/resistance.', overdrive: 'Use water bottles or cans for light resistance.' },
      { name: 'Towel Rows', focus: 'Simulates a pulling motion for the back.', execution: 'Sit on the floor, legs extended. Wrap a towel around your feet. Pull on the ends of the towel, squeezing your back muscles.', fallback: 'Perform the motion without a towel, focusing on the muscle contraction.', overdrive: 'Increase the tension by pulling harder.' },
      { name: 'Bird-Dog', focus: 'Core stability and balance.', execution: 'From hands and knees, extend your opposite arm and leg simultaneously. Keep your back flat.', fallback: 'Perform by only extending an arm or a leg.', overdrive: 'Hold the extended position for 2 seconds.' }
    ]
  },
  {
    name: WorkoutType.FRIDAY_FULL_BODY,
    version: 'v2',
    exercises: [
      { name: 'Crunches', focus: 'Upper abdominals. Lift your shoulder blades off the floor.', execution: 'Lie on your back, knees bent. Curl your upper body towards your knees.', fallback: 'Reduce range of motion.', overdrive: 'Keep your feet elevated off the floor.' },
      { name: 'Flutter Kicks', focus: 'Lower abdominals and hip flexors.', execution: 'Lie on your back, legs straight and slightly elevated. Perform small, quick up-and-down kicks.', fallback: 'Bend your knees slightly or raise legs higher.', overdrive: 'Lower your legs closer to the floor.' },
      { name: 'Russian Twists', focus: 'Obliques. Twist your torso side to side.', execution: 'Sit on the floor, leaning back with knees bent. Twist your upper body from side to side.', fallback: 'Keep your feet on the floor for support.', overdrive: 'Lift your feet off the floor.' },
      { name: 'Mountain Climbers', focus: 'Full body cardio and core engagement.', execution: 'From a high plank, drive your knees towards your chest in a running motion.', fallback: 'Perform slowly and deliberately.', overdrive: 'Perform cross-body, bringing knee to opposite elbow.' }
    ]
  }
];

export const COOL_DOWN_STRETCHES_V2: CoolDownStretch[] = [
    { name: "Child's Pose", description: "Kneel, sit back on your heels, and fold forward, resting your forehead on the floor. Targets: Back, Hips, Shoulders." },
    { name: "Standing Quad Stretch", description: "Stand on one leg, grab the other foot and gently pull your heel towards your glute. Keep knees together. Targets: Quadriceps." },
    { name: "Standing Hamstring Stretch", description: "Place one heel on an elevated surface. Hinge at your hips and lean forward. Targets: Hamstrings." },
    { name: "Doorway Chest Stretch", description: "Place forearms on a door frame, elbows slightly below shoulder height. Step forward. Targets: Chest, Shoulders." },
    { name: "Across-Body Shoulder Stretch", description: "Gently pull one arm across your chest until you feel a stretch. Targets: Shoulders." },
    { name: "Overhead Triceps Stretch", description: "Reach one arm up, bend the elbow, and use your other hand to gently pull the elbow downwards. Targets: Triceps." }
];
