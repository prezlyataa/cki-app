import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "../layout";
import "./head-page.component.scss";

class HeadPage extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <Layout data={data}>
                    <div className="container">
                        <h3>Голова центру</h3>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default withRouter(props => <HeadPage {...props} />);
