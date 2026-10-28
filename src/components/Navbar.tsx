import React from 'react';
import { WHATSAPP_LINK, LAUNCH_DETAILS } from '../data/content';
import { MessageSquare, Copy, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAdScripts: () => void;
  claimedSlots: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdScripts, claimedSlots }) => {
  const remainingSlots = LAUNCH_DETAILS.totalSlots - claimedSlots;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0a0a0c]/85 border-b border-amber-500/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-extrabold text-black text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            Q50
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-white">
                Q50 PROJECT
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
                MINNA
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">Niger State VIP Chapter</p>
          </div>
        </a>

        {/* Live Slot Status Counter Pill */}
        <div className="hidden lg:flex items-center gap-2 bg-amber-950/40 border border-amber-500/30 rounded-full px-3.5 py-1.5 text-xs text-amber-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-semibold text-white">
            Only <span className="text-amber-400 font-bold">{remainingSlots} Slots Left</span> in Minna
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenAdScripts}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 transition-all cursor-pointer whitespace-nowrap shrink-0"
            title="View ready-to-use Ad Copy Scripts for Facebook & WhatsApp"
          >
            <Copy className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Ad Scripts</span>
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 px-4 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-black text-amber-500" />
            <span>JOIN GROUP</span>
          </a>
        </div>
      </div>
    </header>
  );
};
