import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SEO
        title="Terms of Service"
        description="Terms of Service for Elite Detailing - Read our service terms and conditions."
        canonical="https://elitedetailing.com/terms"
      />
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto mb-6">
              Our terms of service are currently being finalized. Detailed service terms and conditions will be available soon.
            </p>
            <div className="inline-block bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg px-6 py-3">
              <p className="text-luxury-gold font-semibold">Coming Soon</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-400 mb-4">
              Questions about our terms? Contact us:
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

export default TermsOfService;
