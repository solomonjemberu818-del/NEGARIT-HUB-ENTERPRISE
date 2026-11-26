export type Language = 'en' | 'am';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      services: 'Services',
      ourWork: 'Our Work',
      insights: 'Insights',
      about: 'About',
      contact: 'Contact',
      portal: 'Client Portal',
      admin: 'Admin CRM',
      startProject: 'START A PROJECT',
      exploreSolutions: 'EXPLORE OUR SOLUTIONS',
    },
    hero: {
      badge: 'ETHIOPIAN DIGITAL SOLUTIONS & BUSINESS INTELLIGENCE STUDIO',
      headline: 'YOUR BUSINESS HAS A CHALLENGE. WE BUILD THE SOLUTION.',
      supporting:
        'We design and build digital platforms, intelligent business systems, data solutions, and automation tools that help businesses operate smarter and grow.',
      ctaPrimary: 'Discuss Your Project',
      ctaSecondary: 'Explore Our Solutions',
    },
    problems: {
      badge: 'OPERATIONAL CHALLENGES WE SOLVE',
      title: 'Is Your Business Held Back by Manual Workflows?',
      subtitle:
        'Growing companies lose time and margin when critical decisions rely on disconnected spreadsheets and slow reporting.',
      items: [
        { title: 'Fragmented Business Data', desc: 'Sales, inventory, and field records scattered across paper notebooks and separate files.' },
        { title: 'Manual Reporting Delays', desc: 'Hours spent compiling weekly summaries instead of acting on real-time numbers.' },
        { title: 'Inefficient Operational Processes', desc: 'Bottlenecks in approvals, procurement, and internal team coordination.' },
        { title: 'Poor Digital Presence', desc: 'Outdated or missing web platforms that fail to build trust with corporate buyers.' },
        { title: 'Difficult Customer Management', desc: 'Lost client inquiries and unorganized follow-ups due to missing CRM tracking.' },
        { title: 'Limited Performance Visibility', desc: 'Unclear unit economics, FX sensitivity, and product-level profitability.' },
        { title: 'Repetitive Administrative Tasks', desc: 'Staff spending valuable hours on manual data entry and routine calculations.' },
        { title: 'Unorganized Information Systems', desc: 'Lack of centralized, role-secured access to company documents and metrics.' },
      ],
    },
    process: {
      badge: 'STRUCTURED DELIVERY',
      title: 'How We Work',
      steps: [
        { num: '01', name: 'DISCOVER', desc: 'Understand the business, requirements, challenges, and goals.' },
        { num: '02', name: 'DESIGN', desc: 'Develop the solution structure, user experience, system architecture, and project plan.' },
        { num: '03', name: 'BUILD', desc: 'Develop, test, refine, and implement the solution.' },
        { num: '04', name: 'DELIVER & SUPPORT', desc: 'Launch the system, document it, provide training when needed, and support agreed requirements.' },
      ],
    },
    packages: {
      badge: 'TRANSPARENT ENGAGEMENT MODELS',
      title: 'Service Packages',
      disclaimer: 'Final pricing depends on scope, complexity, requirements, and delivery timeline.',
      consultCta: 'Not sure which package fits? Request a Business Consultation',
    },
    whyUs: {
      badge: 'WHY NEGARIT-HUB',
      title: 'Built on Practical Engineering & Economic Rigor',
      points: [
        'Problem-first approach before writing code',
        'Practical technology tailored to Ethiopian bandwidth & workflows',
        'Business-oriented solutions focused on measurable ROI',
        'Transparent project scope and milestone governance',
        'Structured 4-stage delivery with live previews',
        'Modern, maintainable software architecture',
        'Data-driven thinking rooted in economic analysis',
        'Cost-conscious implementation with zero bloated overhead',
        'Direct communication with the engineering & strategy lead',
      ],
    },
    leadForm: {
      heading: "LET'S TURN YOUR BUSINESS CHALLENGE INTO A SOLUTION.",
      subheading: 'Tell us about your operational bottleneck. We respond within 24 hours with a structured assessment.',
      submit: 'Submit Project Inquiry',
    },
  },
  am: {
    nav: {
      home: 'መነሻ',
      solutions: 'መፍትሄዎች',
      services: 'አገልግሎቶች',
      ourWork: 'ሥራዎቻችን',
      insights: 'ትንታኔዎች',
      about: 'ስለ እኛ',
      contact: 'ያግኙን',
      portal: 'የደንበኞች ገጽ',
      admin: 'Admin CRM',
      startProject: 'ፕሮጀክት ይጀምሩ',
      exploreSolutions: 'መፍትሄዎችን ይመልከቱ',
    },
    hero: {
      badge: 'የኢትዮጵያ ዲጂታል መፍትሄዎች እና የቢዝነስ ኢንተለጀንስ ስቱዲዮ',
      headline: 'ድርጅትዎ ችግር አለበት። እኛ መፍትሄውን እንገነባለን።',
      supporting:
        'ድርጅቶች በብልሃት እንዲሰሩ እና እንዲያድጉ የሚያግዙ ዲጂታል መድረኮችን፣ ብልህ የቢዝነስ ሲስተሞችን፣ የዳታ መፍትሄዎችን እና የአሰራር አውቶሜሽን መሳሪያዎችን እንቀርጻለን፣ እንገነባለን።',
      ctaPrimary: 'ስለ ፕሮጀክትዎ ይወያዩ',
      ctaSecondary: 'መፍትሄዎቻችንን ይመልከቱ',
    },
    problems: {
      badge: 'የምንፈታቸው የድርጅት ችግሮች',
      title: 'ድርጅትዎ በኋላቀር እና በእጅ በሚሰሩ አሰራሮች ተይዟል?',
      subtitle:
        'ወሳኝ የንግድ ውሳኔዎች በተበታተኑ ወረቀቶች እና በዘገዩ ሪፖርቶች ላይ ሲመሰረቱ ድርጅቶች ጊዜ እና ትርፍ ያጣሉ።',
      items: [
        { title: 'የተበታተነ የቢዝነስ ዳታ', desc: 'የሽያጭ፣ የክምችት እና የመስክ መረጃዎች በተለያዩ ደብተሮች እና ፋይሎች መበታተን።' },
        { title: 'የዘገየ የሪፖርት አቀራረብ', desc: 'በወቅታዊ ቁጥር ከመወሰን ይልቅ ሳምንታዊ ሪፖርት በማጠናቀር ብዙ ሰዓት ማጥፋት።' },
        { title: 'ያልተቀላጠፈ የሥራ ሂደት', desc: 'በማጽደቅ፣ በግዥ እና በቡድን ቅንጅት ላይ የሚፈጠሩ መጓተቶች።' },
        { title: 'ደካማ ዲጂታል ገጽታ', desc: 'ከትላልቅ ደንበኞች ጋር እምነት የማይገነባ ኋላቀር ወይም የሌለ ድረ-ገጽ።' },
        { title: 'አስቸጋሪ የደንበኞች አያያዝ', desc: 'የተደራጀ CRM ባለመኖሩ የሚባክኑ የደንበኞች ጥያቄዎች እና ክትትሎች።' },
        { title: 'የአፈጻጸም እና ትርፍ ግልጽነት ማነስ', desc: 'የእያንዳንዱን ምርት ትርፋማነት እና የውጭ ምንዛሬ ተጽዕኖ በትክክል አለማወቅ።' },
        { title: 'ተደጋጋሚ የቢሮ ሥራዎች', desc: 'ሰራተኞች በመረጃ ምዝገባ እና በተደጋጋሚ ስሌቶች ውድ ጊዜያቸውን ማባከን።' },
        { title: 'ያልተደራጀ የመረጃ ሥርዓት', desc: 'የድርጅቱን ሰነዶች በተገቢው የፈቃድ ደረጃ አደራጅቶ አለመያዝ።' },
      ],
    },
    process: {
      badge: 'የተደራጀ አሰራር',
      title: 'የምንሰራበት ሂደት',
      steps: [
        { num: '01', name: 'ጥናት (DISCOVER)', desc: 'የድርጅቱን አሰራር፣ ፍላጎቶች፣ ችግሮች እና ግቦች በጥልቀት መረዳት።' },
        { num: '02', name: 'ንድፍ (DESIGN)', desc: 'የሲስተሙን መዋቅር፣ የተጠቃሚ ልምድ (UX) እና የፕሮጀክት እቅድ ማዘጋጀት።' },
        { num: '03', name: 'ግንባታ (BUILD)', desc: 'ሲስተሙን መገንባት፣ መፈተሽ፣ ማሻሻል እና ወደ ሥራ ማስገባት።' },
        { num: '04', name: 'ርክክብ እና ድጋፍ (DELIVER & SUPPORT)', desc: 'ሲስተሙን ማስጀመር፣ ሰነድ ማዘጋጀት፣ ስልጠና መስጠት እና ቀጣይ ድጋፍ ማድረግ።' },
      ],
    },
    packages: {
      badge: 'ግልጽ የአገልግሎት ፓኬጆች',
      title: 'የአገልግሎት ጥቅሎች',
      disclaimer: 'የመጨረሻው ዋጋ እንደ ሥራው ስፋት፣ ውስብስብነት፣ ፍላጎት እና የማስረከቢያ ጊዜ ይወሰናል።',
      consultCta: 'የትኛው ጥቅል እንደሚስማማዎ እርግጠኛ አይደሉም? የቢዝነስ ምክክር ይጠይቁ',
    },
    whyUs: {
      badge: 'ለምን ነጋሪት-ሃብ?',
      title: 'በተግባራዊ ምህንድስና እና በኢኮኖሚክስ ትንታኔ የተገነባ',
      points: [
        'ኮድ ከመጻፋችን በፊት ችግሩን በጥልቀት የመረዳት አካሄድ',
        'ለኢትዮጵያ የኢንተርኔት ፍጥነት እና የሥራ ባህል ተስማሚ ቴክኖሎጂ',
        'ተጨባጭ የንግድ ትርፍ (ROI) ላይ ያተኮሩ መፍትሄዎች',
        'ግልጽ የሥራ ድርሻ እና በየደረጃው የሚታይ አፈጻጸም',
        'በ4 ደረጃዎች የተዋቀረ አስተማማኝ የርክክብ ሂደት',
        'ዘመናዊ እና ለወደፊት መስፋፋት ዝግጁ የሆነ ሶፍትዌር',
        'በኢኮኖሚክስ ትንታኔ የተደገፈ የዳታ አስተሳሰብ',
        'አላስፈላጊ ወጪን የሚቀንስ ብልህ ግንባታ',
        'ከሲስተሙ መሪ ጋር ቀጥተኛ እና ግልጽ ግንኙነት',
      ],
    },
    leadForm: {
      heading: 'የድርጅትዎን ችግር ወደ ተግባራዊ መፍትሄ እንቀይረው።',
      subheading: 'መፍታት የሚፈልጉትን ችግር ይንገሩን፤ በ24 ሰዓት ውስጥ ዝርዝር ግምገማ ይዘን እንመለሳለን።',
      submit: 'የፕሮጀክት ጥያቄውን ይላኩ',
    },
  },
};