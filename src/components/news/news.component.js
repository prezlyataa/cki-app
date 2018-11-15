import React, { Component } from "react";
import "./news.component.scss";

export class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 3
    };
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 3 };
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="news">
        <h4 className="news__title">{data.mainPage.news.title}</h4>
        <hr />
        {data.mainPage.news.newsItems.length > 0 && (
          <div className="news__list">
            <ul>
              {data.mainPage.news.newsItems
                .slice(0, this.state.visible)
                .map((item, idx) => {
                  return (
                    <li key={idx} className="news__list--item">
                      <p className="news__list--item__desc">
                        {item.description}
                        {item.link.length > 0 && (
                          <a
                            className="news__list--item__link"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.mainPage.news.link}
                          </a>
                        )}
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
        {this.state.visible < data.mainPage.news.newsItems.length && (
          <div className="news__btn">
            <button className="btn btn-primary" onClick={this.loadMore}>Більше</button>
          </div>
        )}
      </div>
    );
  }
}
