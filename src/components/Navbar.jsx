import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { companyInfo } from '../data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]">
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-10 w-auto rounded bg-white p-1 shadow-md border border-slate-700"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                INVOLVED
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider uppercase -mt-1">
                TRADING & CONTRACTING W.L.L
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors duration-300 px-3 py-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{companyInfo.phone}</span>
            </a>

            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md hover:shadow-amber-400/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 transition-colors duration-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-80 border-b border-slate-800 bg-slate-950' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-300"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{companyInfo.phone}</span>
            </a>

            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}