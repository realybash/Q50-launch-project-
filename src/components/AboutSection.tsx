import React from 'react';
import { BENEFITS, WHATSAPP_LINK } from '../data/content';
import { TrendingUp, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-amber-400" />;
      case 'Users':
        return <Users className="w-7 h-7 text-amber-400" />;
      default:
        return <TrendingUp className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0d0d12] relative border-t border-b border-amber-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            WHAT IS THE Q50 PROJECT?
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4">
            Built For Financial Mastery, Exponential Growth & Vibrant Community
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            The Q50 Project is an elite financial empowerment and mentorship movement expanding to Minna, Niger State. Here are 3 core reasons why Minna residents are rushing to join the first batch:
          </p>
        </div>

        {/* 3 Core Bullet Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* Card Accent Top Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-heading text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Stat Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="text-amber-400 font-semibold">{item.stat}</span>
                <span className="text-slate-500 group-hover:text-amber-400 transition-colors">Minna Batch #1</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page Quick Action Prompt */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span>Ready to transform your financial trajectory in Minna?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
