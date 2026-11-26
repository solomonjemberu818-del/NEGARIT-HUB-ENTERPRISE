import { useEffect, useState } from 'react';

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2100);
    const removeTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0B1220] flex flex-col items-center justify-center px-4 transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="animate-logo-reveal flex flex-col items-center text-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#0B1220] border border-emerald-500/40 shadow-2xl shadow-emerald-950/50">
          <img
            src="/logo.png"
            alt="NEGARIT-HUB"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <h1 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100">
          NEGARIT<span className="text-emerald-400">-HUB</span>
        </h1>
        <p className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-400">
          Digital Systems & Business Intelligence
        </p>

        <div className="mt-6 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-400 rounded-full animate-progress-fill" />
        </div>
      </div>
    </div>
  );
}