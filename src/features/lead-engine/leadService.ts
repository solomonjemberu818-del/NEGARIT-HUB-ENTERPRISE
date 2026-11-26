import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import type { ProjectLead } from '../../types/database';

export async function fetchProjectLeads(): Promise<{ data: ProjectLead[]; error: string | null }> {
  if (!isSupabaseConfigured || !supabase) {
    return { data: [], error: 'Supabase .env keys are not loaded. Restart npm run dev.' };
  }
  const { data, error } = await supabase
    .from('project_leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return { data: [], error: error.message };
  }
  return { data: (data as ProjectLead[]) || [], error: null };
}

export async function createProjectLead(lead: Omit<ProjectLead, 'id' | 'created_at'>): Promise<ProjectLead> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase configuration missing. Check .env file.');
  }

  const { error } = await supabase.from('project_leads').insert([lead]);
  if (error) {
    throw new Error(`Supabase Insert Error: ${error.message}`);
  }

  return {
    ...lead,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
  };
}

export async function updateProjectLead(id: string, updates: Partial<ProjectLead>): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase) return false;
  const { error } = await supabase.from('project_leads').update(updates).eq('id', id);
  if (error) {
    alert(`Update Error: ${error.message}`);
    return false;
  }
  return true;
}