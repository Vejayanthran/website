import React from 'react';

const Support = () => {
  return (
    <section 
      id="support" 
      className="bg-gradient-to-br from-primary to-[#3a3a38] text-white py-24 px-6 lg:px-12 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8 relative">
          Join Our Aspiring Teachers Support Group
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
        </h2>
        <p className="text-xl mb-6 leading-relaxed">
          While the <strong>Vejayanthran Scholarship</strong> is awarded to only a limited number of candidate per year, we remain deeply committed to supporting all aspiring teachers on their journey to becoming exceptional educators.
        </p>
        <p className="text-xl mb-12 leading-relaxed">
          By signing up for our <strong>Aspiring Teachers Support Group</strong>, you'll gain access to <strong>valuable mentorship, resources, and guidance</strong> to help you succeed in your teaching career.
        </p>
        <a 
          href="https://forms.gle/6WPX1G2rme6Gh1n39" 
          className="inline-block px-12 py-4 bg-yellow text-primary font-bold uppercase tracking-wider border-3 border-yellow hover:bg-transparent hover:text-yellow hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,205,66,0.3)] transition-all text-lg"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
};

export default Support;
