import React, { useState, useEffect } from 'react';
import { LIVE_NOTIFICATIONS, WHATSAPP_LINK } from '../data/content';
import { LiveNotification } from '../types';
import { UserCheck, MapPin, X, ArrowRight } from 'lucide-react';

export const LiveJoinNotification: React.FC = () => {
  const [currentNotif, setCurrentNotif] = useState<LiveNotification | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index = 0;

    const showNext = () => {
      setCurrentNotif(LIVE_NOTIFICATIONS[index]);
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000);

      index = (index + 1) % LIVE_NOTIFICATIONS.length;
    };

    // First trigger after 4 seconds
    const initialTimer = setTimeout(showNext, 4000);

    // Repeat every 14 seconds
    const interval = setInterval(showNext, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible || !currentNotif) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-xs sm:max-w-sm w-full transition-all duration-500 animate-slide-up">
      <div className="relative p-3.5 sm:p-4 rounded-2xl bg-slate-900/95 border border-amber-500/40 text-white shadow-2xl backdrop-blur-md gold-glow">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-slate-400 hover:text-white p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>

          <div className="flex-1 pr-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-0.5">
              <span>NEW MINNA SLOT CLAIMED</span>
              <span className="text-slate-500">•</span>
              <span className="text-[10px] text-slate-400">{currentNotif.timeAgo}</span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-white">
              {currentNotif.name}{' '}
              <span className="font-normal text-slate-300">from</span>{' '}
              <span className="text-amber-300 font-medium">{currentNotif.area}</span>
            </p>

            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-800">
              <span className="text-emerald-400 font-medium">Slot #{currentNotif.slotNumber} Reserved</span>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-bold hover:underline flex items-center gap-0.5"
              >
                <span>Claim yours</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
