import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Hero} from './container';
import { Menu } from './components';




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
  </div>
);

export default App;
