import { Check, ArrowUpRight, Layers, Info } from 'lucide-react';
import { type Language, translations } from '../../lib/i18n';

export function ServiceCatalog({ lang }: { lang: Language }) {
  const t = translations[lang].packages;

  const services = [
    {
      titleEn: '1. Business Intelligence & Analytics',
      titleAm: '1. የቢዝነስ ኢንተለጀንስ እና ዳታ ትንታኔ',
      whatEn: 'Executive KPI dashboards, financial cost-ledgers, and FX sensitivity models.',
      whatAm: 'የሥራ አስፈጻሚዎች KPI ዳሽቦርዶች፣ የወጪ መዝገቦች እና የምንዛሬ ተጽዕኖ ማስሊያዎች።',
      whoEn: 'Importers, manufacturers, distributors, and management teams.',
      whoAm: 'አስመጪዎች፣ አምራቾች፣ አከፋፋዮች እና የማኔጅመንት ቡድኖች።',
      deliverablesEn: 'Live web dashboard, CSV/PDF export, role-based views.',
      deliverablesAm: 'ቀጥታ ዳሽቦርድ፣ የCSV/PDF ሪፖርት ማውጫ፣ በኃላፊነት የተከፋፈለ ዕይታ።',
    },
    {
      titleEn: '2. Custom Web Development',
      titleAm: '2. ብጁ ድረ-ገጽ እና የዌብ መተግበሪያ ግንባታ',
      whatEn: 'Bilingual corporate websites, customer portals, and scalable React/TypeScript web platforms.',
      whatAm: 'ባለሁለት ቋንቋ ድርጅታዊ ድረ-ገጾች፣ የደንበኛ ፖርታሎች እና ፈጣን የዌብ መተግበሪያዎች።',
      whoEn: 'SMEs, colleges, consultancies, and growing enterprises.',
      whoAm: 'አነስተኛና መካከለኛ ድርጅቶች፣ ኮሌጆች፣ አማካሪ ድርጅቶች እና ኩባንያዎች።',
      deliverablesEn: 'Responsive web app, SEO setup, CMS/database integration.',
      deliverablesAm: 'በስልክና ኮምፒውተር የሚሰራ መተግበሪያ፣ SEO እና ዳታቤዝ ግንኙነት።',
    },
    {
      titleEn: '3. Business Management Systems',
      titleAm: '3. የድርጅት አስተዳደር ሲስተሞች (CRM & Operations)',
      whatEn: 'Internal client tracking, inventory logs, project milestone trackers, and approval systems.',
      whatAm: 'የደንበኞች መከታተያ (CRM)፣ የክምችት መዝገብ፣ የፕሮጀክት መከታተያ እና የማጽደቂያ ሲስተሞች።',
      whoEn: 'Service firms, construction suppliers, and multi-branch businesses.',
      whoAm: 'የአገልግሎት ሰጪ ድርጅቶች፣ አቅራቢዎች እና ባለብዙ ቅርንጫፍ ቢዝነሶች።',
      deliverablesEn: 'PostgreSQL database, role-secured admin & staff workspaces.',
      deliverablesAm: 'ደህንነቱ የተጠበቀ ዳታቤዝ፣ የአስተዳዳሪ እና የሰራተኛ መስሪያ ገጾች።',
    },
    {
      titleEn: '4. Workflow Automation',
      titleAm: '4. የሥራ ሂደት አውቶሜሽን',
      whatEn: 'Automated lead capture, instant reporting pipelines, and structured digital intake forms.',
      whatAm: 'አውቶማቲክ የደንበኛ መመዝገቢያ፣ ፈጣን ሪፖርት ማመንጫ እና ዲጂታል ቅጾች።',
      whoEn: 'Teams losing hours to repetitive manual data entry and email/paper follow-ups.',
      whoAm: 'በተደጋጋሚ የመረጃ ምዝገባ እና በወረቀት ሥራ ብዙ ሰዓት የሚያባክኑ ቡድኖች።',
      deliverablesEn: 'Automated form-to-database pipelines, status notifications.',
      deliverablesAm: 'ከቅጽ በቀጥታ ወደ ዳታቤዝ የሚገባ ሲስተም እና የሁኔታ ማሳወቂያዎች።',
    },
    {
      titleEn: '5. Data Collection & Monitoring',
      titleAm: '5. የመስክ መረጃ መሰብሰቢያ እና ክትትል',
      whatEn: 'Offline-ready field price trackers, regional supply hub monitors, and survey systems.',
      whatAm: 'ያለ ኢንተርኔት የሚሰሩ የመስክ ዋጋ መመዝገቢያዎች እና የክልል አቅርቦት መከታተያዎች።',
      whoEn: 'Agro-processors, commodity buyers, NGOs, and research teams.',
      whoAm: 'አግሮ-ፕሮሰሲንግ ፋብሪካዎች፣ የምርት ገዢዎች፣ መንግስታዊ ያልሆኑ ድርጅቶች እና ተመራማሪዎች።',
      deliverablesEn: 'Mobile-first field app, regional filters, structured datasets.',
      deliverablesAm: 'በስልክ የሚሰራ የመስክ መተግበሪያ፣ የአካባቢ ማጣሪያ እና የተደራጀ ዳታ።',
    },
    {
      titleEn: '6. Digital Transformation Consulting',
      titleAm: '6. የዲጂታል ሽግግር እና ኢኮኖሚክስ ምክክር',
      whatEn: 'System architecture scoping, unit-economics modeling, and technology roadmap planning.',
      whatAm: 'የሲስተም ንድፍ ጥናት፣ የወጪና ትርፍ ሞዴሊንግ እና የቴክኖሎጂ እቅድ ዝግጅት።',
      whoEn: 'Founders and executives planning software investments without wasting capital.',
      whoAm: 'ካፒታል ሳያባክኑ ውጤታማ ሶፍትዌር ለማስገንባት የሚፈልጉ መስራቾችና ሥራ አስኪያጆች።',
      deliverablesEn: 'Technical blueprint, cost-benefit assessment, phased roadmap.',
      deliverablesAm: 'የቴክኒክ ንድፍ፣ የወጪና ጥቅም ትንታኔ እና በደረጃ የተከፋፈለ እቅድ።',
    },
  ];

  const packages = [
    {
      name: 'STARTER SOLUTION',
      price: '35,000 – 65,000 ETB',
      timeline: lang === 'en' ? '2 – 3 Weeks' : '2 – 3 ሳምንታት',
      descEn: 'Suitable for smaller projects with clearly defined requirements, corporate presence, and structured inquiry capture.',
      descAm: 'ግልጽ መስፈርት ላላቸው አነስተኛ ፕሮጀክቶች፣ ዘመናዊ ድረ-ገጽ እና የደንበኛ ጥያቄ መቀበያ ለሚፈልጉ ድርጅቶች ተስማሚ።',
      featuresEn: ['Bilingual (EN/AM) Responsive Website', 'Guided Lead Capture Form + Database', 'Low-Bandwidth Speed Optimization', 'Basic SEO & Analytics Setup'],
      featuresAm: ['ባለሁለት ቋንቋ (እንግሊዝኛ/አማርኛ) ድረ-ገጽ', 'የደንበኛ ጥያቄ መቀበያ ቅጽ እና ዳታቤዝ', 'በዝቅተኛ ኢንተርኔት ፍጥነት የሚሰራ', 'መሰረታዊ SEO ማስተካከያ'],
    },
    {
      name: 'BUSINESS GROWTH',
      price: '75,000 – 140,000 ETB',
      timeline: lang === 'en' ? '4 – 6 Weeks' : '4 – 6 ሳምንታት',
      featured: true,
      descEn: 'Suitable for businesses that need more advanced digital systems, executive BI dashboards, or operational tracking.',
      descAm: 'የላቁ ዲጂታል ሲስተሞች፣ የሥራ አስፈጻሚዎች ዳሽቦርድ ወይም የአሰራር መከታተያ ለሚፈልጉ ድርጅቶች ተስማሚ።',
      featuresEn: ['Custom BI Dashboard or Field Tracker', 'Authenticated Admin & Staff Roles', 'PostgreSQL Database + CSV/PDF Reports', '2 Weeks Post-Launch Technical Support'],
      featuresAm: ['ብጁ የBI ዳሽቦርድ ወይም የመስክ መከታተያ', 'በይለፍ ቃል የተጠበቀ የአስተዳዳሪ ገጽ', 'PostgreSQL ዳታቤዝ እና ሪፖርት ማውጫ', 'ከርክክብ በኋላ የ2 ሳምንት ቴክኒክ ድጋፍ'],
    },
    {
      name: 'CUSTOM ENTERPRISE',
      price: lang === 'en' ? 'Starting from 150,000 ETB' : 'ከ 150,000 ETB ጀምሮ',
      timeline: lang === 'en' ? '6 – 10 Weeks' : '6 – 10 ሳምንታት',
      descEn: 'Suitable for complex systems, multi-role workflows, custom applications, and larger operational requirements.',
      descAm: 'ውስብስብ ሲስተሞች፣ ባለብዙ ፈቃድ የሥራ ሂደቶች እና ሰፊ ድርጅታዊ መስፈርቶች ላላቸው ተቋማት ተስማሚ።',
      featuresEn: ['End-to-End Custom Web Platform', 'Multi-Role Access Control & Audit Logs', 'Custom Automation & API Integrations', 'Staff Training & Agreed SLA Support'],
      featuresAm: ['ሙሉ ለሙሉ ብጁ የድርጅት ሲስተም', 'ባለብዙ ደረጃ የፈቃድ ቁጥጥር', 'አውቶሜሽን እና የAPI ግንኙነቶች', 'የሰራተኛ ስልጠና እና የSLA ድጋፍ'],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[#111C2E] border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* 6 Service Categories */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            {lang === 'en' ? 'SERVICE CATALOG' : 'የአገልግሎት ዝርዝር'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-4">
            {lang === 'en' ? 'Six Specialized Digital & Analytical Capabilities' : '6 ልዩ የዲጂታል እና የትንታኔ አገልግሎቶች'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s) => (
            <div key={s.titleEn} className="bg-[#162338] border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
                  <Layers className="w-4 h-4" />
                  <span>NEGARIT-HUB SERVICE</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100">{lang === 'en' ? s.titleEn : s.titleAm}</h3>
                <p className="text-sm text-slate-300 mt-2">{lang === 'en' ? s.whatEn : s.whatAm}</p>
                <div className="mt-4 space-y-2 text-xs text-slate-400 border-t border-slate-800 pt-3">
                  <p><strong className="text-slate-200">{lang === 'en' ? 'Who needs it: ' : 'ለማን ይጠቅማል፡ '}</strong>{lang === 'en' ? s.whoEn : s.whoAm}</p>
                  <p><strong className="text-slate-200">{lang === 'en' ? 'Deliverables: ' : 'የሚረከቡት ውጤት፡ '}</strong>{lang === 'en' ? s.deliverablesEn : s.deliverablesAm}</p>
                </div>
              </div>
              <a
                href="#start-project"
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                {lang === 'en' ? 'Request This Service' : 'ይህንን አገልግሎት ይጠይቁ'}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* 3 Engagement Packages */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            {t.badge}
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mt-4">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-7 flex flex-col justify-between border ${
                pkg.featured
                  ? 'bg-[#0B1220] border-emerald-500 shadow-lg shadow-emerald-950/30'
                  : 'bg-[#162338] border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-3">
                  <span className="text-emerald-400">{pkg.timeline}</span>
                  {pkg.featured && (
                    <span className="bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full font-bold">
                      {lang === 'en' ? 'Recommended' : 'ተመራጭ'}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-extrabold tracking-wide text-slate-100">{pkg.name}</h3>
                <p className="text-2xl font-extrabold text-emerald-400 mt-3">{pkg.price}</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {lang === 'en' ? pkg.descEn : pkg.descAm}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
                  {(lang === 'en' ? pkg.featuresEn : pkg.featuresAm).map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#start-project"
                className={`mt-8 w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-lg font-bold text-sm transition ${
                  pkg.featured
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                }`}
              >
                {lang === 'en' ? 'Discuss Your Project' : 'ፕሮጀክትዎን ይጀምሩ'}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-[#0B1220] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.disclaimer}</span>
          </div>
          <a href="#start-project" className="font-semibold text-emerald-400 hover:text-emerald-300 shrink-0">
            {t.consultCta} →
          </a>
        </div>
      </div>
    </section>
  );
}