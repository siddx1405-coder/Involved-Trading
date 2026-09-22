import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24 border-b border-slate-800">
      {/* Glow / Ambient Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Promo Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Qatar Flooring & Professional Fitting</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
              Transform Your Space With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Luxury Flooring</span> Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Specialized in <strong className="text-slate-200">Herringbone (Zig-Zag)</strong>, <strong className="text-slate-200">100% Waterproof SPC</strong>, and <strong className="text-slate-200">Laminate Wooden Flooring</strong> with end-to-end installation across Qatar.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-xs font-medium text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Expert Installation</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Waterproof SPC</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>From 99 QAR / m²</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello INVOLVED TRADING! I would like to inquire about flooring installation services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg hover:shadow-amber-400/20 flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              
            </div>
          </div>

          {/* Right Visual Image Masonry Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <div className="space-y-3">
                <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                  <img
                    src="/assets/img3.jpg"
                    alt="Herringbone Flooring Showcase"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-amber-300">Herringbone Zig-Zag</span>
                </div>
                <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                  <img
                    src="/assets/img6.jpg"
                    alt="Waterproof SPC Test"
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-emerald-300">100% Waterproof</span>
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                  <img
                    src="/assets/img5.jpg"
                    alt="SPC Modern Interior"
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-amber-300">SPC Living Interior</span>
                </div>
                <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                  <img
                    src="/assets/img10.jpg"
                    alt="Commercial Light Oak Flooring"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-slate-200">Commercial fitting</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}