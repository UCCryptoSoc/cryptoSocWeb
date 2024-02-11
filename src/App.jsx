import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components';
import { Hero } from './container';
//import { Team } from './container';
import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { UnderConstruction } from './container';




const { PUBLIC_URL } = process.env;

//const Menu = lazy(() => import('./Menu'));
//const Hero = lazy(() => import('./Hero'));

const App = () => (
  <HashRouter basename={PUBLIC_URL}>
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/team" element={<UnderConstruction />} />
        <Route path="/crypto" element={<UnderConstruction />} />
        <Route path="/DOA" element={<UnderConstruction />} />
        <Route path="/events" element={<UnderConstruction />} />
        <Route path="/sponsor" element={<UnderConstruction />} />
        </Routes>
      </Suspense>
    </div>
  </HashRouter>
);

export default App;


/*
const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Pugs = lazy(() => import('./pages/Projects'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
*/

/*
const App = () => (
  <div className="container">
    <Menu />
    <Hero />
  </div>
*/

/*
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const { PUBLIC_URL } = process.env;

const Menu = lazy(() => import('./Menu'));
const Hero = lazy(() => import('./Hero'));
const Contact = lazy(() => import('./Contact'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <Hero />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </Suspense>
    </div>
  </BrowserRouter>
);

export default App;
);
*/