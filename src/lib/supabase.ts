import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl.startsWith('https://') && supabaseAnonKey.length > 10
);

let client: SupabaseClient | null = null;
if (isSupabaseConfigured) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.error('Supabase init failed:', err);
  }
}

export const supabase = client;