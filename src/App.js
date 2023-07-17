import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/DonateUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/donate-us' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
