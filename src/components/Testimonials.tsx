import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, ShieldCheck, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0d0d12] relative border-t border-b border-amber-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            VERIFIED NIGER STATE MEMBERS
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Hear From Early Q50 Members in Minna
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Real stories and feedback from members who claimed early slots in Minna, Niger State.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/20 hover:border-amber-500/40 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/10 pointer-events-none" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Profile Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-heading font-bold text-sm text-white">
                      {item.name}
                    </h4>
                    <span title="Verified Member">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{item.role}</p>
                  <div className="flex items-center gap-1 text-[11px] text-amber-400 font-medium mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
