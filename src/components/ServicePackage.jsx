import React from 'react';

const ServicePackage = ({
  tier,
  title,
  price,
  priceNote,
  features,
  popular,
  vehicleType
}) => {
  return (
    <div className={`relative bg-luxury-dark-gray border-2 ${
      popular ? 'border-luxury-gold' : 'border-luxury-gold/20'
    } p-8 hover:border-luxury-gold transition-all duration-300 group`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-luxury-gold text-luxury-black px-6 py-2 text-xs font-bold uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      {/* Tier Badge */}
      <div className="mb-6">
        <span className="text-luxury-gold text-sm uppercase tracking-widest font-semibold">
          {tier}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-luxury-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-6 border-b border-luxury-gold/20 pb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-luxury-gold">
            {price}
          </span>
          {priceNote && (
            <span className="ml-2 text-luxury-white/60 text-sm">
              {priceNote}
            </span>
          )}
        </div>
        {vehicleType && (
          <p className="text-luxury-white/50 text-sm mt-2">
            {vehicleType}
          </p>
        )}
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-luxury-white/80">
            <svg
              className="w-5 h-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className={`w-full ${
        popular ? 'btn-primary' : 'btn-secondary'
      } justify-center`}>
        Select Package
      </button>
    </div>
  );
};

export default ServicePackage;
