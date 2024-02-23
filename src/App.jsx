import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Menu } from './components';
import { About, Crypto, DAOInfo, Hero, TempSponsor, UnderConstruction } from './container';

const App = () => (
  <Router>
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/core" element={<UnderConstruction />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/DAO" element={<DAOInfo />} />
          <Route path="/sponsor" element={<TempSponsor />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;
