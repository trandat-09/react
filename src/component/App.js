import React, { Component } from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DirectURL from '../router/DirectURL';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Nav/>
          <DirectURL/>
          <Footer />        
      </div>
      </BrowserRouter>

    );
  }
}

export default App;