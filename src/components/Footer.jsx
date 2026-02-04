import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-6 lg:px-12 text-center">
      <p className="text-2xl font-bold mb-4">Vejayanthran Education Fund</p>
      <ul className="flex justify-center gap-12 mb-8 list-none">
        <li>
          <a href="mailto:contact@vejayanthran.com" className="text-yellow font-semibold uppercase hover:text-white transition-colors">
            Email
          </a>
        </li>
        <li>
          <a href="tel:447554742854" className="text-yellow font-semibold uppercase hover:text-white transition-colors">
            Phone
          </a>
        </li>
      </ul>
      <div className="flex justify-center mb-8">
        <SocialIcons />
      </div>
      <p className="mt-8 opacity-80 text-lg">
        VEF was created in collaboration with the V Naidoo Trust ❤️
      </p>
    </footer>
  );
};

export default Footer;
