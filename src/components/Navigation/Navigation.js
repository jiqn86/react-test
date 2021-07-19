import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

function Navigation() {
  return (
    <div className="container">
      <nav>
        <NavLink className="navbar-brand" to="/">DVD Random</NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/movies" className="nav-link">List</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
