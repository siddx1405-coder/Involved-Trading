import React from 'react';
import { MessageSquare, Phone, Mail, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={companyInfo.logo}
                alt={companyInfo.name}
                className="h-10 w-auto rounded bg-white p-1"
              />
              <div>
                <span className="block text-base font-bold text-amber-400">INVOLVED</span>
                <span className="block text-[10px] text-slate-400 tracking-wider">TRADING & CONTRACTING W.L.L</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Qatar's trusted specialists in Herringbone, Laminate, and 100% Waterproof SPC flooring supply and precision installation.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider mb-3">Direct Contact</h4>
            
            {/* Phone (Triggers Dialer) */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{companyInfo.phone}</span>
            </a>

            {/* Email (Triggers Email Client) */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{companyInfo.email}</span>
            </a>

            <p className="flex items-center gap-2 text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Doha, Qatar — Licensed Contracting</span>
            </p>
          </div>

        </div>

        {/* Copyright & Agency Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </div>
          <div>
            Made by{' '}
            <a
              href="https://www.xenosysweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold hover:underline hover:text-amber-300 transition-colors"
            >
              xenosysweb
            </a>
          </div>
        </div>
      </div>

      {/* Floating Sticky WhatsApp Quick Button */}
      <a
        href={`https://wa.me/${companyInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group"
      >
        <MessageSquare className="w-6 h-6 fill-slate-950" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold whitespace-nowrap pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </footer>
  );
}