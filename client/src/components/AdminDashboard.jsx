import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LogOut, Mail, Phone, Calendar, Building, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedIds, setExpandedIds] = useState({});

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await axios.get(`${apiUrl}/api/contact`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setInquiries(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch inquiries. Unauthorized access.');
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  const toggleMessage = (id) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Admin Dashboard - Inquiries
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Manage and review all incoming client messages securely.
          </p>
        </div>
        <button 
          onClick={onLogout} 
          className="bg-rose-600 hover:bg-rose-500 text-white px-5 py-2.5 rounded-xl font-bold transition flex items-center gap-2 text-sm shadow-lg cursor-pointer"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
            Loading inquiries...
          </div>
        ) : error ? (
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-3xl p-6 text-center text-rose-400 font-medium">
            {error}
          </div>
        ) : inquiries.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
            No inquiries found.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {inquiries.map((item) => {
              const isExpanded = !!expandedIds[item._id];

              return (
                <div 
                  key={item._id} 
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 shadow-xl transition duration-300 relative overflow-hidden"
                >
                  {/* Card Header Info */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg">
                        {item.firstName?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.firstName} {item.lastName}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full mt-1 border border-amber-500/20">
                          <Building size={12} /> {item.entity}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                        <Mail size={14} className="text-amber-400" /> {item.email}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                        <Phone size={14} className="text-amber-400" /> {item.phone}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                        <Calendar size={14} className="text-amber-400" /> {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Message Box - Fully Readable & Expandable */}
                  <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      <MessageSquare size={14} className="text-amber-400" /> Client Message:
                    </div>
                    
                    <p className={`text-slate-200 text-sm leading-relaxed whitespace-pre-wrap break-words ${
                      isExpanded ? '' : 'line-clamp-3'
                    }`}>
                      {item.message}
                    </p>

                    {item.message && item.message.length > 120 && (
                      <button 
                        onClick={() => toggleMessage(item._id)} 
                        className="mt-3 inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-bold focus:outline-none bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20 transition cursor-pointer"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp size={14} /></>
                        ) : (
                          <>Read Full Message <ChevronDown size={14} /></>
                        )}
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;