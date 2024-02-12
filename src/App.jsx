import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Menu } from './components';
import { Hero, UnderConstruction } from './container';

const App = () => (
  <Router>
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/team" element={<UnderConstruction />} />
          <Route path="/crypto" element={<UnderConstruction />} />
          <Route path="/DOA" element={<UnderConstruction />} />
          <Route path="/events" element={<Hero />} />
          <Route path="/sponsor" element={<UnderConstruction />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;
