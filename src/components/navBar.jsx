import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">HUBSTAFF TALENT</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active">
              HOW IT WORKS 
            </a>
          </li>
          <li className="nav-item">
          <a
            class="nav-link dropdown-toggle active"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            BROWSE
          </a>
          </li>
          <li className="nav-item">
          <a className="nav-item nav-link active">SEARCH</a>
          </li>
          <li className="nav-item">
          <a className="nav-item  dropdown-toggle nav-link active">My Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
