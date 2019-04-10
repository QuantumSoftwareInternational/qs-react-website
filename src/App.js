import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
