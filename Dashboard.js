import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import './Dash1.css';
export default class Dashboard extends Component {
  render() {
    return (
      
<div>
<nav className="navbar navbar fixed-top navbar-expand-lg bg-info">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li> <img alt='logo' src={require("./img/NCS1.png")} height="40px" /></li>
        <li className="nav-item">
          <NavLink className="nav-bar-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-bar-link active" aria-current="page" to="login/">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-bar-link active" aria-current="page" to="registration/">Registration</NavLink>
        </li>
        {/* nav-link active */}
       
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
