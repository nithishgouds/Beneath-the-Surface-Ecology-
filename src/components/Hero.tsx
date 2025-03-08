import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
      <img
  src="/IIT-Tirupati.jpg"
  alt="Water Conservation"
  className="w-full h-full object-cover"
/>

        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Water Usage Monitoring</h1>
          <p className="text-xl mb-8">Real-time water consumption analytics and insights across IIT Tirupati campus locations. Making data-driven decisions for a sustainable future.</p>
          <a
            href="#statistics"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            View Statistics
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;