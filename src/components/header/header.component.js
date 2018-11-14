import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import "./header.component.scss";

class Header extends Component {
  render() {
    const { pathname } = this.props.location;
    const activeEmployeesRoute = classnames({
      "nav-item nav-link": true,
      "active border-active": pathname === "/employees" ? "active" : ""
    });
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand" replace>
            <i className="fas fa-layer-group" /> ЦКІ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="employees" className={activeEmployeesRoute} replace>
                Команда<span className="sr-only">(current)</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(props => <Header {...props} />);
