import { useEffect, useState } from 'react';
import { Search, Database, ShieldCheck, LogOut, TrendingUp, DollarSign, RefreshCw, AlertCircle } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';
import { isSupabaseConfigured } from '../../lib/supabase';
import type { ProjectLead, ProjectStatus } from '../../types/database';
import { updateProjectLead } from '../lead-engine/leadService';

const ALL_STATUSES: ProjectStatus[] = [
  'INQUIRY',
  'REVIEWING',
  'QUALIFIED',
  'SCOPING',
  'PROPOSAL_SENT',
  'NEGOTIATION',
  'WON',
  'LOST',
  'ACTIVE',
  'COMPLETED',
];

export function AdminCRM({
  session,
  leads,
  setLeads,
  dbError,
  onRefresh,
  onLogout,
}: {
  session: Session;
  leads: ProjectLead[];
  setLeads: React.Dispatch<React.SetStateAction<ProjectLead[]>>;
  dbError: string | null;
  onRefresh: () => void;
  onLogout: () => void;
}) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedLead, setSelectedLead] = useState<ProjectLead | null>(null);

  useEffect(() => {
    onRefresh();
  }, []);

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.company_name.toLowerCase().includes(search.toLowerCase()) ||
      l.contact_name.toLowerCase().includes(search.toLowerCase()) ||
      (l.industry || '').toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const potentialRevenue = leads
    .filter((l) => !['WON', 'ACTIVE', 'COMPLETED', 'LOST'].includes(l.status))
    .reduce((sum, l) => sum + Number(l.estimated_revenue_etb || 0), 0);

  const contractedRevenue = leads
    .filter((l) => ['WON', 'ACTIVE', 'COMPLETED'].includes(l.status))
    .reduce((sum, l) => sum + Number(l.contracted_revenue_etb || l.estimated_revenue_etb || 0), 0);

  const receivedPayments = leads.reduce((sum, l) => sum + Number(l.received_payments_etb || 0), 0);
  const directCosts = leads
    .filter((l) => ['WON', 'ACTIVE', 'COMPLETED'].includes(l.status))
    .reduce((sum, l) => sum + Number(l.direct_delivery_cost_etb || 0), 0);

  const actualProfit = receivedPayments - directCosts;

  const handleFieldUpdate = async (id: string, updates: Partial<ProjectLead>) => {
    const ok = await updateProjectLead(id, updates);
    if (ok) {
      setLeads((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)));
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead({ ...selectedLead, ...updates });
      }
    }
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">NEGARIT-HUB Executive CRM & Financial Control</h1>
          <p className="text-xs text-slate-400 mt-1">Authenticated Founder Session: {session.user.email}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onRefresh}
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3 py-1.5 rounded-full"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh from DB
          </button>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${isSupabaseConfigured ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-300 border-amber-500/30'}`}>
            <Database className="w-3.5 h-3.5" />
            {isSupabaseConfigured ? 'PostgreSQL Connected' : 'Offline'}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#162338] text-slate-300 px-3 py-1.5 rounded-full border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Talent Ready
          </span>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center gap-1 text-xs font-semibold text-red-300 bg-red-950/60 hover:bg-red-900/60 px-3 py-1.5 rounded-full border border-red-800"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>
      </div>

      {dbError && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span><strong>Database Read Error:</strong> {dbError}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-[#162338] p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Inquiries</span>
          <p className="text-2xl font-bold text-slate-100 mt-1">{leads.length}</p>
        </div>
        <div className="bg-[#162338] p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400 uppercase font-semibold">Potential Pipeline</span>
          <p className="text-2xl font-bold text-slate-200 mt-1">ETB {potentialRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-[#162338] p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400 uppercase font-semibold">Contracted Revenue</span>
          <p className="text-2xl font-bold text-emerald-400 mt-1">ETB {contractedRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-[#162338] p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400 uppercase font-semibold flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Received Payments
          </span>
          <p className="text-2xl font-bold text-emerald-300 mt-1">ETB {receivedPayments.toLocaleString()}</p>
        </div>
        <div className="bg-[#162338] p-4 rounded-xl border border-emerald-500/30">
          <span className="text-[11px] text-slate-400 uppercase font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Actual Net Profit
          </span>
          <p className="text-2xl font-bold text-emerald-400 mt-1">ETB {actualProfit.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company, contact name, or industry..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#162338] border border-slate-800 text-sm text-slate-100"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg bg-[#162338] border border-slate-800 px-4 py-2.5 text-sm text-slate-100"
        >
          <option value="ALL">All Pipeline Stages ({leads.length})</option>
          {ALL_STATUSES.map((st) => (
            <option key={st} value={st}>{st}</option>
          ))}
        </select>
      </div>

      <div className="bg-[#162338] rounded-xl border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[#0B1220] border-b border-slate-800 text-slate-300">
            <tr>
              <th className="p-4">Organization & Industry</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Stage (10-Step)</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Est. / Contracted</th>
              <th className="p-4">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-400">
                  No records in table yet. Submit a project brief or click "Refresh from DB".
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#111C2E]/60">
                  <td className="p-4">
                    <div className="font-bold text-slate-100">{lead.company_name}</div>
                    <div className="text-xs text-emerald-400">{lead.industry || 'General'} • {lead.service_category}</div>
                  </td>
                  <td className="p-4 text-slate-300">
                    <div>{lead.contact_name}</div>
                    <div className="text-xs text-slate-400">{lead.contact_phone}</div>
                  </td>
                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) => handleFieldUpdate(lead.id, { status: e.target.value as ProjectStatus })}
                      className="rounded bg-[#0B1220] border border-slate-700 px-2.5 py-1.5 text-xs font-bold text-emerald-400"
                    >
                      {ALL_STATUSES.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4">
                    <select
                      value={lead.priority || 'MEDIUM'}
                      onChange={(e) => handleFieldUpdate(lead.id, { priority: e.target.value as 'LOW' | 'MEDIUM' | 'HIGH' })}
                      className="rounded bg-[#0B1220] border border-slate-700 px-2 py-1 text-xs text-slate-200"
                    >
                      <option value="LOW">LOW</option>
                      <option value="MEDIUM">MEDIUM</option>
                      <option value="HIGH">HIGH</option>
                    </select>
                  </td>
                  <td className="p-4 font-semibold text-slate-200">
                    ETB {Number(lead.contracted_revenue_etb || lead.estimated_revenue_etb).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => setSelectedLead(lead)}
                      className="px-3 py-1.5 rounded bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-xs font-semibold transition"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#162338] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100">{selectedLead.company_name}</h3>
                <p className="text-xs text-slate-400">{selectedLead.contact_name} • {selectedLead.contact_email} • {selectedLead.contact_phone}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="text-xs px-3 py-1.5 rounded bg-slate-800 text-slate-300"
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div className="p-3.5 rounded-lg bg-[#0B1220] border border-slate-800">
                <strong className="text-emerald-400 block mb-1">Business Problem:</strong>
                <p className="text-slate-200 leading-relaxed">{selectedLead.problem_statement}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Contracted Revenue (ETB)</label>
                  <input
                    type="number"
                    value={selectedLead.contracted_revenue_etb || 0}
                    onChange={(e) => handleFieldUpdate(selectedLead.id, { contracted_revenue_etb: Number(e.target.value) })}
                    className="w-full rounded bg-[#0B1220] border border-slate-700 p-2 text-slate-100"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Received Payments (ETB)</label>
                  <input
                    type="number"
                    value={selectedLead.received_payments_etb || 0}
                    onChange={(e) => handleFieldUpdate(selectedLead.id, { received_payments_etb: Number(e.target.value) })}
                    className="w-full rounded bg-[#0B1220] border border-slate-700 p-2 text-slate-100"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Direct Cost (ETB)</label>
                  <input
                    type="number"
                    value={selectedLead.direct_delivery_cost_etb || 0}
                    onChange={(e) => handleFieldUpdate(selectedLead.id, { direct_delivery_cost_etb: Number(e.target.value) })}
                    className="w-full rounded bg-[#0B1220] border border-slate-700 p-2 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Internal Founder Notes & Follow-Up Plan</label>
                <textarea
                  rows={3}
                  value={selectedLead.internal_notes || ''}
                  onChange={(e) => handleFieldUpdate(selectedLead.id, { internal_notes: e.target.value })}
                  placeholder="Record call notes, scope revisions, or follow-up reminders..."
                  className="w-full rounded bg-[#0B1220] border border-slate-700 p-2.5 text-slate-100"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}