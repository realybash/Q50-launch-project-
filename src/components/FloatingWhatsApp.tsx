import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../data/content';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="relative p-3.5 rounded-2xl bg-slate-900 border border-amber-500/40 text-white shadow-2xl max-w-[220px] text-xs animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Minna Group Live
          </div>
          <p className="text-slate-300">
            Click here to join the Q50 Minna VIP WhatsApp group!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-glow group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/50 border-2 border-emerald-300 transition-all hover:scale-110 active:scale-95"
        title="Join Q50 Minna WhatsApp Group"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-emerald-500" />
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-black font-extrabold text-[10px] shadow-md border border-black">
          1
        </span>
      </a>
    </div>
  );
};
