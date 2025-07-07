import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to AR-FoodFinder page */}
        <Route path="/" element={<Navigate to="/FuelVision"/>} />
        
        {/* Define your routes */}
        <Route path="/FuelVision" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
