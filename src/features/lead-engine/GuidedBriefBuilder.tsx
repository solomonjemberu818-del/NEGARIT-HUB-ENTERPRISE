import { useState } from 'react';
import { CheckCircle2, Send, Loader2, AlertCircle, Mail, Paperclip } from 'lucide-react';
import { BRAND } from '../../config/brand';
import { type Language, translations } from '../../lib/i18n';
import type { ProjectLead, ServiceCategory } from '../../types/database';
import { createProjectLead } from './leadService';

export function GuidedBriefBuilder({
  lang,
  onAddLead,
}: {
  lang: Language;
  onAddLead: (lead: ProjectLead) => void;
}) {
  const t = translations[lang].leadForm;
  const [category, setCategory] = useState<ServiceCategory>('BI_ANALYTICS');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('Agro-Processing & Food');
  const [problem, setProblem] = useState('');
  const [expectedOutcome, setExpectedOutcome] = useState('');
  const [budget, setBudget] = useState('35,000 - 65,000 ETB');
  const [timeline, setTimeline] = useState('4 Weeks');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSentDirect, setEmailSentDirect] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories: { id: ServiceCategory; en: string; am: string }[] = [
    { id: 'BI_ANALYTICS', en: 'Business Intelligence & Analytics', am: 'የቢዝነስ ኢንተለጀንስ እና ዳታ ትንታኔ' },
    { id: 'WEB_DEVELOPMENT', en: 'Custom Web Development', am: 'ብጁ ድረ-ገጽ እና የዌብ መተግበሪያ' },
    { id: 'MANAGEMENT_SYSTEMS', en: 'Business Management Systems', am: 'የድርጅት አስተዳደር ሲስተም (CRM)' },
    { id: 'WORKFLOW_AUTOMATION', en: 'Workflow Automation', am: 'የሥራ ሂደት አውቶሜሽን' },
    { id: 'DATA_MONITORING', en: 'Data Collection & Monitoring', am: 'የመስክ መረጃ መሰብሰቢያ እና ክትትል' },
    { id: 'TRANSFORMATION_CONSULTING', en: 'Digital Transformation Consulting', am: 'የዲጂታል ሽግግር ምክክር' },
  ];

  const handlePhoneChange = (val: string) => {
    const sanitized = val.replace(/[^0-9+\-\s()]/g, '');
    setPhone(sanitized);
  };

  // ከደንበኛው ኢሜይል ቀጥታ ወደ solomonjemberu818@gmail.com የሚልክ (ከነ PDF ፋይሉ)
  const sendDirectEmailToSolomon = async () => {
    const formData = new FormData();
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
    formData.append('subject', `NEGARIT-HUB Inquiry: ${companyName} (${category})`);
    formData.append('from_name', contactName.trim());
    formData.append('email', email.trim());
    formData.append('Phone_Number', phone.trim());
    formData.append('Organization', companyName.trim());
    formData.append('Industry', industry);
    formData.append('Service_Category', category);
    formData.append('Budget_ETB', budget);
    formData.append('Preferred_Timeline', timeline);
    formData.append('Business_Problem', problem.trim());
    formData.append('Expected_Outcome', expectedOutcome.trim() || 'Not specified');

    if (pdfFile) {
      formData.append('attachment', pdfFile);
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'Email delivery failed');
    }
    return true;
  };

  const validateInputs = () => {
    const digitCount = phone.replace(/\D/g, '').length;
    if (digitCount < 9 || digitCount > 15) {
      setErrorMsg(
        lang === 'en'
          ? 'Please enter a valid phone number (9 to 15 digits only, e.g. +251 911 223344).'
          : 'እባክዎ ትክክለኛ የስልክ ቁጥር ብቻ ያስገቡ (ከ9 እስከ 15 አሃዝ ቁጥር ብቻ፤ ለምሳሌ +251 911 223344)።'
      );
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg(
        lang === 'en'
          ? 'Please enter a valid email address (e.g. name@company.com).'
          : 'እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ (ለምሳሌ name@company.com)።'
      );
      return false;
    }

    if (companyName.trim().length < 2 || contactName.trim().length < 2) {
      setErrorMsg(
        lang === 'en'
          ? 'Please enter your full name and organization name.'
          : 'እባክዎ ሙሉ ስምዎን እና የድርጅትዎን ስም ያስገቡ።'
      );
      return false;
    }

    if (problem.trim().length < 10) {
      setErrorMsg(
        lang === 'en'
          ? 'Please describe your business challenge in at least 10 characters.'
          : 'እባክዎ የድርጅትዎን ችግር ቢያንስ በ10 ፊደላት በግልጽ ያብራሩ።'
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setErrorMsg('');
    if (!validateInputs()) return;

    setLoading(true);
    const numericBudget = budget.includes('150,000') ? 150000 : budget.includes('75,000') ? 95000 : 45000;

    try {
      // 1. ወደ Supabase PostgreSQL ዳታቤዝ ማስገባት
      const saved = await createProjectLead({
        company_name: companyName.trim(),
        contact_name: contactName.trim(),
        contact_email: email.trim(),
        contact_phone: phone.trim(),
        industry,
        service_category: category,
        problem_statement: problem.trim() + (pdfFile ? ` [Attached PDF: ${pdfFile.name}]` : ''),
        expected_outcome: expectedOutcome.trim(),
        budget_range_etb: budget,
        preferred_timeline: timeline,
        timeline_weeks: 4,
        status: 'INQUIRY',
        priority: 'MEDIUM',
        estimated_revenue_etb: numericBudget,
        contracted_revenue_etb: 0,
        received_payments_etb: 0,
        direct_delivery_cost_etb: Math.round(numericBudget * 0.4),
      });

      // 2. በተመሳሳይ ጊዜ በቀጥታ ከደንበኛው ኢሜይል ወደ solomonjemberu818@gmail.com መላክ
      await sendDirectEmailToSolomon(); setEmailSentDirect(true);

      onAddLead(saved);
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Unable to submit inquiry.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#162338] border border-emerald-500/40 text-slate-100 rounded-2xl p-8 text-center max-w-2xl mx-auto my-16">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
        <h3 className="text-2xl font-bold">
          {lang === 'en' ? 'Sent Directly to NEGARIT-HUB!' : 'መልዕክትዎ በቀጥታ ወደ ነጋሪት-ሃብ ተልኳል!'}
        </h3>
        <p className="text-slate-300 mt-3 text-sm leading-relaxed">
          {lang === 'en'
            ? `Your inquiry from (${email}) ${pdfFile ? `including "${pdfFile.name}" ` : ''}has been delivered directly to ${BRAND.email} and logged in our system. We will reply to your email within 24 hours.`
            : `ከ (${email}) የተላከው መልዕክትዎ ${pdfFile ? `ከ "${pdfFile.name}" PDF ፋይል ጋር ` : ''}በቀጥታ ወደ ${BRAND.email} ደርሷል። በ24 ሰዓት ውስጥ በኢሜይልዎ ምላሽ እንሰጥዎታለን።`}
        </p>

        {emailSentDirect && (
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            {lang === 'en' ? `Delivered to ${BRAND.email}` : `ወደ ${BRAND.email} በቀጥታ ተልኳል`}
          </div>
        )}

        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setCompanyName('');
              setProblem('');
              setExpectedOutcome('');
              setPdfFile(null);
            }}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs"
          >
            {lang === 'en' ? 'Send Another Message' : 'ሌላ መልዕክት ይላኩ'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="start-project" className="py-20 px-4 bg-[#111C2E] border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            {lang === 'en' ? 'DIRECT PROJECT & EMAIL DISPATCH' : 'ቀጥተኛ የፕሮጀክት እና የኢሜይል መላኪያ'}
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mt-4">{t.heading}</h2>
          <p className="text-slate-300 mt-2 text-sm">{t.subheading}</p>
        </div>

        {errorMsg && (
          <div className="mt-4 p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-[#162338] border border-slate-800 p-6 sm:p-8 rounded-2xl">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
          />

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              {lang === 'en' ? '1. Select Project Category' : '1. የፕሮጀክቱን ዘርፍ ይምረጡ'}
            </label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`p-3 rounded-lg border text-left text-xs font-semibold transition ${
                    category === c.id
                      ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300'
                      : 'border-slate-800 bg-[#0B1220] text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {lang === 'en' ? c.en : c.am}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Your Full Name *' : 'ሙሉ ስምዎ *'}
              </label>
              <input
                required
                type="text"
                minLength={2}
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Company / Organization Name *' : 'የድርጅቱ ስም *'}
              </label>
              <input
                required
                type="text"
                minLength={2}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Your Email Address (For Direct Reply) *' : 'የእርስዎ ኢሜይል (መልስ የሚላክበት) *'}
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Phone Number (Digits Only) *' : 'ስልክ ቁጥር (ቁጥር ብቻ) *'}
              </label>
              <input
                required
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="+251 911 223344"
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Industry' : 'የሥራ ዘርፍ (Industry)'}
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              >
                <option value="Agro-Processing & Food">Agro-Processing & Food</option>
                <option value="Import / Export & Trade">Import / Export & Trade</option>
                <option value="Manufacturing & Construction">Manufacturing & Construction</option>
                <option value="Education & Consulting">Education & Consulting</option>
                <option value="Healthcare & Services">Healthcare & Services</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Estimated Budget (ETB)' : 'ግምታዊ በጀት (በብር)'}
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              >
                <option value="35,000 - 65,000 ETB">35,000 – 65,000 ETB (Starter Solution)</option>
                <option value="75,000 - 140,000 ETB">75,000 – 140,000 ETB (Business Growth)</option>
                <option value="150,000+ ETB">Starting from 150,000 ETB (Custom Enterprise)</option>
                <option value="Consultation Needed">Not Sure — Request Consultation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {lang === 'en' ? 'Business Problem / Message to Solomon *' : 'የድርጅቱ ችግር ወይም ለሰለሞን የሚላክ መልዕክት *'}
            </label>
            <textarea
              required
              rows={3}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Expected Business Outcome' : 'የሚጠበቅ የንግድ ውጤት'}
              </label>
              <input
                type="text"
                value={expectedOutcome}
                onChange={(e) => setExpectedOutcome(e.target.value)}
                placeholder={lang === 'en' ? 'e.g. Faster reporting, real-time margin visibility' : 'ምሳሌ፡ ፈጣን ሪፖርት፣ የትርፍ ቁጥጥር'}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {lang === 'en' ? 'Preferred Timeline' : 'የሚፈለግ የማስረከቢያ ጊዜ'}
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              >
                <option value="2 - 3 Weeks">2 – 3 Weeks</option>
                <option value="4 - 6 Weeks">4 – 6 Weeks</option>
                <option value="6 - 10 Weeks">6 – 10 Weeks</option>
                <option value="Flexible">Flexible / Advisory First</option>
              </select>
            </div>
          </div>

          {/* Direct PDF Attachment Upload */}
          <div className="p-4 rounded-xl bg-[#0B1220] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Paperclip className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {pdfFile
                  ? `${lang === 'en' ? 'Attached PDF:' : 'የተያያዘ PDF ፋይል፡'} ${pdfFile.name}`
                  : lang === 'en'
                  ? 'Attach Project Brief / RFP PDF (Optional, max 5MB):'
                  : 'የፕሮጀክት ዝርዝር PDF ፋይል ያያይዙ (አማራጭ)፡'}
              </span>
            </div>
            <label className="cursor-pointer px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-400 shrink-0 text-center">
              {lang === 'en' ? 'Attach PDF File' : 'PDF ፋይል ይምረጡ'}
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-bold px-8 py-3.5 rounded-lg text-sm transition"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {lang === 'en' ? 'Send Directly to Solomon (Email + Database)' : 'በቀጥታ ወደ ሰለሞን ይላኩ (Email + Database)'}
          </button>
        </form>
      </div>
    </section>
  );
}