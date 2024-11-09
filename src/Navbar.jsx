import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Evenement</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/expert">Experts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formulaire">Formulaire</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expert2">Expert 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
