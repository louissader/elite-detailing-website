import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">
            Excellence in Every Detail
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Setting the standard for luxury automotive and aviation detailing across New England and New York.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-darkGray">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded on the principle that exceptional vehicles deserve exceptional care, we have established ourselves as the premier detailing service for discerning clients throughout New England and New York.
                </p>
                <p>
                  Our team brings years of specialized experience working with high-performance automobiles and private aircraft, understanding the unique requirements and standards that luxury assets demand.
                </p>
                <p>
                  From rare exotic cars to corporate jets, we treat every vehicle with the meticulous attention and expertise it deserves, using only premium products and proven techniques refined over years of practice.
                </p>
              </div>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-2xl font-heading text-white mb-2">Our Mission</h3>
                  <p className="text-gray-300">
                    To provide unparalleled detailing services that preserve and enhance the value of our clients' most prized possessions.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-2xl font-heading text-white mb-2">Our Vision</h3>
                  <p className="text-gray-300">
                    To be the most trusted name in luxury detailing, known for exceptional quality, reliability, and customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl text-white mb-12 text-center">
            Specialized Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-darkGray border border-gold/20 rounded-lg p-8 hover:border-gold transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-4">Exotic Automobiles</h3>
              <p className="text-gray-300">
                Extensive experience with Ferrari, Lamborghini, Porsche, McLaren, and other high-performance marques requiring specialized care and knowledge.
              </p>
            </div>

            <div className="bg-darkGray border border-gold/20 rounded-lg p-8 hover:border-gold transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-4">Private Aviation</h3>
              <p className="text-gray-300">
                Certified in aircraft detailing with deep understanding of aviation-grade materials, FAA compliance, and the unique demands of jet maintenance.
              </p>
            </div>

            <div className="bg-darkGray border border-gold/20 rounded-lg p-8 hover:border-gold transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-4">Premium Products</h3>
              <p className="text-gray-300">
                We exclusively use professional-grade ceramic coatings, pH-neutral solutions, and premium microfiber materials safe for the most delicate finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-darkGray">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-4xl text-white mb-8">
            Serving the Northeast
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We proudly service clients throughout New England and New York, with mobile detailing available for select locations and hangar services for aircraft.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-heading text-gold mb-2">Massachusetts</h3>
              <p className="text-gray-400">Greater Boston & Cape Cod</p>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-heading text-gold mb-2">Connecticut</h3>
              <p className="text-gray-400">Hartford & Coastal Areas</p>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-heading text-gold mb-2">Rhode Island</h3>
              <p className="text-gray-400">Providence & Newport</p>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-heading text-gold mb-2">New York</h3>
              <p className="text-gray-400">NYC Metro & Westchester</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl text-white mb-12 text-center">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-gold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">Precision & Care</h3>
                <p className="text-gray-300">
                  Every service is performed with surgical precision, treating each vehicle as if it were our own.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-gold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">Transparency</h3>
                <p className="text-gray-300">
                  Clear communication about services, pricing, and timelines. No hidden fees, no surprises.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-gold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">Discretion</h3>
                <p className="text-gray-300">
                  We understand the value of privacy and maintain strict confidentiality for all our clients.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-gold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We don't just meet standards—we set them. Continuous training and quality improvement are built into our process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-gold/10 to-gold/5 border-t border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our distinguished clientele and discover why we're the trusted choice for luxury detailing.
          </p>
          <a
            href="/booking"
            className="inline-block bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-lg"
          >
            Schedule Your Service
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
