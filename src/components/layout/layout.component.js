import React, { Component } from "react";
import Header  from "../header/header.component";

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
