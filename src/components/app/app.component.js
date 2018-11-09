import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteSchema } from "../../routes";
import { data } from "../../config/data";
import "./app.component.scss";

export class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <RouteSchema data={data} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}