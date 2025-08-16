// A singleton AudioContext to be reused.
let audioCtx: AudioContext | null = null;

// Initialize AudioContext on the first user interaction (or first call).
// Browsers require a user gesture to start AudioContext.
const getAudioContext = (): AudioContext | null => {
  if (audioCtx) return audioCtx;
  try {
    if (typeof window !== 'undefined' && (window.AudioContext || (window as any).webkitAudioContext)) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      return audioCtx;
    }
  } catch (e) {
    console.error("Web Audio API is not supported in this browser.", e);
  }
  return null;
};

/**
 * Plays a short, noticeable alert sound.
 */
export const playAlertSound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;

  // If the audio context is suspended (e.g., due to inactivity), resume it.
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  // Configure the sound's properties
  oscillator.type = 'sine'; // A clean, pure tone
  oscillator.frequency.setValueAtTime(880, ctx.currentTime); // A high-pitched tone (A5)
  gainNode.gain.setValueAtTime(0.5, ctx.currentTime); // Set volume

  // Create a quick "ping" effect by ramping down the frequency and volume
  oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.3);
};
