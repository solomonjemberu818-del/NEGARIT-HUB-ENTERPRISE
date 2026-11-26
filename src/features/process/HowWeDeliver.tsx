import { FileSearch, Compass, Code2, ShieldCheck } from 'lucide-react';
import type { Language } from '../../lib/i18n';

export function HowWeDeliver({ lang }: { lang: Language }) {
  const steps = [
    {
      num: '01',
      icon: FileSearch,
      titleEn: 'Economic & Technical Discovery',
      titleAm: 'የኢኮኖሚ እና ቴክኒክ ፍላጎት ጥናት',
      descEn: 'We analyze your operational bottleneck, cost structure, and ROI target before writing a single line of code.',
      descAm: 'አንድም መስመር ኮድ ከመጻፋችን በፊት የድርጅትዎን የአሰራር ችግር፣ የወጪ መዋቅር እና የሚገኘውን ትርፍ እንተነትናለን።',
    },
    {
      num: '02',
      icon: Compass,
      titleEn: '24-Hour Architecture & Fixed Proposal',
      titleAm: 'በ24 ሰዓት ውስጥ ዝርዝር ንድፍ እና የዋጋ እቅድ',
      descEn: 'You receive a clear scope, milestone schedule, and transparent ETB pricing with zero hidden fees.',
      descAm: 'ግልጽ የሥራ ድርሻ፣ የጊዜ ሰሌዳ እና ምንም ድብቅ ክፍያ የሌለበት የብር ዋጋ ዝርዝር ይደርስዎታል።',
    },
    {
      num: '03',
      icon: Code2,
      titleEn: 'Milestone-Based Agile Engineering',
      titleAm: 'በየደረጃው የሚታይ ፈጣን ግንባታ',
      descEn: 'Track live staging previews every week and verify each deliverable against your business needs.',
      descAm: 'በየሳምንቱ የሚሰራውን ሲስተም በቀጥታ እየሞከሩ እና እያረጋገጡ ከእኛ ጋር አብረው ይጓዛሉ።',
    },
    {
      num: '04',
      icon: ShieldCheck,
      titleEn: 'Deployment, Training & SLA Support',
      titleAm: 'ርክክብ፣ የሰራተኛ ስልጠና እና ቀጣይ ድጋፍ',
      descEn: 'Full handover with staff training, bilingual documentation, and dedicated technical maintenance.',
      descAm: 'ለሰራተኞችዎ ሙሉ ስልጠና በመስጠት እና የቴክኒክ ድጋፍ በማድረግ ሲስተሙን በአስተማማኝ ሁኔታ እናስረክባለን።',
    },
  ];

  return (
    <section id="process" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-forest-700 bg-forest-900/10 px-3 py-1 rounded-full">
          {lang === 'en' ? 'Delivery Governance' : 'የአሰራር እና የጥራት ዋስትና'}
        </span>
        <h2 className="text-3xl font-bold text-forest-950 mt-3">
          {lang === 'en' ? 'How We Deliver Predictable Results' : 'ውጤታማ ሲስተሞችን የምንገነባበት ባለ 4-ደረጃ ሂደት'}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.num} className="bg-white border border-slate-200 rounded-xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-gold-500 bg-forest-950 px-2.5 py-1 rounded">
                  STEP {s.num}
                </span>
                <Icon className="w-5 h-5 text-forest-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'en' ? s.titleEn : s.titleAm}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {lang === 'en' ? s.descEn : s.descAm}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}