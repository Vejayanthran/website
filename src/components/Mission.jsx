import React from 'react';
import { Link } from 'react-router-dom';
import image04 from '../assets/images/image04.jpg';

const Mission = () => {
  return (
    <section id="mission" className="bg-primary text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center text-white relative">
          Our Mission
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md p-12 text-center border-3 border-yellow">
            <div className="text-6xl font-black text-yellow mb-2">20</div>
            <div className="text-xl font-semibold uppercase tracking-wide text-white">Teachers by 2030</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-12 text-center border-3 border-yellow">
            <div className="text-6xl font-black text-yellow mb-2">R100K</div>
            <div className="text-xl font-semibold uppercase tracking-wide text-white">Per Scholarship</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-12 text-center border-3 border-yellow">
            <div className="text-6xl font-black text-yellow mb-2">#1</div>
            <div className="text-xl font-semibold uppercase tracking-wide text-white">University in Africa</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Our Solution</h3>
            <p className="text-lg text-white/90 mb-4 leading-relaxed">
              Our mission is to develop 20 new world-class teachers by 2030 by providing scholarships to high-potential students, who face financial constraints, to pursue a Postgraduate Certificate in Education (PGCE) at the University of Cape Town, the number one ranked university on the continent.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              World class teachers are essential to bridging educational gaps and fostering a higher standard of learning, especially in communities that face socio-economic challenges.
            </p>
          </div>
          <div>
            <img 
              src={image04} 
              alt="Teaching" 
              className="w-full shadow-[20px_20px_0_#ffcd42] hover:shadow-[25px_25px_0_#ffcd42] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            />
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/mission" 
            className="inline-block px-12 py-4 bg-yellow text-primary font-bold uppercase tracking-wider border-3 border-yellow hover:bg-yellow/90 transition-colors text-lg"
          >
            Read Our Mission in Full
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission;
