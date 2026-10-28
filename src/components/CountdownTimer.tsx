import React, { useState, useEffect } from 'react';
import { CountdownState } from '../types';

interface CountdownTimerProps {
  targetDays?: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDays = 7 }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: targetDays,
    hours: 23,
    minutes: 59,
    seconds: 59,
    isExpired: false
  });

  useEffect(() => {
    // Check localStorage or calculate 7 days from first visit
    const STORAGE_KEY = 'q50_minna_launch_target_v2';
    let targetTime: number;

    const savedTarget = localStorage.getItem(STORAGE_KEY);
    if (savedTarget) {
      targetTime = parseInt(savedTarget, 10);
    } else {
      // Set 7 days from right now
      targetTime = Date.now() + targetDays * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, targetTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDays]);

  return (
    <div className="w-full max-w-lg mx-auto my-6">
      <div className="text-center mb-2">
        <p className="text-xs uppercase tracking-widest font-bold text-amber-400 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
          OFFICIAL MINNA LAUNCH COUNTDOWN
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/40 via-slate-900/90 to-[#0c0c10] border border-amber-500/30 gold-glow">
        {/* Days */}
        <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-amber-500/20">
          <span className="font-heading font-black text-2xl sm:text-4xl text-amber-400 tabular-nums">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-amber-500/20">
          <span className="font-heading font-black text-2xl sm:text-4xl text-amber-400 tabular-nums">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-amber-500/20">
          <span className="font-heading font-black text-2xl sm:text-4xl text-amber-400 tabular-nums">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
            Mins
          </span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-amber-500/20">
          <span className="font-heading font-black text-2xl sm:text-4xl text-amber-300 tabular-nums">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
};
