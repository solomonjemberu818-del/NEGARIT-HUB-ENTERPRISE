export interface FeaturedProject {
  id: string;
  badgeEn: string;
  badgeAm: string;
  title: string;
  descEn: string;
  descAm: string;
  tags: string[];
  liveUrl: string;
  caseStudyKey?: 'decision' | 'maize';
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'decision-engine',
    badgeEn: 'SELF-INITIATED PROJECT • LIVE DEMONSTRATION',
    badgeAm: 'የምርት ማሳያ • ቀጥታ ሲስተም',
    title: 'NEGARIT-HUB Executive Decision Engine',
    descEn:
      'Solves fragmented cost tracking and currency exposure for importers, manufacturers, and SMEs by simulating landed-cost sensitivity and unit margins in real time.',
    descAm:
      'ለአስመጪዎች፣ አምራቾች እና ድርጅቶች የተበታተነ የወጪ ክትትልን እና የውጭ ምንዛሬ ተጽዕኖን በቀጥታ በማስላት ትርፋማነትን ለመጠበቅ የተገነባ ሲስተም።',
    tags: ['React + TypeScript', 'FX Sensitivity Engine', 'Executive PDF/CSV Export'],
    liveUrl: 'https://negarit-decision-engine.netlify.app',
    caseStudyKey: 'decision',
  },
  {
    id: 'maize-platform',
    badgeEn: 'PRODUCT DEMONSTRATION • SAMPLE DATA',
    badgeAm: 'የምርት ማሳያ • ምሳሌያዊ ዳታ',
    title: 'Farmgate Maize Price Monitoring Platform',
    descEn:
      'Addresses regional price opacity and offline field collection gaps for agro-processors and grain traders comparing farmgate vs. central market prices.',
    descAm:
      'ለአግሮ-ፕሮሰሲንግ ፋብሪካዎችና የእህል ነጋዴዎች በገበሬው መንደር እና በማዕከላዊ ገበያ መካከል ያለውን የዋጋ ልዩነት ለመከታተል የተገነባ ሲስተም።',
    tags: ['Offline-First Storage', 'Corridor Spread Analytics', 'Mobile Field UI'],
    liveUrl: 'https://frabjous-bunny-736eb6.netlify.app',
    caseStudyKey: 'maize',
  },
  // ወደፊት አዲስ Web App ስትሰራ ከዚህ በታች ያለውን Copy አድርገህ ሊንኩን ብቻ ቀይር፡
  // {
  //   id: 'new-app-1',
  //   badgeEn: 'LIVE WEB APPLICATION',
  //   badgeAm: 'አዲስ የዌብ መተግበሪያ',
  //   title: 'Your New Web App Title',
  //   descEn: 'Short English description of the business problem it solves.',
  //   descAm: 'ሲስተሙ የሚፈታው የቢዝነስ ችግር አጭር መግለጫ።',
  //   tags: ['React', 'Supabase', 'Analytics'],
  //   liveUrl: 'https://your-new-link.netlify.app',
  // },
];