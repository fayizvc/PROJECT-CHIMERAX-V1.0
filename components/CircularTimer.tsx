
import React from 'react';

interface CircularTimerProps {
  percentage: number;
  color: string;
  time: number;
  state: string;
}

const CircularTimer: React.FC<CircularTimerProps> = ({ percentage, color, time, state }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <circle
          className="text-gray-700"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
        />
        <circle
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            transition: 'stroke-dashoffset 0.3s linear',
          }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-6xl sm:text-7xl font-bold text-white tracking-tighter">
          {time}
        </span>
        <span className="text-xl sm:text-2xl font-semibold tracking-widest uppercase" style={{ color }}>
          {state}
        </span>
      </div>
    </div>
  );
};

export default CircularTimer;
