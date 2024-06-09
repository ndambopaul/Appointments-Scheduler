import React from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const token = Cookies.get("token")
  const user = jwtDecode(token);
  
  const logoutUser = () => {
    Cookies.remove("token")
    window.location.reload();
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid d-flex justify-content-between">
    <a className="navbar-brand text-white fw-bold" href="/">Pair Programming</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="/users">Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="/">Slots</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="/bookings">Bookings</a>
        </li>
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item">
        <a href="" className="nav-link text-white fw-bold">Hello, {user.user.first_name} {user.user.last_name}</a>
      </li>
      <li className="nav-item">
          <a className="btn btn-warning" href="" onClick={logoutUser}>Logout</a>
        </li>
    </ul>
    </div>
    
    </div>
  </nav>

    </>
  );
};

export default Navbar;
