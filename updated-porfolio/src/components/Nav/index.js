import React from "react";
import {NavLink} from 'react-router-dom';
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
      <a className="navbar-brand" href="/">
        Gage D'Orlando
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
            <div className="navbar-nav">
          <NavLink exact to="/" className="nav-link" activeClassName="hidden">Home</NavLink>
          <NavLink exact to="/projects" className="nav-link" activeClassName="hidden">Projects</NavLink>
          <NavLink exact to="/contact" className="nav-link" activeClassName="hidden">Contact Me</NavLink>
          </div>       
        
      </div>
    </nav>
  );
}

export default Nav;
