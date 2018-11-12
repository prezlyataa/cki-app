import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "../layout";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div className="container">
            <h3>Main page</h3>
          </div>
        </Layout>
      </div>
    );
  }
}

export default withRouter(props => <MainPage {...props} />);
