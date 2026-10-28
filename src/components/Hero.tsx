import React from 'react';
import { WHATSAPP_LINK, LAUNCH_DETAILS, IMAGES } from '../data/content';
import { CountdownTimer } from './CountdownTimer';
import { MessageSquare, Sparkles, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onJoinClick?: () => void;
  claimedSlots: number;
}

export const Hero: React.FC<HeroProps> = ({ claimedSlots }) => {
  const remainingSlots = LAUNCH_DETAILS.totalSlots - claimedSlots;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 bg-[#0a0a0c]">
      {/* Background Graphic Image with Scrim */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={IMAGES.hero}
          alt="Q50 Minna Launch Background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]"></div>
      </div>

      {/* Decorative Gold Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Local Minna Urgency Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 gold-glow transition-all hover:scale-105">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span>MINNA, NIGER STATE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="text-white">VIP CHAPTER LAUNCH</span>
        </div>

        {/* Big Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-5">
          Q50 PROJECT IS <br className="hidden sm:inline" />
          <span className="gold-text-gradient drop-shadow-sm">FINALLY IN MINNA!</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
          The Financial Opportunity Everyone in Minna is Talking About — <span className="text-amber-400 font-semibold underline decoration-amber-500/50 underline-offset-4">Be Among The First 50 To Join.</span>
        </p>

        {/* 7-Day Countdown Timer */}
        <CountdownTimer targetDays={7} />

        {/* Main CTA Section - Shaking Button Every 3 Seconds */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-shake-3s group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-extrabold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-2xl shadow-2xl shadow-amber-500/40 border-2 border-amber-300 transition-all hover:scale-[1.03] active:scale-[0.98] gold-glow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="tracking-wide">JOIN WHATSAPP GROUP NOW</span>
            <Sparkles className="w-5 h-5 text-black shrink-0 animate-pulse" />
          </a>

          {/* Guarantee / Micro Copy */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400 mt-2">
            <span className="flex items-center gap-1.5 text-amber-300">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Only {remainingSlots} slots left for Minna residents</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Free Entry</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300">Instant Access</span>
          </div>
        </div>

        {/* Live Slot Claim Progress Bar */}
        <div className="mt-10 max-w-md mx-auto p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex justify-between items-center text-xs font-semibold mb-2">
            <span className="text-slate-300">Minna Slot Reservation Progress</span>
            <span className="text-amber-400 font-bold">{claimedSlots} / 50 Claimed ({Math.round((claimedSlots/50)*100)}%)</span>
          </div>
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-1000 shadow-sm"
              style={{ width: `${(claimedSlots / 50) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
