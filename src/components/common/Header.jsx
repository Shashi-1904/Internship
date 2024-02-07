import React from 'react';

export default function Header() {
  return (
    <div style={{ marginTop: "30px" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a style={{color:"brown"}} className="navbar-brand" href="#">Daman Hotel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Browse all rooms</a>
              </li>
            </ul>
          </div>
          
          <div className="d-flex">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={{ marginRight: "10px" }}>
                <a className="nav-link" href="#">Find my bookings</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="">Login</a></li>
                  <li><a className="dropdown-item" href="">Register</a></li>
                  <li><a className="dropdown-item" href="">Help</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
