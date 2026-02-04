import React, { useState, useEffect } from 'react';

const FundingProgress = () => {
  const [funding1, setFunding1] = useState({ raised: 0, goal: 5000, loading: true });
  const [funding2, setFunding2] = useState({ raised: 0, goal: 5000, loading: true });

  useEffect(() => {
    const SHEET_ID = "1H1czn6CIN-xvC3t76NxxEtyqijv_g4Ml3aICAwmSr34";
    const API_KEY = "AIzaSyCnxYKRFFfinxaTUJyeoHN8zvzth42md7A";

    // First teacher funding - raised from J8, goal is always 5000
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Summary!J8?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const raised = parseFloat(data.values[0][0]) || 0;
        setFunding1({ raised, goal: 5000, loading: false });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setFunding1({ raised: 5000, goal: 5000, loading: false });
      });

    // Second teacher funding
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Summary!J5:J6?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (!data.values || data.values.length < 2) {
          throw new Error("Invalid data structure");
        }
        const raised = parseFloat(data.values[0][0]) || 0;
        const goal = parseFloat(data.values[1][0]) || 5000;
        setFunding2({ raised, goal, loading: false });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setFunding2({ raised: 0, goal: 5000, loading: false });
      });
  }, []);

  const percentage1 = funding1.goal > 0 ? Math.min((funding1.raised / funding1.goal) * 100, 100).toFixed(2) : 0;
  const percentage2 = funding2.goal > 0 ? Math.min((funding2.raised / funding2.goal) * 100, 100).toFixed(2) : 0;
  const isTeacher1Complete = percentage1 >= 100;
  const totalFunding = funding1.loading || funding2.loading ? 0 : funding1.raised + funding2.raised;

  return (
    <section className="bg-primary text-white py-24 px-6 lg:px-12">
      <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8 text-center relative">
        Funding Progress
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow mt-4"></span>
      </h2>
      <div className="text-center mb-12">
        <p className="text-3xl md:text-4xl font-black text-yellow uppercase tracking-tight">
          Total Funding: ${totalFunding.toLocaleString()}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-12 border-2 border-white/20 border-l-[5px] border-l-yellow">
          <h3 className="text-3xl mb-6 text-yellow uppercase">First Teacher</h3>
          {funding1.loading ? (
            <div className="text-white">Loading...</div>
          ) : (
            <>
              <div className="text-2xl mb-6 font-semibold flex items-center gap-3">
                ${funding1.raised.toLocaleString()} of ${funding1.goal.toLocaleString()}
                {isTeacher1Complete && (
                  <span className="bg-green-500 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-lg">✓</span>
                )}
              </div>
              <div className="w-full h-10 bg-white/20 border-2 border-white/30 mb-4 relative overflow-hidden">
                <div 
                  className="h-full bg-yellow flex items-center justify-end pr-4 text-primary font-bold transition-all duration-800"
                  style={{ width: `${percentage1}%` }}
                >
                  {percentage1}%
                </div>
              </div>
              <div className="text-2xl font-bold text-yellow uppercase text-center">
                {percentage1}% Funded
              </div>
              {isTeacher1Complete && (
                <div className="text-center mt-4">
                  <a 
                    href="#fellows" 
                    className="text-yellow hover:text-white underline text-lg transition-colors"
                  >
                    View Candidate Fellow 1 →
                  </a>
                </div>
              )}
              <p className="mt-6 opacity-80 text-center">
                <strong>$5,000</strong> funds a teacher
              </p>
            </>
          )}
        </div>
        <div className="bg-white/10 backdrop-blur-md p-12 border-2 border-white/20 border-l-[5px] border-l-yellow">
          <h3 className="text-3xl mb-6 text-yellow uppercase">Second Teacher</h3>
          {funding2.loading ? (
            <div className="text-white">Loading...</div>
          ) : (
            <>
              <div className="text-2xl mb-6 font-semibold">
                ${funding2.raised.toLocaleString()} of ${funding2.goal.toLocaleString()}
              </div>
              <div className="w-full h-10 bg-white/20 border-2 border-white/30 mb-4 relative overflow-hidden">
                <div 
                  className="h-full bg-yellow flex items-center justify-end pr-4 text-primary font-bold transition-all duration-800"
                  style={{ width: `${percentage2}%` }}
                >
                  {percentage2}%
                </div>
              </div>
              <div className="text-2xl font-bold text-yellow uppercase text-center">
                {percentage2}% Funded
              </div>
              <p className="mt-6 opacity-80 text-center">
                <strong>$5,000</strong> funds our second teacher
              </p>
            </>
          )}
        </div>
      </div>
      <p className="text-center mt-12 text-xl font-semibold">
        <strong>$100,000</strong> will fund 20 teachers!
      </p>
    </section>
  );
};

export default FundingProgress;
