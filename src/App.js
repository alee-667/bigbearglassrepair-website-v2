import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Switch>
          <Route path='/bigbearglassrepair-website-v2' exact component={Home} />
          <Route path='/bigbearglassrepair-website-v2/services' component={Services} />
          <Route path='/bigbearglassrepair-website-v2/products' component={Products} />
          <Route path='/bigbearglassrepair-website-v2/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
