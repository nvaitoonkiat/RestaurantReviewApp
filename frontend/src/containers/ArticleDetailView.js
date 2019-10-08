import React from "react";

import axios from "axios";

import { Card } from "antd";

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/Restaurants/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
    });
  }

  render() {
    return (
      <Card title={this.state.article.restname}>
        <p>
          {" "}
          <div class="articleimage">
            <img
              id="articleimage"
              src={this.state.article.img}
              id="articleimage"
            />
          </div>
          <h1 className="specialheading">{this.state.article.restname}</h1>
          {this.state.article.content}
        </p>
      </Card>
    );
  }
}

export default ArticleDetail;
