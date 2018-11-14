import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "../layout";
import { News } from "../news";
import "./main-page.component.scss";

class MainPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Layout>
          <div className="container">
              <News data={data} />
          </div>
        </Layout>
      </div>
    );
  }
}

export default withRouter(props => <MainPage {...props} />);
