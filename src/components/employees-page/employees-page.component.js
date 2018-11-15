import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "../layout";
import "./employees-page.component.scss";

class EmployeesPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout data={data}>
        <div className="container">
          <div className="employees">
            {data.employeesPage.employees.consultants.length > 0 && (
              <div className="consultants">
                <h3>{data.employeesPage.titles.consultants}</h3>
                <hr />
                {data.employeesPage.employees.consultants.map(
                  (employee, idx) => {
                    return (
                      <div key={idx} className="employee">
                        <img src={employee.photo} alt="img" />
                        <h4>{employee.name}</h4>
                        <p className="employee__info">{employee.info}</p>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {data.employeesPage.employees.experts.length > 0 && (
              <div className="experts">
                <h3>{data.employeesPage.titles.experts}</h3>
                <hr />
                {data.employeesPage.employees.experts.map((employee, idx) => {
                  return (
                    <div key={idx} className="employee">
                      <img src={employee.photo} alt="img" />
                      <h4>{employee.name}</h4>
                      <p className="employee__info">{employee.info}</p>
                    </div>
                  );
                })}
              </div>
            )}
            {data.employeesPage.employees.coordinators.length > 0 && (
              <div className="experts">
                <h3>{data.employeesPage.titles.coordinators}</h3>
                <hr />
                {data.employeesPage.employees.coordinators.map(
                  (employee, idx) => {
                    return (
                      <div key={idx} className="employee">
                        <img src={employee.photo} alt="img" />
                        <h4>{employee.name}</h4>
                        <p className="employee__info">{employee.info}</p>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {data.employeesPage.employees.assistants.length > 0 && (
              <div className="assistants">
                <h3>{data.employeesPage.titles.assistants}</h3>
                <hr />
                {data.employeesPage.employees.assistants.map(
                  (employee, idx) => {
                    return (
                      <div key={idx} className="employee">
                        <img src={employee.photo} alt="img" />
                        <h4>{employee.name}</h4>
                        <p className="employee__info">{employee.info}</p>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(props => <EmployeesPage {...props} />);
