import React, { useState } from 'react';
import { AD_SCRIPTS } from '../data/content';
import { AdScript } from '../types';
import { X, Copy, Check, Megaphone, Share2, Target } from 'lucide-react';

interface AdScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdScriptModal: React.FC<AdScriptModalProps> = ({ isOpen, onClose }) => {
  const [selectedScript, setSelectedScript] = useState<AdScript>(AD_SCRIPTS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (scriptText: string, id: string) => {
    navigator.clipboard.writeText(scriptText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-amber-500/40 text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Ad Scripts & Copy Vault
              </h3>
              <p className="text-xs text-slate-400">
                Ready-to-use Facebook, Instagram & WhatsApp ad copies for Minna campaign
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-6">
          {/* Platform Tabs */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800">
            {AD_SCRIPTS.map((script) => {
              const isActive = selectedScript.id === script.id;
              return (
                <button
                  key={script.id}
                  onClick={() => setSelectedScript(script)}
                  className={`flex-1 min-w-[120px] px-3 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {script.platform}
                </button>
              );
            })}
          </div>

          {/* Script Card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-bold text-amber-400 text-base">
                {selectedScript.title}
              </h4>
              <button
                onClick={() => handleCopy(selectedScript.script, selectedScript.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-extrabold transition-all active:scale-95 cursor-pointer"
              >
                {copiedId === selectedScript.id ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-black" />
                    <span>COPY SCRIPT</span>
                  </>
                )}
              </button>
            </div>

            {/* Target Audience Hint */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
              <Target className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-400">Targeting Strategy:</strong>{' '}
                {selectedScript.targetAudience}
              </div>
            </div>

            {/* Code Box */}
            <pre className="p-4 rounded-lg bg-slate-900 text-slate-200 text-xs sm:text-sm font-mono whitespace-pre-wrap leading-relaxed border border-slate-800 overflow-x-auto select-all">
              {selectedScript.script}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Click 'COPY SCRIPT' and paste directly into Facebook Ads Manager or WhatsApp</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
