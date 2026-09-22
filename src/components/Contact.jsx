import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Herringbone (Zig-Zag) Flooring',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message URL with pre-filled user inputs
    const message = `*New Website Lead*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Interested Service:* ${formData.service}%0A*Notes:* ${formData.notes || 'None'}`;
    
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Upgrade Your Floors?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Contact us today for free site measurement, sample inspection, and instant quotations in Qatar.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Reach out to us directly or send an inquiry via WhatsApp for immediate response.
              </p>

              <div className="mt-8 space-y-6">
                
                {/* Phone */}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone / Mobile</span>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-amber-400 transition-colors">
                      {companyInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-amber-400 transition-colors break-all">
                      {companyInfo.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-slate-100">
                      {companyInfo.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="pt-6 border-t border-slate-800">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Inquiry Sent via WhatsApp!</h3>
                <p className="text-slate-400 text-xs max-w-md mx-auto">
                  Thank you for reaching out to INVOLVED TRADING & CONTRACTING W.L.L. Our flooring team will respond shorty.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-700 text-slate-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-4">Quick Quotation Form</h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed Al-Mansoori"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 text-sm rounded-xl p-3 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number (Qatar)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+974 30815132"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 text-sm rounded-xl p-3 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Interested Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 text-sm rounded-xl p-3 focus:outline-none focus:border-amber-400"
                  >
                    <option>Herringbone (Zig-Zag) Flooring</option>
                    <option>Laminate Wooden Flooring</option>
                    <option>SPC Waterproof Flooring (Straight)</option>
                    <option>SPC Waterproof Flooring (Standard)</option>
                    <option>SPC Waterproof Chevron Flooring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Additional Project Details / Room Area
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Mention approximate room dimensions or installation dates..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 text-sm rounded-xl p-3 focus:outline-none focus:border-amber-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}