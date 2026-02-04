import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import image02 from '../assets/images/image02.jpg';
import image04 from '../assets/images/image04.jpg';

const MissionPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <section className="bg-primary text-white py-24 px-6 lg:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-block text-yellow hover:text-white mb-6 text-lg font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8 text-center text-white relative">
              Our Mission
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              The Vejayanthran Education Fund (VEF) aims to transform the educational landscape of South Africa by empowering future educators.
            </p>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Our mission is to develop 20 new world-class teachers by 2030 by providing scholarships to high-potential students, who face financial constraints, to pursue a Postgraduate Certificate in Education (PGCE) at the University of Cape Town, the number one ranked university on the continent.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              By fostering highly trained, professional educators, we honour the legacy of Vejayanthran Naidoo and contribute to building a more equitable, high-quality education system in South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src={image02} 
                alt="Education" 
                className="w-full shadow-[20px_20px_0_#ffcd42]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">The Problem</h2>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                South Africa faces a significant decline in the number of aspiring teachers due to the discontinuation of NSFAS funding for the Postgraduate Certificate in Education (PGCE). At the University of Cape Town, 3,000 aspiring teachers apply annually for just 300 available spots. Although 500 offers are extended, only 300 candidates are able to accept due to various challenges.
              </p>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                Financial constraints, cited as the primary barrier, prevent 200 aspiring teachers—40% of those offered places—from pursuing their dreams. This drop off threatens to deepen the shortage of qualified teachers, particularly impacting schools in under-resourced areas.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                World class teachers are essential to bridging educational gaps and fostering a higher standard of learning, especially in communities that face socio-economic challenges. Funding high-potential students for their PGCE ensures a consistent influx of skilled, committed educators who can address these challenges and uplift the quality of education in South Africa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Our Solution</h2>
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
                className="w-full shadow-[20px_20px_0_#ffcd42]"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight text-center">
              Objectives (2025 - 2030)
            </h2>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md p-8 border-l-4 border-yellow">
                <h3 className="text-2xl font-black text-yellow mb-4 uppercase">
                  Objective 1: Fund and mentor 20 aspiring teachers by 2030
                </h3>
                <ul className="space-y-3 text-lg text-white/90">
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">1.1)</span>
                    <span>Ensure at least 90% of scholarship recipients successfully complete their PGCE qualification within the standard one-year timeframe.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">1.2)</span>
                    <span>Raise R2 million to enable this funding and mentoring to happen.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 border-l-4 border-yellow">
                <h3 className="text-2xl font-black text-yellow mb-4 uppercase">
                  Objective 2: Achieve professional employment and teaching impact
                </h3>
                <ul className="space-y-3 text-lg text-white/90">
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">2.1)</span>
                    <span>Support 100% of recipients in obtaining professional registration with the South African Council for Educators (SACE).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">2.2)</span>
                    <span>Ensure that at least 95% of funded students gain professional registration within six months of graduation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">2.3)</span>
                    <span>Track that 80% of scholarship alumni secure teaching positions within a year of graduation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">2.4)</span>
                    <span>Retain scholarship recipients in the education field for a minimum of five years post-graduation. Track and confirm that at least 80% of alumni remain active in the education sector.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 border-l-4 border-yellow">
                <h3 className="text-2xl font-black text-yellow mb-4 uppercase">
                  Objective 3: Strengthening alumni engagement and measuring educational impact
                </h3>
                <ul className="space-y-3 text-lg text-white/90">
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">3.1)</span>
                    <span>Establish a structured alumni program to encourage mentorship and professional growth. Ensure 75% of scholarship alumni participate in mentorship or professional development programs within three years of graduation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow mr-3 font-bold">3.2)</span>
                    <span>Conduct annual surveys to assess how funded educators are contributing to student performance and the overall school environment, with a 90% positive impact response rate.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MissionPage;
