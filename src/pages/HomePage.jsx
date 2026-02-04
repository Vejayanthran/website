import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FundingProgress from '../components/FundingProgress';
import Mission from '../components/Mission';
import About from '../components/About';
import EducationCrisis from '../components/EducationCrisis';
import Scholarship from '../components/Scholarship';
import Fellows from '../components/Fellows';
import Donors from '../components/Donors';
import Support from '../components/Support';
import Footer from '../components/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash anchors when navigating from other pages
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <FundingProgress />
      <Mission />
      <About />
      <EducationCrisis />
      <Scholarship />
      <Fellows />
      <Donors />
      <Support />
      <Footer />
    </div>
  );
};

export default HomePage;
