import React from 'react';
import { WHATSAPP_LINK, LAUNCH_DETAILS } from '../data/content';
import { MessageSquare, Sparkles, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

interface UrgencyCTAProps {
  claimedSlots: number;
}

export const UrgencyCTA: React.FC<UrgencyCTAProps> = ({ claimedSlots }) => {
  const remainingSlots = LAUNCH_DETAILS.totalSlots - claimedSlots;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0c] via-amber-950/20 to-[#0a0a0c] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 animate-pulse">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span>URGENT: BATCH #1 CLOSING SOON</span>
        </div>

        {/* Strong Urgency Text Headline */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Only Few Slots Left For <br />
          <span className="gold-text-gradient">Minna Residents</span>
        </h2>

        <p className="max-w-xl mx-auto text-slate-300 text-base sm:text-lg mb-8">
          Once all 50 slots are filled, the official Minna VIP WhatsApp group link will automatically expire to protect group quality. Don't let this opportunity pass you by.
        </p>

        {/* Slot Meter Visual */}
        <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 mb-8 gold-glow">
          <div className="flex justify-between items-center text-xs sm:text-sm font-bold mb-2">
            <span className="text-slate-300">Minna Registration Capacity</span>
            <span className="text-amber-400">{remainingSlots} Slots Remaining</span>
          </div>
          <div className="w-full bg-slate-950 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200 h-full rounded-full transition-all duration-1000"
              style={{ width: `${(claimedSlots / 50) * 100}%` }}
            ></div>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 text-center">
            🔥 {claimedSlots} of 50 Minna residents have already claimed their spot.
          </p>
        </div>

        {/* Big Shaking CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-shake-3s group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-extrabold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-2xl shadow-2xl shadow-amber-500/40 border-2 border-amber-300 transition-all hover:scale-[1.03] active:scale-[0.98] gold-glow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="tracking-wide">JOIN WHATSAPP GROUP NOW</span>
            <Sparkles className="w-5 h-5 text-black shrink-0 animate-pulse" />
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free VIP Group Admission • No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};
