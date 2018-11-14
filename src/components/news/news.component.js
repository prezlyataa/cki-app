import React, { Component } from "react";
import "./news.component.scss";

export class News extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="news">
        <h4 className="news__title">{data.mainPage.titles[0].newsTitle}</h4>
        <hr />
        {data.mainPage.news.length > 0 && (
          <div className="news__list">
            <ul>
              {data.mainPage.news.map((item, idx) => {
                return (
                  <li key={idx} className="news__list--item">
                    <p>
                      {item.description}
                      {item.link.length > 0 && (
                        <a
                          className="news__list--item__link"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Посилання
                        </a>
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
