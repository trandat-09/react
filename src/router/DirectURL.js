import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../component/Home';
import Contact from '../component/Contact';
import News from '../component/News';
import NewDetail from '../component/NewDetail';

class DirectURL extends Component {
    render() {
        return (
          <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/tin">
            <News />
          </Route>
          <Route path="/tin-tuc/:slug.:id.:html">
            <NewDetail />
          </Route>
          <Route path="/lien-he">
            <Contact />
          </Route>
        </Switch>
        );
    }
  }
export default DirectURL;