import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Menu } from './components';
import { Hero, Team, UnderConstruction } from './container';

const App = () => (
  <Router>
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Routes>
          <Route path="/team" element={<UnderConstruction />} />
          <Route path="/core" element={<Team />} />
          <Route path="/crypto" element={<UnderConstruction />} />
          <Route path="/DOA" element={<UnderConstruction />} />
          <Route path="/events" element={<UnderConstruction />} />
          <Route path="/sponsor" element={<UnderConstruction />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;
