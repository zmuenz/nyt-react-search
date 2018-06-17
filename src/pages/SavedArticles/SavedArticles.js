import React, { Component } from "react";
import { SavedBox } from "../../components/SavedBox";
import { ResultsList, ListItem } from "../../components/ResultsBox";
import API from "../../utils/API";

class SavedArticles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
            <SavedBox>
            {!this.state.articles.length ? (
                <h1 className="text-center">Save searched articles to see them here!</h1>
            ) : (
                <ResultsList>
                {this.state.articles.map(article => {
                    return (
                    <ListItem
                        key={article.title}
                        title={article.title}
                        date={article.date}
                    />
                    );
                })}
                </ResultsList>
            )}
            </SavedBox>
        </div>
    );
  }
}

export default SavedArticles;