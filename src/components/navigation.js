/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const navStyle = {
  color: 'white'
}

const barStyle = {
  width: '100%'
}

function Navigation(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={barStyle}>
    <a class="navbar-brand" style={navStyle} href="#">Tong Lor</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink to="/about"><a class="nav-link" style={navStyle}>About Me</a></NavLink>
        <NavLink to="/portfolio"><a class="nav-link" style={navStyle}>Portfolio</a></NavLink>
        <NavLink to="/resume"><a class="nav-link" style={navStyle}>Resume</a></NavLink>
        <NavLink to="/contact"><a class="nav-link" style={navStyle}>Contact</a></NavLink>

      </div>
    </div>
  </nav>
    );
}

export default Navigation;