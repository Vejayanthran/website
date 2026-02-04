import React from 'react';
import image05 from '../assets/images/image05.jpg';

const Fellows = () => {
  return (
    <section id="fellows" className="bg-primary text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center relative">
          Vejayanthran Candidate Fellows
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Photo and Success Story side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-16 mb-12">
            <div>
              <img 
                src={image05} 
                alt="Tshepiso Bogacwi" 
                className="w-full border-[5px] border-yellow shadow-[0_0_0_10px_rgba(255,205,66,0.2)]"
              />
            </div>
            <div>
              <h3 className="text-4xl text-yellow mb-4 uppercase">Tshepiso Bogacwi</h3>
              <p className="text-xl mb-6 text-yellow font-semibold">
                Vejayanthran Candidate Fellow 1 • Now Teaching!
              </p>
              <div className="p-6 bg-yellow/10 border-l-4 border-yellow">
                <p className="text-lg font-semibold text-yellow mb-2">🎓 Success Story</p>
                <p className="text-lg opacity-90 leading-relaxed">
                  Tshepiso has successfully completed her <strong>Postgraduate Certificate in Education (PGCE) at the University of Cape Town</strong> and is now a professionally registered educator with the South African Council for Educators (SACE). We are thrilled to announce that she has secured her first teaching position at <strong>Edison Century City High School</strong>, where she will be inspiring the next generation of learners in Mathematics and Science.
                </p>
              </div>
            </div>
          </div>
          
          {/* Full-width text below */}
          <div className="w-full">
            <p className="text-lg mb-4 opacity-90 leading-relaxed">
              Tshepiso Bogacwi was selected as the very first <strong>Vejayanthran Candidate Fellow</strong>, representing the mission and vision of the Vejayanthran Education Fund. With a <strong>BSc in Chemical Science (Chemistry) from the University of the Western Cape</strong>, she brings a strong academic foundation in Mathematics, Physical Sciences, and Natural Sciences—subjects that are essential in shaping the critical thinkers and problem-solvers of tomorrow.
            </p>
            <p className="text-lg mb-4 opacity-90 leading-relaxed">
              Her journey from scholarship recipient to qualified educator exemplifies the transformative impact of the Vejayanthran Education Fund. Through her dedication, resilience, and passion for education, Tshepiso has overcome financial barriers to achieve her dream of becoming a world-class teacher. Her personal philosophy—that education is about more than just content delivery—reflects her commitment to <strong>empowering young minds, fostering problem-solving skills, and guiding learners to their full potential</strong>.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              As Tshepiso begins her teaching career, she carries forward the legacy of Vejayanthran Naidoo, demonstrating that with the right support, passionate educators can transform lives and communities. Her success is a testament to what's possible when financial barriers are removed and high-potential students are given the opportunity to pursue their calling in education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fellows;
