import React, { Component } from "react";
import { Layout } from "../layout";

export class MainPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Layout>
          <h3>Main page</h3>
        </Layout>
      </div>
    );
  }
}
