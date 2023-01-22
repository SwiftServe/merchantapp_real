import React from "react";
// import swift from "../hackathon/swift.png";
import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
  <Link class="navbar-brand" to="/">
      {/* <img src= {swift} alt="Logo" width="45" height="35" /> */}
    </Link>
    <Link id="brand_name" className="navbar-brand" to="/">Swift Serve</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link id="hover" className="nav-link active" aria-current="page" to="/manager">Manager</Link>
        </li>
        <li className="nav-item">
          <Link id="hover" className="nav-link active" aria-current="page" to="/server">Server</Link>
        </li>
        <li className="nav-item">
          <Link id="hover" className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
  
 
    
      </ul>

    </div>
  </div>
</nav>
            </div>
        </>
    )
}

export default Header;