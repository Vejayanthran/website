import React from 'react';

const Scholarship = () => {
  const eligibilityItems = [
    { title: 'Gender', description: 'Females only' },
    { title: 'Teaching Subjects', description: 'Accounting, English, Mathematics, Physical Sciences, Natural Sciences' },
    { title: 'Academic Requirements', description: 'Minimum 70% average across teaching subjects' },
    { title: 'Financial Need', description: 'Combined gross income less than R350,000 per year' },
    { title: 'Citizenship', description: 'Must be a South African citizen' },
    { title: 'Residency', description: 'Must be a day student residing in Cape Town' },
  ];

  return (
    <section id="scholarship" className="bg-gray-100 py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center text-primary relative">
          The Vejayanthran Scholarship
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16 bg-white p-12 border-3 border-primary">
          <h3 className="text-3xl text-primary mb-6 uppercase">Scholarship Overview</h3>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Selected scholarship recipients will receive a scholarship up to the value of R100,000 to pursue a Postgraduate Certificate in Education (PGCE) at the University of Cape Town. Tuition Fees for the PGCE (approx R70,000 in 2025) will be paid in full (this does NOT including residence fees, we only accept day students who live in Cape Town) and a sum of R30,000 will be granted towards travel and other living expenses.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            This scholarship aims to remove financial barriers, enabling future educators to focus on their studies and professional development.
          </p>
        </div>

        <h3 className="text-center text-primary mb-8 text-3xl uppercase font-black">Eligibility Criteria</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {eligibilityItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 border-l-[5px] border-l-yellow shadow-lg hover:translate-x-2 transition-transform"
            >
              <h4 className="text-primary mb-2 text-xl uppercase font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            disabled
            className="inline-block px-12 py-4 bg-gray-400 text-white font-bold uppercase tracking-wider border-3 border-gray-400 cursor-not-allowed opacity-60 text-lg"
            title="Applications open October 2026"
          >
            Apply Now (Opening Oct 2026)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
