import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';
import { pageview } from './utils/analytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const path = location.pathname + location.search;
    pageview(path);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mission" element={<MissionPage />} />
    </Routes>
  );
}

export default App;
