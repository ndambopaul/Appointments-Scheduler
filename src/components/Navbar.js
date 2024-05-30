import React from "react";

const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid d-flex justify-content-between">
    <a className="navbar-brand text-white" href="/">Pair Programming</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Slots</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/bookings">Bookings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/sessions">Sessions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Account</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>

    </>
  );
};

export default Navbar;
