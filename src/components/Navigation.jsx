import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="sticky top-0 w-full bg-primary z-50 py-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="/vejayanthran_transparent.png" 
            alt="Vejayanthran Education Fund" 
            className="h-12 w-auto"
          />
        </Link>
        <ul className="hidden md:flex list-none gap-12">
          <li>
            {isHomePage ? (
              <a href="#mission" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Mission</a>
            ) : (
              <Link to="/mission" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Mission</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#scholarship" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Scholarship</a>
            ) : (
              <Link to="/#scholarship" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Scholarship</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#fellows" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Fellows</a>
            ) : (
              <Link to="/#fellows" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Fellows</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#donors" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Donors</a>
            ) : (
              <Link to="/#donors" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Donors</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#support" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Support</a>
            ) : (
              <Link to="/#support" className="text-white font-semibold text-sm uppercase tracking-wide hover:text-yellow transition-colors">Support</Link>
            )}
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <SocialIcons />
          </div>
          <a 
            href="https://donate.stripe.com/28o8wT5pp9bp5MsfYY" 
            className="bg-yellow text-primary px-8 py-3 font-bold uppercase tracking-wider border-2 border-yellow hover:bg-transparent hover:text-yellow transition-all"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
