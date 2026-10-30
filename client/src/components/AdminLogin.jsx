import React, { useState } from 'react';
import axios from 'axios';
import { Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Fallback URL handle karne ke liye agar VITE_API_URL set na ho
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        email,
        password
      });

      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        onLoginSuccess();
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Invalid login credentials or server connection failed.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-slate-950">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative">
        
        {/* Top Icon Badge */}
        <div className="mx-auto w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-400 mb-6 shadow-inner">
          <Lock size={28} />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
            Admin Portal Login
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Enter your credentials to manage inquiries.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center gap-3 text-xs sm:text-sm font-medium">
            <AlertCircle size={20} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail size={18} />
              </span>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="admin@uniquesolutiongroup.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition shadow-inner"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </span>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition shadow-inner"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-4 rounded-xl transition duration-200 shadow-xl glow-gold flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer mt-2"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Logging in...
              </>
            ) : (
              'Login to Dashboard'
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default AdminLogin;