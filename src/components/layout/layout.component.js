import React, { Component } from "react";
import Header from "../header/header.component";
import "./layout.component.scss";

export class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
