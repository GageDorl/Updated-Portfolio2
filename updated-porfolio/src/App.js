import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import NoMatch  from "./pages/404";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/links" component={Links} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
