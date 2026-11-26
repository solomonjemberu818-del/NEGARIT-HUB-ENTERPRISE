import { ArrowLeft, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BRAND } from '../../config/brand';
import type { Language } from '../../lib/i18n';

export function ProjectCaseStudy({
  projectId,
  lang,
  onBack,
}: {
  projectId: 'decision' | 'maize';
  lang: Language;
  onBack: () => void;
}) {
  const isDecision = projectId === 'decision';

  const data = isDecision
    ? {
        label: 'SELF-INITIATED PROJECT • PRODUCT DEMONSTRATION',
        title: 'NEGARIT-HUB Executive Decision Engine',
        demoUrl: BRAND.liveDemos.decisionEngine,
        overviewEn: 'A browser-based financial and operational decision-support platform built for Ethiopian SMEs, importers, and agro-industrial managers.',
        overviewAm: 'ለኢትዮጵያ ድርጅቶች፣ አስመጪዎች እና አግሮ-ኢንዱስትሪ አስተዳዳሪዎች የተገነባ የፋይናንስ እና የአሰራር ውሳኔ መስጫ ሲስተም።',
        problemEn: 'Many growing firms rely on static spreadsheets that break when exchange rates shift or input costs fluctuate, delaying pricing and procurement decisions.',
        problemAm: 'ብዙ ድርጅቶች የውጭ ምንዛሬ ሲቀየር ወይም የግብዓት ዋጋ ሲዋዥቅ ወዲያውኑ የማይዘምኑ የወረቀት እና የኤክሴል ሰንጠረዦችን ስለሚጠቀሙ ውሳኔያቸው ይዘገያል።',
        architectureEn: 'Client-side reactive calculation engine built with React, TypeScript, and modular state modeling for instant zero-latency sensitivity analysis and CSV/PDF reporting.',
        architectureAm: 'ያለምንም መዘግየት በፍጥነት ስሌቶችን የሚሰራ በReact እና TypeScript የተገነባ ሲስተም ከCSV/PDF ሪፖርት ማውጫ ጋር።',
        featuresEn: ['Unit cost & margin ledger', 'Real-time FX sensitivity simulator', 'Scenario comparison (Baseline vs. Stress)', 'Structured executive brief export'],
        featuresAm: ['የነጠላ ምርት ወጪ እና ትርፍ መዝገብ', 'የውጭ ምንዛሬ ተጽዕኖ ማስሊያ', 'የተለያዩ የገበያ ሁኔታዎች ንጽጽር', 'ለሥራ አስፈጻሚዎች የተዘጋጀ ሪፖርት ማውጫ'],
        lessonsEn: 'Decision tools must remain fast, readable on mobile screens, and transparent in their formulas so executives trust the outputs.',
        lessonsAm: 'የውሳኔ መስጫ ሲስተሞች ፈጣን፣ በስልክ የሚነበቡ እና ስሌታቸው ግልጽ ሲሆን የሥራ አስፈጻሚዎች እምነት ይጨምራል።',
      }
    : {
        label: 'SELF-INITIATED PROJECT • SAMPLE DATA DEMONSTRATION',
        title: 'Farmgate Maize Price Monitoring Platform',
        demoUrl: BRAND.liveDemos.maizePlatform,
        overviewEn: 'An agricultural market intelligence and field data collection application designed to track maize price spreads between rural farmgates and central wholesale hubs.',
        overviewAm: 'በገጠር የገበሬ መሸጫ ዋጋ እና በማዕከላዊ ገበያ መካከል ያለውን የበቆሎ ዋጋ ልዩነት ለመከታተል የተገነባ የገበያ መረጃ ሲስተም።',
        problemEn: 'Grain buyers and processors face fragmented price reporting across regions and unreliable internet connectivity during field data collection.',
        problemAm: 'የእህል ገዢዎች እና ፋብሪካዎች በየክልሉ ያለውን ወቅታዊ ዋጋ በተበታተነ መንገድ ስለሚያገኙ እና በመስክ ላይ ኢንተርኔት ስለሚቆራረጥ ትክክለኛ መረጃ ለማግኘት ይቸገራሉ።',
        architectureEn: 'Offline-first mobile web architecture with local queue caching, corridor spread analytics, and structured export views.',
        architectureAm: 'ኢንተርኔት ባይኖርም መረጃን በስልክ ላይ መዝግቦ የሚይዝ እና ኢንተርኔት ሲገኝ የሚያቀናጅ ዘመናዊ የዌብ አርክቴክቸር።',
        featuresEn: ['Corridor price comparison (Farmgate vs. Hub)', 'Transport-adjusted net margin calculator', 'Offline field observation entry', 'Historical trend & volatility view'],
        featuresAm: ['የገበሬ እና የማዕከል ዋጋ ንጽጽር', 'የትራንስፖርት ወጪን ያገናዘበ የተጣራ ትርፍ ስሌት', 'ያለ ኢንተርኔት የመስክ መረጃ መመዝገቢያ', 'የዋጋ ለውጥ ታሪክ መመልከቻ'],
        lessonsEn: 'Field tools in Ethiopia require lightweight bundles and offline resilience rather than heavy cloud-dependent interfaces.',
        lessonsAm: 'በኢትዮጵያ የመስክ ሥራ ላይ የሚውሉ ሲስተሞች ቀላል ክብደት ያላቸው እና ያለ ኢንተርኔት መስራት የሚችሉ መሆን አለባቸው።',
      };

  return (
    <section className="max-w-4xl mx-auto py-14 px-4">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'en' ? 'Back to All Work' : 'ወደ ሁሉም ሥራዎች ተመለስ'}
      </button>

      <div className="bg-[#162338] border border-slate-800 rounded-2xl p-8">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {data.label}
        </span>
        <h1 className="text-3xl font-bold text-slate-100 mt-4">{data.title}</h1>
        <p className="text-slate-300 mt-3 leading-relaxed">{lang === 'en' ? data.overviewEn : data.overviewAm}</p>

        <div className="mt-6 p-3.5 rounded-lg bg-[#0B1220] border border-amber-500/30 text-xs text-amber-300 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>
            {lang === 'en'
              ? 'Transparency Notice: This is an internal NEGARIT-HUB demonstration built to validate technical architecture. No external client ownership is claimed.'
              : 'የግልጽነት ማሳወቂያ፡ ይህ ሲስተም የነጋሪት-ሃብን የቴክኒክ አቅም ለማሳየት የተገነባ ራሱን የቻለ የሙከራ ፕሮጀክት ነው።'}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#0B1220] p-5 rounded-xl border border-slate-800">
            <h3 className="text-sm font-bold text-emerald-400 uppercase">{lang === 'en' ? 'Business Problem' : 'የንግድ ችግር'}</h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">{lang === 'en' ? data.problemEn : data.problemAm}</p>
          </div>
          <div className="bg-[#0B1220] p-5 rounded-xl border border-slate-800">
            <h3 className="text-sm font-bold text-emerald-400 uppercase">{lang === 'en' ? 'System Architecture' : 'የሲስተሙ አርክቴክቸር'}</h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">{lang === 'en' ? data.architectureEn : data.architectureAm}</p>
          </div>
        </div>

        <div className="mt-6 bg-[#0B1220] p-5 rounded-xl border border-slate-800">
          <h3 className="text-sm font-bold text-emerald-400 uppercase mb-3">{lang === 'en' ? 'Key Capabilities' : 'ዋና ዋና ችሎታዎች'}</h3>
          <ul className="grid sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
            {(lang === 'en' ? data.featuresEn : data.featuresAm).map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 bg-[#0B1220] p-5 rounded-xl border border-slate-800">
          <h3 className="text-sm font-bold text-emerald-400 uppercase">{lang === 'en' ? 'Engineering & Strategy Lesson' : 'የምህንድስና እና ስትራቴጂ ትምህርት'}</h3>
          <p className="text-sm text-slate-300 mt-2">{lang === 'en' ? data.lessonsEn : data.lessonsAm}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={data.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-sm"
          >
            {lang === 'en' ? 'Open Interactive Demo' : 'ቀጥታ ማሳያውን ክፈት'}
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#start-project"
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold px-5 py-3 rounded-lg text-sm"
          >
            {lang === 'en' ? 'Build a Similar System for Your Business' : 'ለድርጅትዎ ተመሳሳይ ሲስተም ያስገንቡ'}
          </a>
        </div>
      </div>
    </section>
  );
}