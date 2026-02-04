import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-12 text-center text-primary relative">
          About The Vejayanthran Education Fund
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Vejayanthran Naidoo was a leading South African educator and principal who served the education community in KwaZulu Natal for over 30 years. He spent most of his career in education as a principal of Esselen Heights Primary, serving the entire school community for 21 years. Under his knowledgeable guidance and leadership, Esselen Heights grew from strength to strength becoming one of the top schools in the country.
          </p>
          <p>
            He felt it was critical to empower and capacitate all those under his leadership. The Vejayanthran Education Fund honours his commitment and continues to build the next generation of education leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
