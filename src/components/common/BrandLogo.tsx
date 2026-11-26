export function BrandLogo({ showTagline = false }: { showTagline?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#0B1220] border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-sm">
        <img
          src="/logo.png"
          alt="NEGARIT-HUB Logo"
          className="w-full h-full object-cover scale-105"
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-extrabold text-lg tracking-tight text-slate-100 leading-none">
          NEGARIT<span className="text-emerald-400">-HUB</span>
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
            Digital Systems & Intelligence
          </span>
        )}
      </div>
    </div>
  );
}