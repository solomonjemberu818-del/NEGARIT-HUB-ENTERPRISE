import { useEffect, useState } from 'react';
import { Globe, ArrowRight, PhoneCall, Send, Menu, X, BarChart3, ShieldCheck, Mail } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';
import { BRAND } from './config/brand';
import { type Language, translations } from './lib/i18n';
import { supabase } from './lib/supabase';
import type { ProjectLead } from './types/database';
import { BrandLogo } from './components/common/BrandLogo';
import { IntroSplash } from './components/common/IntroSplash';
import { NegaritAIChat } from './components/common/NegaritAIChat';
import { OurSolutions } from './features/solutions/OurSolutions';
import { ServiceCatalog } from './features/solutions/ServiceCatalog';
import { LiveDemoShowcase } from './features/demos/LiveDemoShowcase';
import { ProjectCaseStudy } from './features/demos/ProjectCaseStudy';
import { EnterpriseSections } from './features/process/EnterpriseSections';
import { GuidedBriefBuilder } from './features/lead-engine/GuidedBriefBuilder';
import { ClientPortal } from './features/client-portal/ClientPortal';
import { AdminLogin } from './features/admin-crm/AdminLogin';
import { AdminCRM } from './features/admin-crm/AdminCRM';
import { fetchProjectLeads, updateProjectLead } from './features/lead-engine/leadService';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<'public' | 'portal' | 'admin'>('public');
  const [caseStudyId, setCaseStudyId] = useState<'decision' | 'maize' | null>(null);
  const [activeDemoTab, setActiveDemoTab] = useState<'decision' | 'maize'>('decision');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [leads, setLeads] = useState<ProjectLead[]>([]);
  const [dbError, setDbError] = useState<string | null>(null);

  const loadLeads = () => { fetchProjectLeads().then(({ data, error }) => { setLeads(data); setDbError(error); }); };

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadLeads();
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession) loadLeads();
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null);
    setLeads([]);
    setView('public');
  };

  const handleSelectDemoFromSolution = (demo: 'decision' | 'maize') => {
    setActiveDemoTab(demo);
    setCaseStudyId(null);
    setView('public');
    document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] text-[#F1F5F9]">      <IntroSplash />
      <header className="sticky top-0 z-50 bg-[#0B1220]/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => { setView('public'); setCaseStudyId(null); }}
            className="text-left"
          >
            <BrandLogo showTagline />
          </button>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#top" onClick={() => { setView('public'); setCaseStudyId(null); }} className="hover:text-emerald-400">{t.nav.home}</a>
            <a href="#solutions" onClick={() => { setView('public'); setCaseStudyId(null); }} className="hover:text-emerald-400">{t.nav.solutions}</a>
            <a href="#services" onClick={() => { setView('public'); setCaseStudyId(null); }} className="hover:text-emerald-400">{t.nav.services}</a>
            <a href="#our-work" onClick={() => { setView('public'); setCaseStudyId(null); }} className="hover:text-emerald-400">{t.nav.ourWork}</a>
            <a href="#insights" onClick={() => { setView('public'); setCaseStudyId(null); }} className="hover:text-emerald-400">{t.nav.insights}</a>
            <a href="#about" onClick={() => { setView('public'); setCaseStudyId(null); }} className="hover:text-emerald-400">{t.nav.about}</a>
            <a href="#contact" onClick={() => { setView('public'); setCaseStudyId(null); }} className="hover:text-emerald-400">{t.nav.contact}</a>
          </nav>

          <div className="hidden sm:flex items-center gap-2.5 text-xs">
            <button
              type="button"
              onClick={() => { setView(view === 'portal' ? 'public' : 'portal'); setCaseStudyId(null); }}
              className="px-3 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-500 text-slate-200 font-semibold"
            >
              {t.nav.portal}
            </button>

            <button
              type="button"
              onClick={() => { const next = view === 'admin' ? 'public' : 'admin'; setView(next); setCaseStudyId(null); if (next === 'admin' && session) loadLeads(); }}
              className="px-3 py-1.5 rounded-lg bg-[#162338] hover:bg-slate-800 text-emerald-400 border border-slate-800 font-semibold"
            >
              {t.nav.admin}
            </button>

            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-400 text-slate-200 font-semibold"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'en' ? 'አማርኛ' : 'EN'}
            </button>

            <a
              href="#start-project"
              onClick={() => { setView('public'); setCaseStudyId(null); }}
              className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold tracking-wide"
            >
              {t.nav.startProject}
            </a>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="px-2.5 py-1.5 rounded border border-slate-700 text-xs font-bold text-emerald-400"
            >
              {lang === 'en' ? 'አማ' : 'EN'}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#162338] text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111C2E] border-b border-slate-800 px-4 py-4 space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <a href="#solutions" onClick={() => { setView('public'); setMobileMenuOpen(false); }} className="p-2 rounded bg-[#162338]">{t.nav.solutions}</a>
              <a href="#services" onClick={() => { setView('public'); setMobileMenuOpen(false); }} className="p-2 rounded bg-[#162338]">{t.nav.services}</a>
              <a href="#our-work" onClick={() => { setView('public'); setMobileMenuOpen(false); }} className="p-2 rounded bg-[#162338]">{t.nav.ourWork}</a>
              <a href="#insights" onClick={() => { setView('public'); setMobileMenuOpen(false); }} className="p-2 rounded bg-[#162338]">{t.nav.insights}</a>
              <button type="button" onClick={() => { setView('portal'); setMobileMenuOpen(false); }} className="p-2 rounded bg-[#162338] text-left">{t.nav.portal}</button>
              <button type="button" onClick={() => { setView('admin'); setMobileMenuOpen(false); }} className="p-2 rounded bg-[#162338] text-left text-emerald-400">{t.nav.admin}</button>
            </div>
            <a
              href="#start-project"
              onClick={() => { setView('public'); setMobileMenuOpen(false); }}
              className="block w-full text-center py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold"
            >
              {t.nav.startProject}
            </a>
          </div>
        )}
      </header>

      {view === 'public' && caseStudyId && (
        <main className="flex-1">
          <ProjectCaseStudy projectId={caseStudyId} lang={lang} onBack={() => setCaseStudyId(null)} />
        </main>
      )}

      {view === 'public' && !caseStudyId && (
        <main id="top" className="flex-1">
          <section className="py-20 px-4 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                {t.hero.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight tracking-tight text-slate-100">
                {t.hero.headline}
              </h1>
              <p className="text-slate-300 mt-6 text-base sm:text-lg max-w-2xl leading-relaxed">
                {t.hero.supporting}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#start-project"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg text-sm transition"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 bg-[#162338] hover:bg-slate-800 border border-slate-700 text-slate-100 font-semibold px-6 py-3.5 rounded-lg text-sm transition"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#162338] border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  NEGARIT-HUB Decision Intelligence
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  SAMPLE PREVIEW
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Unit Cost & FX Stress Model</span>
                    <strong className="text-sm text-slate-100">Import-Adjusted Margin Guard</strong>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">+14.2% Clarity</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Regional Supply Corridor</span>
                    <strong className="text-sm text-slate-100">Farmgate vs. Central Hub Spread</strong>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">Offline Ready</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Role-secured PostgreSQL backend with bilingual UI</span>
                </div>
              </div>
            </div>
          </section>

          <EnterpriseSections lang={lang} />
          <OurSolutions lang={lang} onSelectDemo={handleSelectDemoFromSolution} />
          <LiveDemoShowcase
            lang={lang}
            activeTab={activeDemoTab}
            setActiveTab={setActiveDemoTab}
            onOpenCaseStudy={(id) => { setCaseStudyId(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
          <ServiceCatalog lang={lang} />
          <GuidedBriefBuilder lang={lang} onAddLead={(lead) => { setLeads((prev) => [lead, ...prev]); loadLeads(); }} />
        </main>
      )}

      {view === 'portal' && (
        <main className="flex-1">
          <ClientPortal
            lang={lang}
            session={session}
            leads={leads}
            onAuthSuccess={loadLeads}
            onLogout={handleLogout}
          />
        </main>
      )}

      {view === 'admin' && !session && (
        <main className="flex-1 px-4">
          <AdminLogin onSuccess={loadLeads} />
        </main>
      )}

      {view === 'admin' && session && (
        <AdminCRM session={session} leads={leads} setLeads={setLeads} dbError={dbError} onRefresh={loadLeads} onLogout={handleLogout} />
      )}

      <footer id="contact" className="bg-[#0B1220] text-slate-300 py-14 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <BrandLogo showTagline />
            <p className="text-xs text-slate-400 mt-3 max-w-md leading-relaxed">
              {lang === 'en' ? BRAND.positioningEn : BRAND.positioningAm}
            </p>
            <p className="text-xs text-slate-500 mt-2">{BRAND.location} • {BRAND.email}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(BRAND.email)}&su=${encodeURIComponent('NEGARIT-HUB Business Inquiry')}`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#162338] hover:bg-slate-800 text-emerald-400 border border-emerald-500/30"
            >
              <Mail className="w-4 h-4" /> {BRAND.email}
            </a>
            <a
              href="tel:+251907569860"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#162338] hover:bg-slate-800 text-slate-100 border border-slate-700"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" /> {BRAND.phone}
            </a>
            <a
              href={BRAND.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950"
            >
              <Send className="w-4 h-4" /> Telegram (@negarithub)
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          © 2026 {BRAND.name}. All rights reserved.
        </div>
      </footer>
      <NegaritAIChat
        lang={lang}
        isAdmin={Boolean(session)}
        leads={leads}
        onUpdateLeadStatus={async (id, status) => {
          const ok = await updateProjectLead(id, { status });
          if (ok) {
            setLeads((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
          }
        }}
      />
    </div>
  );
}

export default App;