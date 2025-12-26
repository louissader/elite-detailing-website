import React from 'react';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="group bg-luxury-dark-gray hover:bg-luxury-medium-gray transition-all duration-500 p-8 border border-luxury-gold/20 hover:border-luxury-gold relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="text-luxury-gold text-5xl mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-luxury-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-luxury-white/70 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features list */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-luxury-white/60">
            <span className="text-luxury-gold mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Learn More Link */}
      <a
        href="#"
        className="inline-flex items-center text-luxury-gold hover:text-luxury-dark-gold transition-colors duration-300 uppercase text-xs tracking-widest font-semibold group"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
};

const FeaturedServices = () => {
  const services = [
    {
      icon: '🚗',
      title: 'Luxury Auto Detailing',
      description: 'Meticulous care for your prestigious automobiles. From exotic sports cars to luxury sedans, we treat every vehicle with the reverence it deserves.',
      features: [
        'Paint correction & ceramic coating',
        'Interior deep cleaning & conditioning',
        'Engine bay detailing',
        'Chrome & wheel restoration'
      ]
    },
    {
      icon: '✈️',
      title: 'Private Jet Detailing',
      description: 'Exclusive detailing services for private aircraft. Our certified team ensures your jet maintains its pristine condition inside and out.',
      features: [
        'Exterior wash & polish',
        'Cabin deep cleaning & sanitization',
        'Leather treatment & conditioning',
        'Window & windscreen treatment'
      ]
    },
    {
      icon: '⭐',
      title: 'Premium Protection',
      description: 'Long-lasting protection packages that preserve your investment. Advanced coatings and treatments for ultimate durability.',
      features: [
        'Multi-year ceramic coating',
        'Paint protection film (PPF)',
        'Interior fabric & leather protection',
        'Maintenance programs available'
      ]
    }
  ];

  return (
    <section className="py-24 bg-luxury-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)'
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-luxury-gold uppercase tracking-widest text-sm mb-4 font-semibold">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-6">
            Exceptional Services for
            <span className="block text-luxury-gold mt-2">
              Exceptional Vehicles
            </span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-16">
          <button className="btn-secondary">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
