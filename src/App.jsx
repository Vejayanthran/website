import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mission" element={<MissionPage />} />
    </Routes>
  );
}

export default App;
