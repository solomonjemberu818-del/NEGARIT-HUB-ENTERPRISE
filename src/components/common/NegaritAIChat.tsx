import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import type { Language } from '../../lib/i18n';
import type { ProjectLead, ProjectStatus } from '../../types/database';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  emailAction?: {
    to: string;
    subject: string;
    body: string;
  };
}

const PUBLIC_PROMPT = `You are the official AI Business & Systems Advisor for NEGARIT-HUB, an Ethiopian digital solutions, business intelligence, and workflow automation studio founded by Solomon Jemberu.
Help Ethiopian businesses diagnose operational bottlenecks and recommend NEGARIT-HUB solutions (Business Intelligence, Digital Platforms, Business Automation, Data & Market Intelligence).
Pricing tiers: Starter Solution (35,000 - 65,000 ETB), Business Growth (75,000 - 140,000 ETB), Custom Enterprise (Starting from 150,000 ETB).
Reply concisely and practically in the exact language the user writes in (Amharic or English).`;

const MODELS = ['gemini-3.5-flash-lite', 'gemini-3.8-flash'];

export function NegaritAIChat({
  lang,
  isAdmin = false,
  leads = [],
  onUpdateLeadStatus,
}: {
  lang: Language;
  isAdmin?: boolean;
  leads?: ProjectLead[];
  onUpdateLeadStatus?: (id: string, status: ProjectStatus) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const newInquiriesCount = leads.filter((l) => l.status === 'INQUIRY').length;

  useEffect(() => {
    if (isAdmin) {
      const latest = leads[0];
      const summaryEn = `Executive Co-Pilot Active. You have ${leads.length} total projects (${newInquiriesCount} new INQUIRY).${
        latest ? ` Latest inquiry: "${latest.company_name}" (${latest.contact_name}).` : ''
      } Ask me to summarize leads, update a project status, or draft a client reply email.`;
      const summaryAm = `\u1230\u120B\u121D \u1230\u1208\u121E\u1295! \u12E8\u1290\u130B\u122A\u1275-\u1203\u1265 \u1228\u12F3\u1275 \u1338\u1210\u134A\u1205 \u12DD\u130D\u1301 \u1290\u12CD\u1362 \u1260\u12F3\u1273\u1264\u12DD \u12CD\u1235\u1325 \u1320\u1245\u120B\u120B ${leads.length} \u1355\u122E\u1300\u12AD\u1276\u127D (${newInquiriesCount} \u12A0\u12F2\u1235 \u1325\u12EB\u1244\u12CE\u127D) \u12A0\u1209\u1362${
        latest ? ` \u12E8\u1218\u1328\u1228\u123B\u12CD \u1325\u12EB\u1244: "${latest.company_name}" (${latest.contact_name})\u1362` : ''
      } \u1235\u1208 \u1355\u122E\u1300\u12AD\u1276\u1279 \u12DD\u122D\u12DD\u122D \u12ED\u1320\u12ED\u1241\u129D\u1363 \u12C8\u12ED\u121D \u1208\u12F0\u1295\u1260\u129B \u12E8\u121D\u120B\u123D \u12A2\u121C\u12ED\u120D \u12A0\u12D8\u130B\u1305 \u12ED\u1260\u1209\u129D\u1362`;
      setMessages([{ role: 'assistant', text: lang === 'en' ? summaryEn : summaryAm }]);
    } else {
      setMessages([
        {
          role: 'assistant',
          text:
            lang === 'en'
              ? 'Welcome to NEGARIT-HUB. Describe an operational challenge in your business and I will recommend a practical system.'
              : '\u12A5\u1295\u12B3\u1295 \u12C8\u12F0 \u1290\u130B\u122A\u1275-\u1203\u1265 (NEGARIT-HUB) \u1260\u12F0\u1205\u1293 \u1218\u1321! \u1260\u12F5\u122D\u1305\u1275\u12CE \u12CD\u1235\u1325 \u12EB\u1208\u12CD\u1295 \u12E8\u12A0\u1230\u122B\u122D \u127D\u130D\u122D \u12ED\u1295\u1308\u1229\u129D\u1293 \u1270\u1235\u121B\u121A\u12CD\u1295 \u1218\u134D\u1275\u1204 \u12A5\u1320\u1241\u121D\u12CE\u1273\u1208\u1201\u1362',
        },
      ]);
    }
  }, [isAdmin, leads.length, lang]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  const buildAdminContext = () => {
    const compactLeads = leads.map((l) => ({
      id: l.id,
      company: l.company_name,
      contact: l.contact_name,
      email: l.contact_email,
      phone: l.contact_phone,
      industry: l.industry,
      service: l.service_category,
      status: l.status,
      priority: l.priority,
      budget: l.budget_range_etb,
      est_revenue: l.estimated_revenue_etb,
      received: l.received_payments_etb,
      problem: l.problem_statement,
      created_at: l.created_at,
    }));

    return `You are Solomon Jemberu's Executive AI Chief of Staff & Personal Secretary inside the NEGARIT-HUB Admin CRM.
Live Database Snapshot (${leads.length} total leads, ${newInquiriesCount} new INQUIRY):
${JSON.stringify(compactLeads, null, 2)}

Your capabilities:
1. Answer questions about total projects, new inquiries, revenue pipeline, priorities, and platform updates accurately from the live snapshot above.
2. When Solomon asks you to write/draft/send a reply email or message to a specific client/company, write a clear executive response AND include a machine-readable JSON block at the very end in this exact format:
<<<EMAIL_JSON>>>{"to":"client_email_from_db","subject":"Re: NEGARIT-HUB Project Inquiry - Company Name","body":"Full email body text"}<<<END_EMAIL>>>
3. When Solomon asks to change/update a project's status (valid statuses: INQUIRY, REVIEWING, QUALIFIED, SCOPING, PROPOSAL_SENT, NEGOTIATION, WON, LOST, ACTIVE, COMPLETED), include at the very end:
<<<STATUS_JSON>>>{"id":"exact_uuid_from_db","status":"NEW_STATUS"}<<<END_STATUS>>>
4. Reply in the exact language Solomon writes in (Amharic or English). Be concise, structured, and executive.`;
  };

  const callGeminiWithFallback = async (promptText: string, key: string): Promise<string> => {
    let lastError = 'Service temporarily busy.';
    for (const model of MODELS) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': key,
          },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: promptText }] }],
          }),
        }
      );

      const data = await response.json();
      if (response.ok && !data.error) {
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) return reply.trim();
      }
      lastError = data?.error?.message || `HTTP ${response.status}`;
    }
    throw new Error(lastError);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const updated: ChatMessage[] = [...messages, { role: 'user', text: trimmed }];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      if (!apiKey) {
        throw new Error('VITE_GEMINI_API_KEY not found in .env');
      }

      const conversationText = updated
        .map((m) => `${m.role === 'user' ? (isAdmin ? 'Solomon' : 'Client') : 'Assistant'}: ${m.text}`)
        .join('\n');

      const systemContext = isAdmin ? buildAdminContext() : PUBLIC_PROMPT;
      let reply = await callGeminiWithFallback(
        `${systemContext}\n\nConversation:\n${conversationText}\nAssistant:`,
        apiKey
      );

      let emailAction: ChatMessage['emailAction'] | undefined;

      // 1. የኢሜይል መላኪያ ትዕዛዝ ካለ መለየት
      const emailMatch = reply.match(/<<<EMAIL_JSON>>>([\s\S]*?)<<<END_EMAIL>>>/);
      if (emailMatch) {
        try {
          emailAction = JSON.parse(emailMatch[1].trim());
        } catch {
          // ignore malformed json
        }
        reply = reply.replace(/<<<EMAIL_JSON>>>[\s\S]*?<<<END_EMAIL>>>/, '').trim();
      }

      // 2. የዳታቤዝ Status መቀየሪያ ትዕዛዝ ካለ በቀጥታ መፈጸም
      const statusMatch = reply.match(/<<<STATUS_JSON>>>([\s\S]*?)<<<END_STATUS>>>/);
      if (statusMatch && onUpdateLeadStatus) {
        try {
          const parsed = JSON.parse(statusMatch[1].trim()) as { id: string; status: ProjectStatus };
          if (parsed.id && parsed.status) {
            await onUpdateLeadStatus(parsed.id, parsed.status);
          }
        } catch {
          // ignore malformed json
        }
        reply = reply.replace(/<<<STATUS_JSON>>>[\s\S]*?<<<END_STATUS>>>/, '').trim();
      }

      setMessages([...updated, { role: 'assistant', text: reply, emailAction }]);
    } catch (err: unknown) {
      const reason = err instanceof Error ? err.message : 'Unknown connection error';
      setMessages([
        ...updated,
        {
          role: 'assistant',
          text: `Error: ${reason}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-950/60 text-xs transition"
        >
          {isAdmin ? <ShieldCheck className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          <span>
            {isAdmin
              ? lang === 'en'
                ? 'Executive Co-Pilot'
                : '\u12E8\u1230\u1208\u121E\u1295 AI \u1228\u12F3\u1275'
              : lang === 'en'
              ? 'Ask NEGARIT AI'
              : '\u12E8\u1290\u130B\u122A\u1275 AI \u12A0\u121B\u12AB\u122A'}
          </span>
          {isAdmin && newInquiriesCount > 0 && (
            <span className="ml-1 px-2 py-0.5 text-[10px] font-black rounded-full bg-slate-950 text-emerald-400">
              {newInquiriesCount} NEW
            </span>
          )}
        </button>
      ) : (
        <div className="w-[350px] sm:w-[410px] bg-[#162338] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-[#0B1220] px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-100">
                  {isAdmin ? 'NEGARIT-HUB Executive Co-Pilot' : 'NEGARIT-HUB AI Advisor'}
                </h4>
                <span className="text-[10px] text-emerald-400 block">
                  {isAdmin
                    ? `Admin Mode • ${leads.length} Projects Synced`
                    : lang === 'en'
                    ? 'Powered by Gemini • EN / \u12A0\u121B\u122D\u129B'
                    : '\u1260Gemini AI \u12E8\u121A\u1230\u122B • \u12A0\u121B\u122D\u129B / EN'}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="p-4 h-80 overflow-y-auto space-y-3 text-xs bg-[#111C2E]">
            {messages.map((m, i) => (
              <div key={i} className="space-y-2">
                <div
                  className={`p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-emerald-500 text-slate-950 font-semibold ml-8'
                      : 'bg-[#162338] border border-slate-800 text-slate-200 mr-6'
                  }`}
                >
                  {m.text}
                </div>
                {m.emailAction && m.emailAction.to && (
                  <div className="mr-6">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        m.emailAction.to
                      )}&su=${encodeURIComponent(m.emailAction.subject)}&body=${encodeURIComponent(
                        m.emailAction.body
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] shadow"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Send Reply to {m.emailAction.to} via Gmail
                    </a>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="bg-[#162338] border border-slate-800 text-emerald-400 p-3 rounded-xl mr-12 inline-flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{lang === 'en' ? 'Processing...' : '\u1260\u1218\u1235\u122B\u1275 \u120B\u12ED...'}</span>
              </div>
            )}
          </div>

          {!isAdmin && (
            <div className="px-3 py-1.5 bg-[#0B1220] border-t border-slate-800 flex justify-between items-center text-[11px]">
              <span className="text-slate-400">
                {lang === 'en' ? 'Ready for a custom quote?' : '\u12DD\u122D\u12DD\u122D \u12CB\u130B \u12ED\u1348\u120D\u130B\u1209?'}
              </span>
              <a
                href="#start-project"
                onClick={() => setOpen(false)}
                className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-0.5"
              >
                {lang === 'en' ? 'Start Project' : '\u1355\u122E\u1300\u12AD\u1275 \u12ED\u1300\u121D\u1229'}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          )}

          <form onSubmit={sendMessage} className="p-2.5 bg-[#0B1220] border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isAdmin
                  ? 'e.g., Summarize new leads or draft reply for...'
                  : lang === 'en'
                  ? 'Ask in English or Amharic...'
                  : '\u1260\u12A0\u121B\u122D\u129B \u12C8\u12ED\u121D \u1260\u12A5\u1295\u130D\u120A\u12DD\u129B \u12ED\u1320\u12ED\u1241...'
              }
              className="flex-1 rounded-lg bg-[#162338] border border-slate-700 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}