import { BarChart3, Globe, Cpu, LineChart, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Language } from '../../lib/i18n';

export function OurSolutions({ lang, onSelectDemo }: { lang: Language; onSelectDemo: (demo: 'decision' | 'maize') => void }) {
  const pillars = [
    {
      icon: BarChart3,
      titleEn: 'Business Intelligence',
      titleAm: 'የቢዝነስ ኢንተለጀንስ እና ዳታ ትንታኔ',
      descEn: 'Transform raw operational records into executive visibility with live KPI dashboards, cost-ledger tracking, and FX sensitivity simulators.',
      descAm: 'ጥሬ የድርጅት መረጃዎችን ለሥራ አስፈጻሚዎች ግልጽ ውሳኔ ወደሚሰጡ የKPI ዳሽቦርዶች፣ የወጪ መከታተያዎች እና የምንዛሬ ተጽዕኖ ማስሊያዎች ይቀይሩ።',
      benefitEn: 'Eliminates guesswork in pricing, margin protection, and resource allocation.',
      benefitAm: 'በዋጋ አወጣጥ እና በትርፍ ጥበቃ ላይ የሚፈጠር ግምታዊ ውሳኔን ያስወግዳል።',
      itemsEn: ['Executive business dashboards', 'KPI & margin monitoring', 'Interactive data visualization', 'Automated performance reporting', 'Decision-support simulators'],
      itemsAm: ['የሥራ አስፈጻሚዎች ዳሽቦርድ', 'የKPI እና ትርፍ ክትትል', 'የዳታ ግራፍ ትንታኔ', 'የአፈጻጸም ሪፖርት ማመንጫ', 'የውሳኔ አሰጣጥ ማስሊያዎች'],
      demoKey: 'decision' as const,
      demoLabelEn: 'Explore Decision Engine Demo',
      demoLabelAm: 'የውሳኔ ማስሊያ ሲስተሙን ይሞክሩ',
    },
    {
      icon: Globe,
      titleEn: 'Digital Platforms',
      titleAm: 'ዘመናዊ ዲጂታል መድረኮች',
      descEn: 'High-trust corporate web platforms, client portals, and custom web applications engineered for fast performance even on low-bandwidth connections.',
      descAm: 'በዝቅተኛ ኢንተርኔት ፍጥነት እንኳን በፍጥነት የሚሰሩ ድርጅታዊ ድረ-ገጾች፣ የደንበኛ መግቢያ ፖርታሎች እና ብጁ የዌብ መተግበሪያዎች።',
      benefitEn: 'Strengthens institutional credibility and converts visitors into qualified inquiries.',
      benefitAm: 'የድርጅቱን ተአማኒነት ያሳድጋል፤ ጎብኚዎችንም ወደ እውነተኛ ደንበኞች ይቀይራል።',
      itemsEn: ['Bilingual corporate websites', 'Secure client portals', 'Custom web applications', 'Customer-facing platforms', 'Internal operational systems'],
      itemsAm: ['ባለሁለት ቋንቋ ድርጅታዊ ድረ-ገጾች', 'ደህንነቱ የተጠበቀ የደንበኛ ፖርታል', 'ብጁ የዌብ ሲስተሞች', 'የደንበኞች መስተንግዶ መድረኮች', 'የውስጥ አሰራር ሲስተሞች'],
      demoKey: 'decision' as const,
      demoLabelEn: 'View Platform Architecture',
      demoLabelAm: 'የመድረኩን አሰራር ይመልከቱ',
    },
    {
      icon: Cpu,
      titleEn: 'Business Automation',
      titleAm: 'የንግድ ሥራ አውቶሜሽን',
      descEn: 'Replace repetitive manual paperwork and disconnected spreadsheets with structured digital workflows, approval pipelines, and automated reporting.',
      descAm: 'ተደጋጋሚ የወረቀት ሥራዎችን እና የተበታተኑ ፋይሎችን በተደራጀ ዲጂታል የሥራ ፍሰት፣ የማጽደቂያ ሂደት እና አውቶማቲክ ሪፖርት ይተኩ።',
      benefitEn: 'Reduces administrative delays and frees staff for high-value operational work.',
      benefitAm: 'የቢሮ መጓተትን ይቀንሳል፤ ሰራተኞችም ትርፋማ በሆኑ ሥራዎች ላይ እንዲያተኩሩ ያደርጋል።',
      itemsEn: ['Workflow & approval automation', 'Scheduled reporting automation', 'Business process optimization', 'Digital form & lead management', 'Role-based operational tracking'],
      itemsAm: ['የሥራ ሂደት እና ማጽደቂያ አውቶሜሽን', 'የሪፖርት አውቶሜሽን', 'የአሰራር ሂደት ማሻሻያ', 'ዲጂታል ቅጽ እና የደንበኛ መመዝገቢያ', 'በኃላፊነት ደረጃ የተከፋፈለ ክትትል'],
      demoKey: 'maize' as const,
      demoLabelEn: 'See Field Workflow System',
      demoLabelAm: 'የመስክ መረጃ ሲስተሙን ይመልከቱ',
    },
    {
      icon: LineChart,
      titleEn: 'Data & Market Intelligence',
      titleAm: 'የገበያ እና የዋጋ ኢንተለጀንስ',
      descEn: 'Regional commodity price trackers, farmgate-to-hub spread monitors, and structured field data collection tools for agro-processors and traders.',
      descAm: 'ለአግሮ-ፕሮሰሲንግ ፋብሪካዎችና ነጋዴዎች የክልል ምርት ዋጋ መከታተያ፣ የገበያ ልዩነት መለኪያ እና የመስክ መረጃ መሰብሰቢያ ሲስተሞች።',
      benefitEn: 'Improves procurement timing and protects gross margins across supply corridors.',
      benefitAm: 'የግዥ ጊዜን ያሻሽላል፤ በአቅርቦት ሰንሰለቱ ውስጥ ያለውን ትርፍ ይጠብቃል።',
      itemsEn: ['Regional market monitoring', 'Farmgate & hub price tracking', 'Offline-capable field data collection', 'Sector & commodity research', 'CSV/PDF analytical export tools'],
      itemsAm: ['የክልል ገበያ ክትትል', 'የገበሬ እና የማዕከል ዋጋ መከታተያ', 'ያለ ኢንተርኔት የሚሰራ መረጃ መሰብሰቢያ', 'የዘርፍ እና ምርት ጥናት', 'የCSV/PDF ሪፖርት ማውጫ'],
      demoKey: 'maize' as const,
      demoLabelEn: 'Explore Maize Market Demo',
      demoLabelAm: 'የበቆሎ ዋጋ መከታተያውን ይሞክሩ',
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
          {lang === 'en' ? 'SOLUTION ARCHITECTURE' : 'የመፍትሄ ዘርፎቻችን'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-4">
          {lang === 'en' ? 'Four Core Pillars Built Around Business Outcomes' : 'በተጨባጭ የንግድ ውጤት ላይ የተገነቡ 4 ዋና መፍትሄዎች'}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.titleEn} className="bg-[#162338] border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-7 flex flex-col justify-between transition">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{lang === 'en' ? p.titleEn : p.titleAm}</h3>
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">{lang === 'en' ? p.descEn : p.descAm}</p>

                <div className="mt-4 p-3 rounded-lg bg-[#0B1220] border border-slate-800 text-xs text-emerald-300">
                  <strong>{lang === 'en' ? 'Business Benefit: ' : 'የንግድ ጥቅም፡ '}</strong>
                  {lang === 'en' ? p.benefitEn : p.benefitAm}
                </div>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {(lang === 'en' ? p.itemsEn : p.itemsAm).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectDemo(p.demoKey)}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  {lang === 'en' ? p.demoLabelEn : p.demoLabelAm}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#start-project"
                  className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-100 transition"
                >
                  {lang === 'en' ? 'Request Custom Solution' : 'ይህንን መፍትሄ ይጠይቁ'}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}