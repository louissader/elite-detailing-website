import React from 'react';

const TrustIndicators = () => {
  const certifications = [
    {
      title: 'Certified Detailer',
      organization: 'International Detailing Association',
      icon: '🏆'
    },
    {
      title: 'Ceramic Pro',
      organization: 'Authorized Installer',
      icon: '✓'
    },
    {
      title: 'Aviation Certified',
      organization: 'FAA Approved Services',
      icon: '✈️'
    },
    {
      title: 'Insured & Bonded',
      organization: '$5M Liability Coverage',
      icon: '🛡️'
    }
  ];

  const testimonials = [
    {
      quote: "Absolutely phenomenal work on my Bentley Continental. The attention to detail is unmatched. They treated my car like it was their own.",
      author: "Michael Richardson",
      title: "Luxury Car Owner",
      rating: 5
    },
    {
      quote: "Our corporate jet has never looked better. Professional, discreet, and thorough. They understand the unique needs of aircraft detailing.",
      author: "Sarah Chen",
      title: "Private Aviation Client",
      rating: 5
    },
    {
      quote: "The ceramic coating has kept my McLaren looking showroom fresh for over two years. Worth every penny. Highly recommend their premium services.",
      author: "James Whitmore",
      title: "Exotic Car Collector",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-luxury-dark-gray relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-luxury-gold uppercase tracking-widest text-sm mb-4 font-semibold">
              Trust & Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-white">
              Certified Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-luxury-black border border-luxury-gold/30 p-6 text-center hover:border-luxury-gold transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h3 className="text-luxury-gold font-semibold mb-2 text-lg">
                  {cert.title}
                </h3>
                <p className="text-luxury-white/60 text-sm">
                  {cert.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-luxury-gold uppercase tracking-widest text-sm mb-4 font-semibold">
              Client Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-6">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-luxury-black border border-luxury-gold/20 p-8 relative group hover:border-luxury-gold transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="text-luxury-gold/20 text-6xl font-serif absolute top-4 right-6 group-hover:text-luxury-gold/30 transition-colors duration-300">
                  "
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-luxury-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-luxury-white/80 mb-6 leading-relaxed italic relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-luxury-gold/20 pt-4">
                  <p className="text-luxury-gold font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-luxury-white/50 text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="border-t-2 border-luxury-gold pt-6">
            <p className="text-4xl font-bold text-luxury-white mb-2">15+</p>
            <p className="text-luxury-white/60 uppercase tracking-wider text-sm">
              Years of Excellence
            </p>
          </div>
          <div className="border-t-2 border-luxury-gold pt-6">
            <p className="text-4xl font-bold text-luxury-white mb-2">A+</p>
            <p className="text-luxury-white/60 uppercase tracking-wider text-sm">
              BBB Accredited
            </p>
          </div>
          <div className="border-t-2 border-luxury-gold pt-6">
            <p className="text-4xl font-bold text-luxury-white mb-2">24/7</p>
            <p className="text-luxury-white/60 uppercase tracking-wider text-sm">
              Concierge Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
