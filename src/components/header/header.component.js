import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      // <ul>
      //   <li>
      //     <Link to="employees">Employees page</Link>
      //   </li>
      //   <li>
      //     <Link to="/">Main page</Link>
      //   </li>
      // </ul>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link">Main page</Link>
            <Link to="employees" class="nav-item nav-link active">Employees page <span class="sr-only">(current)</span></Link>
          </div>
        </div>
      </nav>
    );
  }
}
