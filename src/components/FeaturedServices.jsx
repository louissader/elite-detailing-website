import React from 'react';
import { Link } from 'react-router-dom';

// Accessible SVG icons with aria-label
const ServiceIcon = ({ type, className = "w-10 h-10 sm:w-12 sm:h-12" }) => {
  const icons = {
    car: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    jet: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    star: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    )
  };
  return icons[type] || icons.star;
};

// Mobile-first service card following FRD guidelines
const ServiceCard = ({ iconType, iconLabel, title, description, features }) => {
  return (
    <div className="group bg-luxury-dark-gray hover:bg-luxury-medium-gray transition-all duration-300 p-4 sm:p-6 border border-luxury-gold/20 hover:border-luxury-gold rounded-sm focus-within:border-luxury-gold">
      {/* Icon - Responsive sizing with accessible label */}
      <div className="text-luxury-gold mb-3 sm:mb-4" role="img" aria-label={iconLabel}>
        <ServiceIcon type={iconType} className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>

      {/* Title - Mobile-first typography (FRD: H2 24px-28px on mobile) */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-luxury-white mb-2 sm:mb-3 group-hover:text-luxury-gold transition-colors duration-300">
        {title}
      </h3>

      {/* Description - FRD: 16px minimum body text */}
      <p className="text-sm sm:text-base text-luxury-white/80 mb-3 sm:mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features list - Condensed */}
      <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start text-xs sm:text-sm text-luxury-white/70">
            <svg className="w-4 h-4 text-luxury-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Learn More Link */}
      <Link
        to="/services"
        className="inline-flex items-center text-luxury-gold hover:text-luxury-dark-gold focus:text-luxury-dark-gold transition-colors duration-300 uppercase text-xs tracking-wider font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold rounded"
      >
        Learn More
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

const FeaturedServices = () => {
  const services = [
    {
      iconType: 'car',
      iconLabel: 'Luxury automobile icon',
      title: 'Luxury Auto Detailing',
      description: 'Meticulous care for exotic sports cars and luxury sedans.',
      features: [
        'Paint correction & ceramic coating',
        'Interior deep cleaning',
        'Engine bay detailing'
      ]
    },
    {
      iconType: 'jet',
      iconLabel: 'Private jet icon',
      title: 'Private Jet Detailing',
      description: 'Exclusive detailing for private aircraft with certified expertise.',
      features: [
        'Exterior wash & polish',
        'Cabin deep cleaning',
        'Leather treatment'
      ]
    },
    {
      iconType: 'star',
      iconLabel: 'Premium star icon',
      title: 'Premium Protection',
      description: 'Long-lasting protection packages that preserve your investment.',
      features: [
        'Multi-year ceramic coating',
        'Paint protection film (PPF)',
        'Maintenance programs'
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-luxury-black relative" aria-labelledby="services-heading">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header - Mobile-first responsive spacing */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <p className="text-luxury-gold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3 font-semibold">
            Our Services
          </p>
          {/* FRD: H1 28px-36px on mobile */}
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-white mb-3 sm:mb-4">
            Exceptional Services for
            <span className="block text-luxury-gold mt-1 sm:mt-2">
              Exceptional Vehicles
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-luxury-gold mx-auto" aria-hidden="true"></div>
        </div>

        {/* Services Grid - FRD: Mobile 1 col, Tablet 2 col, Desktop 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* View All Services Button - Full width on mobile, auto on larger */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <Link to="/services" className="w-full sm:w-auto inline-block">
            <button className="btn-secondary w-full sm:w-auto">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
