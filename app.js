import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home'
import Lyrics from './pages/lyrics'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:artist/:song" children={<Lyrics />}/>
        </Switch>
    </Router>
  );
}