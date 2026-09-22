import React, { useState } from 'react';
import { galleryImages } from '../data';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'herringbone', label: 'Herringbone' },
    { id: 'spc', label: 'SPC Waterproof' },
    { id: 'laminate', label: 'Laminate Wood' },
    { id: 'swatches', label: 'Samples & Swatches' },
  ];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">
            Real Work Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Work & Product Gallery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explore authentic images of our recent flooring installations, swatches, and site finishings across Qatar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative h-60 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer shadow-md hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-slate-900/80 border border-slate-700 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    {image.title}
                  </p>
                  <span className="text-[10px] uppercase font-semibold text-amber-400/80 tracking-wider">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain bg-slate-950"
            />
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
              <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
              <p className="text-xs text-amber-400 uppercase font-semibold mt-1">Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}