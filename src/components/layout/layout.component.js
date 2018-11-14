import React, { Component } from "react";
import Header from "../header/header.component";
import "./layout.component.scss";

export class Layout extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="layout">
        <Header data={data} />
        {this.props.children}
      </div>
    );
  }
}
