import React, { useState, useEffect, useRef, useCallback } from 'react';

const BeforeAfterGallery = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  // Handle ESC key to close modal
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
    // Trap focus within modal
    if (e.key === 'Tab' && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }, []);

  // Open modal and manage focus
  const openModal = (item, triggerElement) => {
    triggerRef.current = triggerElement;
    setSelectedImage(item);
  };

  // Close modal and restore focus
  const closeModal = () => {
    setSelectedImage(null);
    // Return focus to the trigger element
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  // Focus close button when modal opens
  useEffect(() => {
    if (selectedImage && closeButtonRef.current) {
      closeButtonRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  // Add/remove keydown listener
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, handleKeyDown]);

  // Handle card click/keypress
  const handleCardInteraction = (item, e) => {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(item, e.currentTarget);
    }
  };

  return (
    <div className="space-y-8">
      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={(e) => handleCardInteraction(item, e)}
            onKeyDown={(e) => handleCardInteraction(item, e)}
            aria-label={`View ${item.title} before and after comparison`}
          >
            <div className="relative overflow-hidden bg-luxury-medium-gray aspect-video border border-luxury-gold/20 hover:border-luxury-gold focus-within:border-luxury-gold transition-all duration-300">
              {/* Placeholder for before/after images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-luxury-gold/30 text-4xl mb-2" aria-hidden="true">
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
              <div className="absolute inset-0 bg-luxury-black/80 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-luxury-gold mx-auto mb-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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

      {/* Accessible Lightbox Modal */}
      {selectedImage && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 bg-luxury-black/95 z-50 flex items-center justify-center p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative max-w-4xl w-full">
            <button
              ref={closeButtonRef}
              className="absolute -top-12 right-0 text-luxury-white hover:text-luxury-gold focus:text-luxury-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold rounded p-1"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="bg-luxury-dark-gray border border-luxury-gold p-8">
              <div className="aspect-video bg-luxury-medium-gray flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-luxury-gold text-6xl mb-4" aria-hidden="true">
                    {selectedImage.icon}
                  </div>
                  <h2 id="modal-title" className="text-luxury-white text-lg">
                    {selectedImage.title}
                  </h2>
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
