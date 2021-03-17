import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomePage from './HomePage';
import SecuredComponent from './SecuredComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <ul>
        <li><Link to="/">Suojaamaton komponentti</Link></li>
        <li><Link to="/secured">Suojattu komponentti</Link></li>
      </ul>
      <Route exact path="/" component={HomePage} />
      <Route path="/secured" component={SecuredComponent} />
    </div>
  </BrowserRouter>
  );
}

export default App;
