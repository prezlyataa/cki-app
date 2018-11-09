import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="employees">Employees page</Link>
        </li>
        <li>
          <Link to="/">Main page</Link>
        </li>
      </ul>
    );
  }
}
