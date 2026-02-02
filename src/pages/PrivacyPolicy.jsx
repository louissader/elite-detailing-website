import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Elite Detailing - Learn how we protect your personal information."
        canonical="https://elitedetailing.com/privacy"
      />
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto mb-6">
              Our privacy policy is currently being finalized. We take your privacy seriously and will have detailed information available soon.
            </p>
            <div className="inline-block bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg px-6 py-3">
              <p className="text-luxury-gold font-semibold">Coming Soon</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-400 mb-4">
              Questions about your privacy? Contact us:
            </p>
            <a
              href="mailto:louissader42@gmail.com"
              className="text-luxury-gold hover:text-luxury-gold/80 transition-colors"
            >
              louissader42@gmail.com
            </a>
          </div>

          <div className="mt-12">
            <Link to="/">
              <button className="btn-primary min-h-[44px]">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
