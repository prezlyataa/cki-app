import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPage from "../components/main-page/main-page.component";
import EmployeesPage from "../components/employees-page/employees-page.component";

export class RouteSchema extends Component {
  render() {
    const { data } = this.props;
    return [
      <Route
        exact={true}
        key="/"
        path="/"
        render={() => <MainPage data={data} />}
      />,
      <Route
        key="/employees"
        exact
        path="/employees"
        render={() => <EmployeesPage data={data} />}
      />
    ];
  }
}
