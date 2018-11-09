import React, { Component } from "react";
import { Layout } from "../layout";

export class EmployeesPage extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Layout>
        <h3>Employees page</h3>
        <div>
          {data.employees.map((employee, idx) => {
            return (
              <div key={idx}>
                <img
                  src={employee.photo}
                  alt="photo"
                  height="340px"
                  width="220px"
                />
                <h4>{employee.name}</h4>
                <p>{employee.info}</p>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}
