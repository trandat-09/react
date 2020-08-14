import React, { Component } from 'react';
class NewDetail extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <header className="masthead tintuc">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-12 my-auto">
                  <div className="header-content mx-auto">
                    <h1 className="mb-1 text-center">Chi tiet tin</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* tin tuc */}
          <div className="b4-col-12">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <img src="http://placehold.it/1900x700/" className="img-fluid" alt="" />
                <h1 className="display-3">Tin tuc so 2</h1>
                <p className="lead">Jumbo helper text</p>
                <hr className="my-2" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero nihil exercitationem ullam beatae perspiciatis repellendus quam velit eum, possimus facere obcaecati dignissimos natus perferendis deserunt ea placeat neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero nihil exercitationem ullam beatae perspiciatis repellendus quam velit eum, possimus facere obcaecati dignissimos natus perferendis deserunt ea placeat neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero nihil exercitationem ullam beatae perspiciatis repellendus quam velit eum, possimus facere obcaecati dignissimos natus perferendis deserunt ea placeat neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero nihil exercitationem ullam beatae perspiciatis repellendus quam velit eum, possimus facere obcaecati dignissimos natus perferendis deserunt ea placeat neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente vero nihil exercitationem ullam beatae perspiciatis repellendus quam velit eum, possimus facere obcaecati dignissimos natus perferendis deserunt ea placeat neque?</p>
              </div>
            </div>
          </div>
          {/* end tin tuc */}

          {/* tin lien quan */}
          <div className="container">
            <div className="card border-primary">
              <h4 className="card-title text-center">Tin lien quan</h4>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="card-deck">
                  <div className="card">
                    <a href="/chi-tiet"><img className="card-img-top" src="http://placehold.it/400x250/" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <a href="/chi-tiet"><img className="card-img-top" src="http://placehold.it/400x250/" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <a href="/chi-tiet"><img className="card-img-top" src="http://placehold.it/400x250/" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <a href="/chi-tiet"><img className="card-img-top" src="http://placehold.it/400x250/" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <a href="/chi-tiet"><img className="card-img-top" src="http://placehold.it/400x250/" alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end tin lien quan */}
        </div>

      </div>
    );
  }
}

export default NewDetail;