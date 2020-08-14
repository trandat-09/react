import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './data.json';
class News extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="masthead tintuc">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-12 my-auto">
                  <div className="header-content mx-auto">
                    <h1 className="mb-1 text-center">Tin tuc</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* tin tuc */}
          <div className="container">
            <div className="row mt-3">
              {data.map((value, key) => {
                return (
                  <NewsItem key = {key} NewId={value.id} image={value.image} title={value.title} caption={value.caption}></NewsItem>
                );
              })
              }
            </div>
          </div>
          {/* end tin tuc */}
        </div>

      </div>
    );
  }
}

export default News;