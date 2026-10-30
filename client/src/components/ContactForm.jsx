import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    entity: 'USG Consultants',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      if (response.status === 201) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', entity: 'USG Consultants', message: '' });
      }
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Failed to send inquiry. Please try again.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
              Connect With <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Unique Solution Group</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We would love to hear from you. Please fill out the form below.
            </p>
          </div>

          {status.success && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3">
              <CheckCircle size={20} />
              <span className="text-sm font-medium">Your inquiry has been submitted successfully! We will get back to you soon.</span>
            </div>
          )}

          {status.error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center gap-3">
              <AlertCircle size={20} />
              <span className="text-sm font-medium">{status.error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter first name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter last name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="name@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Select Entity / Pillar</label>
              <select 
                name="entity" 
                value={formData.entity} 
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition"
              >
                <option value="USG Consultants" className="bg-slate-900 text-white">USG Consultants</option>
                <option value="USG Spices" className="bg-slate-900 text-white">USG Spices</option>
                <option value="USG Enterprises" className="bg-slate-900 text-white">USG Enterprises</option>
                <option value="USG Foundation" className="bg-slate-900 text-white">USG Foundation</option>
                <option value="General Inquiry" className="bg-slate-900 text-white">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Message</label>
              <textarea 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Type your message or inquiry here..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status.loading}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-4 rounded-xl transition duration-200 shadow-xl glow-gold flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              {status.loading ? 'Submitting Inquiry...' : <>Submit Inquiry <Send size={18} /></>}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;