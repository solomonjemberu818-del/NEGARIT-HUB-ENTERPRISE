import { useState } from 'react';
import { BarChart3, Sprout, ExternalLink, FileText, AlertTriangle, TrendingUp, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../config/projects';
import type { Language } from '../../lib/i18n';

export function LiveDemoShowcase({
  lang,
  activeTab,
  setActiveTab,
  onOpenCaseStudy,
}: {
  lang: Language;
  activeTab: 'decision' | 'maize';
  setActiveTab: (t: 'decision' | 'maize') => void;
  onOpenCaseStudy: (id: 'decision' | 'maize') => void;
}) {
  const [fxRate, setFxRate] = useState(128);
  const [importShare, setImportShare] = useState(40);
  const baseCost = 100000;
  const simulatedCost = Math.round(baseCost * (1 + (importShare / 100) * ((fxRate - 120) / 120)));

  const [selectedCorridor, setSelectedCorridor] = useState<'Bure-Addis' | 'Nekemte-Addis' | 'Shashemene-Adama'>('Bure-Addis');
  const corridorData = {
    'Bure-Addis': { farmgate: 3450, hub: 4120, transport: 280 },
    'Nekemte-Addis': { farmgate: 3380, hub: 4120, transport: 340 },
    'Shashemene-Adama': { farmgate: 3520, hub: 4050, transport: 210 },
  }[selectedCorridor];
  const netSpread = corridorData.hub - corridorData.farmgate - corridorData.transport;

  const extraProjects = FEATURED_PROJECTS.filter((p) => !p.caseStudyKey);

  return (
    <section id="our-work" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            {lang === 'en' ? 'FEATURED WORKING SYSTEMS' : 'የተገነቡ የቀጥታ ሲስተሞች'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-4">
            {lang === 'en' ? 'Inspect Real Systems Before You Invest' : 'ኢንቨስት ከማድረግዎ በፊት የሚሰሩ ሲስተሞችን ይሞክሩ'}
          </h2>
        </div>

        <div className="inline-flex rounded-xl bg-[#162338] p-1 border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('decision')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'decision' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            {lang === 'en' ? 'Executive Decision Engine' : 'የሥራ አስፈጻሚዎች ውሳኔ ማስሊያ'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('maize')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'maize' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sprout className="w-4 h-4" />
            {lang === 'en' ? 'Farmgate Maize Platform' : 'የበቆሎ ዋጋ መከታተያ'}
          </button>
        </div>
      </div>

      <div className="mb-6 px-4 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>
          {lang === 'en'
            ? 'PRODUCT DEMONSTRATION • Interactive preview uses illustrative sample data for evaluation only.'
            : 'የምርት ማሳያ (PRODUCT DEMONSTRATION) • ከታች ያሉት ቁጥሮች ለሙከራ የተዘጋጁ ምሳሌያዊ ዳታዎች (Sample Data) ናቸው።'}
        </span>
      </div>

      {activeTab === 'decision' ? (
        <div className="bg-[#162338] border border-slate-800 rounded-2xl p-6 sm:p-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {lang === 'en' ? FEATURED_PROJECTS[0].badgeEn : FEATURED_PROJECTS[0].badgeAm}
              </span>
              <h3 className="text-2xl font-bold text-slate-100 mt-4">{FEATURED_PROJECTS[0].title}</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {lang === 'en' ? FEATURED_PROJECTS[0].descEn : FEATURED_PROJECTS[0].descAm}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">
                {FEATURED_PROJECTS[0].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-[#0B1220] border border-slate-800">{tag}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FEATURED_PROJECTS[0].liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs transition"
              >
                {lang === 'en' ? 'Launch Live Demo' : 'ቀጥታ ሲስተሙን ክፈት'}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onOpenCaseStudy('decision')}
                className="inline-flex items-center gap-2 bg-[#0B1220] hover:bg-slate-900 text-slate-200 border border-slate-700 font-semibold px-4 py-2.5 rounded-lg text-xs transition"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'en' ? 'Read Architecture & Case Study' : 'ዝርዝር ንድፉን አንብብ'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0B1220] border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                {lang === 'en' ? 'Interactive FX & Cost Sensitivity Simulator (Sample)' : 'የምንዛሬ እና የወጪ ተጽዕኖ መሞከሪያ (ምሳሌ)'}
              </span>
              <span className="text-[11px] text-slate-400">Sample Mode</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{lang === 'en' ? 'Simulated Exchange Rate (ETB/USD)' : 'የምንዛሬ ተመን (ብር/ዶላር)'}</span>
                  <span className="font-bold text-emerald-400">{fxRate} ETB</span>
                </div>
                <input type="range" min={115} max={155} value={fxRate} onChange={(e) => setFxRate(Number(e.target.value))} className="w-full accent-emerald-500" />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{lang === 'en' ? 'Imported Input Share (%)' : 'ከውጭ የሚገባ ግብዓት ድርሻ (%)'}</span>
                  <span className="font-bold text-emerald-400">{importShare}%</span>
                </div>
                <input type="range" min={10} max={90} value={importShare} onChange={(e) => setImportShare(Number(e.target.value))} className="w-full accent-emerald-500" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-lg bg-[#162338] border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">{lang === 'en' ? 'Baseline Batch Cost' : 'መነሻ የምርት ወጪ'}</span>
                  <span className="text-lg font-bold text-slate-100 mt-1 block">ETB {baseCost.toLocaleString()}</span>
                </div>
                <div className="p-4 rounded-lg bg-[#162338] border border-emerald-500/30">
                  <span className="text-[11px] text-slate-400 block">{lang === 'en' ? 'Adjusted Unit Batch Cost' : 'የተስተካከለ አዲስ ወጪ'}</span>
                  <span className="text-lg font-bold text-emerald-400 mt-1 block">ETB {simulatedCost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#162338] border border-slate-800 rounded-2xl p-6 sm:p-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {lang === 'en' ? FEATURED_PROJECTS[1].badgeEn : FEATURED_PROJECTS[1].badgeAm}
              </span>
              <h3 className="text-2xl font-bold text-slate-100 mt-4">{FEATURED_PROJECTS[1].title}</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {lang === 'en' ? FEATURED_PROJECTS[1].descEn : FEATURED_PROJECTS[1].descAm}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">
                {FEATURED_PROJECTS[1].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-[#0B1220] border border-slate-800">{tag}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FEATURED_PROJECTS[1].liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs transition"
              >
                {lang === 'en' ? 'Launch Live Demo' : 'ቀጥታ ሲስተሙን ክፈት'}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onOpenCaseStudy('maize')}
                className="inline-flex items-center gap-2 bg-[#0B1220] hover:bg-slate-900 text-slate-200 border border-slate-700 font-semibold px-4 py-2.5 rounded-lg text-xs transition"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'en' ? 'Read Architecture & Case Study' : 'ዝርዝር ንድፉን አንብብ'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0B1220] border border-slate-800 rounded-xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-bold text-slate-200">
                {lang === 'en' ? 'Regional Corridor Price Comparison (Sample ETB/Quintal)' : 'የክልል ገበያ ዋጋ ንጽጽር (ምሳሌ ብር/ኩንታል)'}
              </span>
              <div className="flex gap-1.5">
                {(['Bure-Addis', 'Nekemte-Addis', 'Shashemene-Adama'] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedCorridor(c)}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold ${
                      selectedCorridor === c ? 'bg-emerald-500 text-slate-950' : 'bg-[#162338] text-slate-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[#162338] border border-slate-800">
                <span className="text-[11px] text-slate-400 block">{lang === 'en' ? 'Farmgate Price' : 'የገበሬ መሸጫ ዋጋ'}</span>
                <span className="text-lg font-bold text-slate-100 mt-1 block">{corridorData.farmgate.toLocaleString()} ETB</span>
              </div>
              <div className="p-4 rounded-lg bg-[#162338] border border-slate-800">
                <span className="text-[11px] text-slate-400 block">{lang === 'en' ? 'Destination Hub' : 'የማዕከል ገበያ ዋጋ'}</span>
                <span className="text-lg font-bold text-slate-100 mt-1 block">{corridorData.hub.toLocaleString()} ETB</span>
              </div>
              <div className="p-4 rounded-lg bg-[#162338] border border-emerald-500/30">
                <span className="text-[11px] text-slate-400 block">{lang === 'en' ? 'Net Margin After Transport' : 'ከትራንስፖርት በኋላ ትርፍ'}</span>
                <span className="text-lg font-bold text-emerald-400 mt-1 block">+{netSpread.toLocaleString()} ETB</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Web Apps added in src/config/projects.ts */}
      {extraProjects.length > 0 && (
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {extraProjects.map((proj) => (
            <div key={proj.id} className="bg-[#162338] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> {lang === 'en' ? proj.badgeEn : proj.badgeAm}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-3">{proj.title}</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{lang === 'en' ? proj.descEn : proj.descAm}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                  {proj.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#0B1220] border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs transition"
                >
                  {lang === 'en' ? 'Launch Live Web App' : 'መተግበሪያውን ክፈት'}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}