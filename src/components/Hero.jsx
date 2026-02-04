import React from 'react';
import container03 from '../assets/images/container03.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center text-center text-white px-6 lg:px-12 pt-32 pb-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 37, 35, 0.7), rgba(37, 37, 35, 0.7)), url(${container03})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tight">
          Fund the next generation<br />
          of South African 🇿🇦<br />
          <span className="text-yellow block mt-2">leaders</span> in education
        </h1>
        <p className="text-2xl md:text-3xl mb-12 opacity-95 font-light">
          We are building the next generation of world class teachers
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a 
            href="https://donate.stripe.com/28o8wT5pp9bp5MsfYY" 
            className="px-12 py-4 bg-yellow text-primary font-bold uppercase tracking-wider border-3 border-yellow hover:bg-transparent hover:text-yellow hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,205,66,0.3)] transition-all"
          >
            Donate Now
          </a>
          <a 
            href="#mission" 
            className="px-12 py-4 bg-transparent text-white border-3 border-white hover:bg-white hover:text-primary hover:-translate-y-1 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
