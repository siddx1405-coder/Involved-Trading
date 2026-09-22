import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { services, companyInfo } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Professional flooring supply and installation services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}