import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components';
import { Hero } from './container';
//import { Team } from './container';
import React, { Suspense } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Sponsor, UnderConstruction } from './container';

const App = () => (
  <Router>
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Routes>
          <Route path="/team" element={<UnderConstruction />} />
          <Route path="/core" element={<UnderConstruction />} />
          <Route path="/crypto" element={<UnderConstruction />} />
          <Route path="/DOA" element={<UnderConstruction />} />
          <Route path="/events" element={<UnderConstruction />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;
