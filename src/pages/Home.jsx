import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import TrustIndicators from '../components/TrustIndicators';

const Home = () => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <TrustIndicators />
    </div>
  );
};

export default Home;
