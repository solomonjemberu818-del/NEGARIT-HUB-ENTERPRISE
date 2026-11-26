import { AlertCircle, CheckCircle2, BookOpen, Compass, ArrowUpRight } from 'lucide-react';
import { type Language, translations } from '../../lib/i18n';
import { BRAND } from '../../config/brand';

export function EnterpriseSections({ lang }: { lang: Language }) {
  const tProb = translations[lang].problems;
  const tProc = translations[lang].process;
  const tWhy = translations[lang].whyUs;

  const insights = [
    {
      tag: 'MACROECONOMICS & FX',
      titleEn: 'Managing Import & Input Cost Sensitivity Under Ethiopian FX Reform',
      titleAm: 'በኢትዮጵያ የውጭ ምንዛሬ ማሻሻያ ወቅት የግብዓት ወጪን እና ትርፍን መጠበቅ',
      summaryEn: 'How SMEs and agro-processors can replace static pricing sheets with dynamic unit-cost models.',
      summaryAm: 'አነስተኛና መካከለኛ ድርጅቶች እንዲሁም አግሮ-ፕሮሰሰሮች የተበታተነ የዋጋ ስሌትን በተለዋዋጭ የወጪ ሞዴል እንዴት መተካት እንደሚችሉ።',
    },
    {
      tag: 'AGRO-INDUSTRIAL DATA',
      titleEn: 'Closing the Farmgate-to-Hub Information Gap in Regional Supply Chains',
      titleAm: 'በክልል የግብርና አቅርቦት ሰንሰለት ውስጥ ያለውን የዋጋ መረጃ ክፍተት መሙላት',
      summaryEn: 'Why offline-capable price monitoring improves procurement timing and protects gross margins.',
      summaryAm: 'ያለ ኢንተርኔት የሚሰራ የገበያ ዋጋ ክትትል የግዥ ጊዜን እንዴት እንደሚያሻሽል እና ትርፍን እንደሚጠብቅ።',
    },
    {
      tag: 'DIGITAL OPERATIONS',
      titleEn: 'From Paper Ledgers to Structured Digital Systems Without Bloated IT Budgets',
      titleAm: 'ያለ ከፍተኛ የIT ወጪ ከወረቀት መዝገብ ወደ ዘመናዊ ዲጂታል ሲስተም መሸጋገር',
      summaryEn: 'A practical roadmap for Ethiopian enterprises adopting cloud databases and automated reporting.',
      summaryAm: 'የኢትዮጵያ ድርጅቶች ዘመናዊ ዳታቤዝ እና አውቶማቲክ ሪፖርትን በዝቅተኛ ወጪ የሚተገብሩበት ተግባራዊ መንገድ።',
    },
  ];

  return (
    <>
      <section className="py-20 px-4 bg-[#111C2E] border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              {tProb.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-4">{tProb.title}</h2>
            <p className="text-slate-300 mt-3">{tProb.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tProb.items.map((item) => (
              <div key={item.title} className="bg-[#162338] border border-slate-800 rounded-xl p-5">
                <AlertCircle className="w-5 h-5 text-emerald-400 mb-3" />
                <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            {tProc.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-4">{tProc.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tProc.steps.map((step) => (
            <div key={step.num} className="bg-[#162338] border border-slate-800 rounded-2xl p-6">
              <span className="inline-block text-xs font-extrabold px-2.5 py-1 rounded bg-emerald-500 text-slate-950">
                {step.num}
              </span>
              <h3 className="text-lg font-extrabold text-slate-100 mt-4">{step.name}</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-[#111C2E] border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              {tWhy.badge}
            </span>
            <h2 className="text-3xl font-bold text-slate-100 mt-4">{tWhy.title}</h2>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              {lang === 'en'
                ? 'NEGARIT-HUB is an Ethiopian digital solutions and business intelligence studio founded by Solomon Jemberu. We combine economic analysis with modern software engineering to build practical systems that help businesses operate smarter without bloated enterprise overhead.'
                : 'ነጋሪት-ሃብ በሰለሞን ጀምበሩ የተመሰረተ የኢትዮጵያ ዲጂታል መፍትሄዎች እና የቢዝነስ ኢንተለጀንስ ስቱዲዮ ነው። የኢኮኖሚክስ ትንታኔን ከዘመናዊ የሶፍትዌር ምህንድስና ጋር በማጣመር ድርጅቶች ያለ አላስፈላጊ ወጪ በብልሃት እንዲሰሩ የሚያግዙ ተግባራዊ ሲስተሞችን እንገነባለን።'}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-[#0B1220] border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
              <Compass className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                {lang === 'en'
                  ? 'Scalable Vision: Built today as a focused digital solutions studio, architected to evolve into a curated Ethiopian technology talent network.'
                  : 'የወደፊት ራዕይ፡ ዛሬ በተግባራዊ ዲጂታል መፍትሄዎች ላይ ያተኮረ ስቱዲዮ ሆኖ የተገነባ፣ ነገ ደግሞ ወደ ተመረጡ የኢትዮጵያ ባለሙያዎች መድረክ (Talent Network) እንዲያድግ ታስቦ የተዋቀረ።'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
            {tWhy.points.map((pt) => (
              <div key={pt} className="bg-[#162338] border border-slate-800 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              {lang === 'en' ? 'ECONOMIC & DIGITAL INSIGHTS' : 'የኢኮኖሚ እና ዲጂታል ትንታኔዎች'}
            </span>
            <h2 className="text-3xl font-bold text-slate-100 mt-4">
              {lang === 'en' ? 'Research Briefs & Market Perspectives' : 'የገበያ ጥናቶች እና የቢዝነስ ዕይታዎች'}
            </h2>
          </div>
          <a
            href={BRAND.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
          >
            {lang === 'en' ? 'Follow NEGARIT-HUB on LinkedIn' : 'ነጋሪት-ሃብን በLinkedIn ይከተሉ'}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((art) => (
            <div key={art.titleEn} className="bg-[#162338] border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> {art.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-100 mt-3">
                  {lang === 'en' ? art.titleEn : art.titleAm}
                </h3>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {lang === 'en' ? art.summaryEn : art.summaryAm}
                </p>
              </div>
              <a
                href="#start-project"
                className="mt-6 text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
              >
                {lang === 'en' ? 'Discuss This Topic for Your Firm' : 'በዚህ ርዕስ ላይ ከእኛ ጋር ይወያዩ'} →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}