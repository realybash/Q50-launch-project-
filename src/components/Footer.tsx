import React from 'react';
import { WHATSAPP_LINK } from '../data/content';
import { MessageSquare, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAdScripts: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdScripts }) => {
  return (
    <footer className="bg-[#060608] border-t border-amber-500/20 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-extrabold text-black text-base">
                Q50
              </div>
              <span className="font-heading font-black text-white text-lg tracking-tight">
                Q50 PROJECT MINNA
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Official launch of the Q50 financial opportunity initiative in Minna, Niger State. Empowering local visionaries through mentorship, strategy, and collective wealth creation.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Minna, Niger State, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Join WhatsApp VIP Group
                </a>
              </li>
              <li>
                <button onClick={onOpenAdScripts} className="text-left hover:text-amber-400 transition-colors cursor-pointer">
                  Campaign Ad Copy Scripts
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Verification */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-3">
              Verification
            </h4>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Minna Launch</span>
              </div>
              <p className="text-[11px] text-slate-400">
                100% Free Entry • First 50 Minna Residents Batch
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Q50 Project Minna Launch. All rights reserved.</p>
          <p className="text-[11px]">
            Designed for high conversion & local Niger State engagement.
          </p>
        </div>
      </div>
    </footer>
  );
};
