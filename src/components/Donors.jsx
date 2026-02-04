import React from 'react';

const Donors = () => {
  const donors = {
    platinum: [
      { name: 'University of Cape Town Trust', url: 'https://ucttrust.org.uk/' }
    ],
    gold: [
      { name: 'The Singh Family' },
      { name: 'Rupi Singh' },
      { name: 'Ubuntu Golf Society', url: 'https://www.ubuntugolfsociety.co.uk/' },
      { name: 'Greef Invest', url: 'https://greeffinvest.com/' },
      { name: 'Ravi Singh' },
      { name: 'Neel Singh' },
      { name: 'Neeran Naidoo' },
      { name: 'Rachel Ng\'ethe' },
      { name: 'Etienne de Bruin', url: 'https://newtechnical.fund/' },
      { name: 'Priya Singh' },
      { name: 'Sagnee' }
    ],
    silver: [
      { name: 'Rama Govenden' },
      { name: 'Joshay Harkoo' },
      { name: 'Nirvaan' },
      { name: 'Mikahra and Kayra Naidoo' },
      { name: 'Gayasthri Moodley' },
      { name: 'Woogan Reddy' },
      { name: 'Kira Reddy' },
      { name: 'Nicole Suen' },
      { name: 'Dharam' },
      { name: 'Raenissa Reddy' }
    ]
  };

  const DonorCard = ({ name, url, tier }) => {
    const tierStyles = {
      platinum: 'bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-400 hover:from-gray-300 hover:to-gray-400 hover:scale-105 hover:shadow-xl',
      gold: 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-2 border-yellow-500 hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 hover:shadow-xl',
      silver: 'bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 hover:from-gray-200 hover:to-gray-300 hover:scale-105 hover:shadow-xl'
    };

    if (url) {
      return (
        <div className={`p-6 text-center font-semibold text-primary rounded-lg transition-all duration-300 relative ${tierStyles[tier]}`}>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full h-full flex items-center justify-center gap-2"
          >
            <span>{name}</span>
            <span className="text-sm">🔗</span>
          </a>
        </div>
      );
    }

    return (
      <div className={`p-6 text-center font-semibold text-primary rounded-lg transition-all duration-300 ${tierStyles[tier]}`}>
        <span>{name}</span>
      </div>
    );
  };

  return (
    <section id="donors" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8 text-center text-primary relative">
          Our Donors
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
        </h2>
        <p className="text-center mb-16 text-xl text-gray-600 max-w-3xl mx-auto">
          We are deeply grateful to our generous supporters who make the mission of the Vejayanthran Education Fund possible
        </p>

        {/* Platinum Stars */}
        <div className="mb-16 p-12 bg-gradient-to-r from-gray-50 to-gray-100 border-3 border-primary rounded-lg shadow-lg">
          <h3 className="text-3xl text-primary mb-8 uppercase font-black pb-4 border-b-3 border-primary">
            ⭐ Platinum Stars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donors.platinum.map((donor, index) => (
              <DonorCard key={index} name={donor.name} url={donor.url} tier="platinum" />
            ))}
          </div>
        </div>

        {/* Gold Stars */}
        <div className="mb-16 p-12 bg-gradient-to-r from-yellow-50 to-yellow-100 border-3 border-yellow rounded-lg shadow-lg">
          <h3 className="text-3xl text-primary mb-8 uppercase font-black pb-4 border-b-3 border-yellow">
            ⭐ Gold Stars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {donors.gold.map((donor, index) => (
              <DonorCard key={index} name={donor.name} url={donor.url} tier="gold" />
            ))}
          </div>
        </div>

        {/* Silver Stars */}
        <div className="p-12 bg-gradient-to-r from-gray-50 to-gray-100 border-3 border-gray-400 rounded-lg shadow-lg">
          <h3 className="text-3xl text-primary mb-8 uppercase font-black pb-4 border-b-3 border-gray-400">
            ⭐ Silver Stars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {donors.silver.map((donor, index) => (
              <DonorCard key={index} name={donor.name} url={donor.url} tier="silver" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donors;
