import React, { useState } from 'react';

const BeforeAfterGallery = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-8">
      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <div className="relative overflow-hidden bg-luxury-medium-gray aspect-video border border-luxury-gold/20 hover:border-luxury-gold transition-all duration-300">
              {/* Placeholder for before/after images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-luxury-gold/30 text-4xl mb-2">
                    {item.icon}
                  </div>
                  <p className="text-luxury-white/40 text-sm">
                    {item.title}
                  </p>
                  <p className="text-luxury-gold/60 text-xs mt-1">
                    Before/After
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-luxury-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-luxury-gold mx-auto mb-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                  </svg>
                  <p className="text-luxury-white text-sm uppercase tracking-wider">
                    View Details
                  </p>
                </div>
              </div>
            </div>

            {/* Image Caption */}
            <div className="mt-3">
              <h4 className="text-luxury-white font-semibold text-sm mb-1">
                {item.title}
              </h4>
              <p className="text-luxury-white/60 text-xs">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (Simple version - can be enhanced) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-luxury-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-luxury-white hover:text-luxury-gold"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="bg-luxury-dark-gray border border-luxury-gold p-8">
              <div className="aspect-video bg-luxury-medium-gray flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-luxury-gold text-6xl mb-4">
                    {selectedImage.icon}
                  </div>
                  <p className="text-luxury-white text-lg">
                    {selectedImage.title}
                  </p>
                  <p className="text-luxury-gold text-sm mt-2">
                    Before/After Comparison
                  </p>
                </div>
              </div>
              <p className="text-luxury-white/80 text-center">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterGallery;
