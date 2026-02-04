import React from 'react';
import image02 from '../assets/images/image02.jpg';

const EducationCrisis = () => {
  return (
    <section id="education-crisis" className="bg-primary text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={image02} 
              alt="Education" 
              className="w-full shadow-[20px_20px_0_#ffcd42] hover:shadow-[25px_25px_0_#ffcd42] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">South Africa's Education Crisis</h2>
            <p className="text-lg text-white/90 mb-4 leading-relaxed">
              South Africa faces a significant decline in the number of aspiring teachers due to the discontinuation of NSFAS funding for the Postgraduate Certificate in Education (PGCE). At the University of Cape Town, 3,000 aspiring teachers apply annually for just 300 available spots.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Financial constraints, cited as the primary barrier, prevent 200 aspiring teachers—40% of those offered places—from pursuing their dreams. This drop off threatens to deepen the shortage of qualified teachers, particularly impacting schools in under-resourced areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCrisis;
