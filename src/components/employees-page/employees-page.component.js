import React, { Component } from "react";
import { Layout } from "../layout";

export class EmployeesPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <h3>Employees page</h3>
      </Layout>
    );
  }
}
