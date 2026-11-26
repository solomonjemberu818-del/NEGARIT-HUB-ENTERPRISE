import { useState } from 'react';
import { Lock, CheckCircle2, Clock, FileCheck, Loader2, LogOut } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import type { Language } from '../../lib/i18n';
import type { ProjectLead } from '../../types/database';

export function ClientPortal({
  lang,
  session,
  leads,
  onAuthSuccess,
  onLogout,
}: {
  lang: Language;
  session: Session | null;
  leads: ProjectLead[];
  onAuthSuccess: () => void;
  onLogout: () => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClientLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setLoading(true);
    setError('');
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) setError(authError.message);
    else onAuthSuccess();
  };

  if (!session) {
    return (
      <section className="max-w-md mx-auto my-16 px-4">
        <div className="bg-[#162338] border border-slate-800 rounded-2xl p-8">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-100">
            {lang === 'en' ? 'Authenticated Client Workspace' : 'የደንበኞች ደህንነቱ የተጠበቀ መግቢያ'}
          </h2>
          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
            {lang === 'en'
              ? 'For client confidentiality, project timelines, milestones, and deliverables require authorized account authentication.'
              : 'የደንበኞችን ሚስጥራዊነት ለመጠበቅ የፕሮጀክት ሂደቶችን እና ሰነዶችን ለማየት የተፈቀደ የመግቢያ መለያ ያስፈልጋል።'}
          </p>

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleClientLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {lang === 'en' ? 'Authorized Client Email' : 'የደንበኛ ኢሜይል'}
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {lang === 'en' ? 'Password' : 'የይለፍ ቃል'}
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg bg-[#0B1220] border border-slate-700 p-3 text-sm text-slate-100"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-lg text-sm"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {lang === 'en' ? 'Access Client Portal' : 'ወደ ፖርታሉ ይግቡ'}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto py-14 px-4">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">
            {lang === 'en' ? 'Client Project Delivery Workspace' : 'የፕሮጀክት አፈጻጸም መከታተያ'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">{session.user.email}</p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg"
        >
          <LogOut className="w-3.5 h-3.5" /> {lang === 'en' ? 'Sign Out' : 'ውጣ'}
        </button>
      </div>

      {leads.length === 0 ? (
        <div className="bg-[#162338] border border-slate-800 rounded-2xl p-8 text-center text-sm text-slate-300">
          {lang === 'en'
            ? 'No active projects are currently linked to this account. Once scoping is approved, your project milestones will appear here.'
            : 'ከዚህ መለያ ጋር የተያያዘ ንቁ ፕሮጀክት የለም። የፕሮጀክት እቅድዎ ሲጸድቅ እዚህ ይታያል።'}
        </div>
      ) : (
        <div className="space-y-6">
          {leads.map((proj) => (
            <div key={proj.id} className="bg-[#162338] border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-100">{proj.company_name}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <Clock className="w-3.5 h-3.5" /> {proj.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {proj.service_category} • {proj.preferred_timeline || '4 Weeks'}
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mt-5 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800">
                  <span className="text-slate-400 block">Milestone 01</span>
                  <strong className="text-slate-100 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Scope & Architecture
                  </strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800">
                  <span className="text-slate-400 block">Milestone 02</span>
                  <strong className="text-slate-100 mt-1 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-400" /> System Build & QA
                  </strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B1220] border border-slate-800">
                  <span className="text-slate-400 block">Milestone 03</span>
                  <strong className="text-slate-100 mt-1 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-slate-500" /> Handover & Training
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}