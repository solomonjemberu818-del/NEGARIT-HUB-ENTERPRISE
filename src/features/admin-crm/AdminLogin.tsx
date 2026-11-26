import { useState } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setLoading(true);
    setError('');

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (authError) {
      setError(authError.message);
    } else {
      onSuccess();
    }
  };

  return (
    <div className="max-w-md mx-auto my-16 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center mb-4">
        <Lock className="w-6 h-6" />
      </div>
      <h2 className="text-2xl font-bold text-forest-950">Founder Admin Access</h2>
      <p className="text-sm text-slate-600 mt-1">Sign in with your authorized NEGARIT-HUB credentials to view client pipeline and margins.</p>

      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Admin Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="solomonjemberu818@gmail.com"
            className="w-full rounded-lg border border-slate-300 p-3 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-lg border border-slate-300 p-3 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-forest-950 hover:bg-forest-800 text-white font-semibold py-3 rounded-lg text-sm transition"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          Unlock Admin CRM
        </button>
      </form>
    </div>
  );
}