import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "../layout";
import "./employees-page.component.scss";

class EmployeesPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <div className="container">
          <div className="employees">
            {data.employees.consultants.length > 0 && (
              <div className="consultants">
                <h3>Наукові консультанти</h3>
                <hr />
                {data.employees.consultants.map((employee, idx) => {
                  return (
                    <div key={idx} className="employee">
                      <img src={employee.photo} alt="img" />
                      <h4>{employee.name}</h4>
                      <p>{employee.info}</p>
                    </div>
                  );
                })}
              </div>
            )}
            {data.employees.experts.length > 0 && (
              <div className="experts">
                <h3>Експерти</h3>
                <hr />
                {data.employees.experts.map((employee, idx) => {
                  return (
                    <div key={idx} className="employee">
                      <img src={employee.photo} alt="img" />
                      <h4>{employee.name}</h4>
                      <p>{employee.info}</p>
                    </div>
                  );
                })}
              </div>
            )}
            {data.employees.assistants.length > 0 && (
              <div className="assistants">
                <h3>Асистенти</h3>
                <hr />
                {data.employees.assistants.map((employee, idx) => {
                  return (
                    <div key={idx} className="employee">
                      <img src={employee.photo} alt="img" />
                      <h4>{employee.name}</h4>
                      <p>{employee.info}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(props => <EmployeesPage {...props} />);
