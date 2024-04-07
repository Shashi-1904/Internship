import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ marginTop: "30px" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <div className="container-fluid">
          <Link to="/" style={{ color: "brown", textDecoration: "none" }} className="navbar-brand">Daman Hotel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse-all-rooms">Browse all rooms</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item" style={{ marginRight: "10px" }}>
                <Link className="nav-link active" aria-current="page" to="/bookings">Find my bookings</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black', textDecoration: 'none' }}>
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/login">Login</Link></li>
                  <li><Link className="dropdown-item" to="/register">Register</Link></li>
                  <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                  <li><Link className="dropdown-item" to="/help">Help</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
