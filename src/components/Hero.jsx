import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-transparent z-10"></div>

      {/* Placeholder for background image - Replace with actual luxury car/jet image */}
      <div className="absolute inset-0 bg-luxury-dark-gray">
        <div className="w-full h-full flex items-center justify-center text-luxury-gold/20 text-6xl">
          {/* Temporary placeholder - replace with actual image */}
          <div className="text-center">
            <p className="text-sm tracking-widest">Background Image:</p>
            <p className="text-lg mt-2">Luxury Vehicle or Private Jet</p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {/* Accent Line */}
            <div className="w-20 h-1 bg-luxury-gold mb-8"></div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-luxury-white mb-6 leading-tight">
              Precision Detailing
              <span className="block text-luxury-gold mt-2">
                For Elite Vehicles
              </span>
            </h1>

            {/* Tagline/Value Proposition */}
            <p className="text-xl md:text-2xl text-luxury-white/80 mb-12 leading-relaxed font-light">
              Experience unparalleled care for your luxury automobiles and private jets.
              Where craftsmanship meets perfection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/booking">
                <button className="btn-primary">
                  Book Now
                </button>
              </Link>
              <Link to="/booking">
                <button className="btn-secondary">
                  Get a Quote
                </button>
              </Link>
            </div>

            {/* Trust Indicators - Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="border-l-2 border-luxury-gold pl-4">
                <p className="text-3xl font-bold text-luxury-gold">15+</p>
                <p className="text-sm text-luxury-white/60 uppercase tracking-wider mt-1">
                  Years Experience
                </p>
              </div>
              <div className="border-l-2 border-luxury-gold pl-4">
                <p className="text-3xl font-bold text-luxury-gold">500+</p>
                <p className="text-sm text-luxury-white/60 uppercase tracking-wider mt-1">
                  Satisfied Clients
                </p>
              </div>
              <div className="border-l-2 border-luxury-gold pl-4">
                <p className="text-3xl font-bold text-luxury-gold">100%</p>
                <p className="text-sm text-luxury-white/60 uppercase tracking-wider mt-1">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-luxury-gold text-xs uppercase tracking-widest mb-2">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-luxury-gold"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
