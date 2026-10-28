import React from 'react';
import { LAUNCH_DETAILS, WHATSAPP_LINK, IMAGES } from '../data/content';
import { MapPin, Calendar, Ticket, CheckCircle, ArrowUpRight, Sparkles, Navigation } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            OFFICIAL EVENT SPECIFICATIONS
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Minna Launch Key Event Details
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Everything you need to know about participating in the Q50 Minna Launch.
          </p>
        </div>

        {/* 2-Column Grid: Cards & Venue Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-500/30 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    Event Location
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    Minna, Niger State
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Accessible for residents across Bosso, Tunga, Maitumbi, Mobil Area, Chanchaga, and FUTMinna environment.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-400">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">📍 Bosso Area</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">📍 Tunga Axis</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">📍 FUTMinna Road</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">📍 Chanchaga</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-500/30 shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    Launch Timeline
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    Launching This Week
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Live registration is active right now. Instant onboarding materials and launch schedule are released immediately inside the WhatsApp VIP group upon joining.
                  </p>
                </div>
              </div>
            </div>

            {/* Entry Fee Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <Ticket className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    Pass & Entry Status
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    100% FREE (Limited Seats)
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Zero hidden fees. Admission is completely free, but strictly restricted to the <strong className="text-amber-400">First 50 Registered Minna Residents</strong> to maintain high group quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Visual Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 h-full min-h-[300px] lg:min-h-[420px] group">
              <img
                src={IMAGES.venue}
                alt="Q50 Minna Seminar & Launch Venue"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500 text-black text-xs font-extrabold uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  HYBRID LAUNCH
                </div>
                <h4 className="font-heading font-bold text-xl text-white mb-1">
                  Minna VIP WhatsApp Lounge
                </h4>
                <p className="text-slate-300 text-xs">
                  Connect with mentors and Niger State leaders directly from your mobile device.
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  <span>Click to enter WhatsApp lounge</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
