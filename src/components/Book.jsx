import React, { Component } from "react";
import BookDetails from "./BookDetails";
import BookActions from "./BookActions";

class Book extends Component {
  render() {
    const data = this.props.data || {};
    return (
      <div className="book-item">
        <BookDetails data={data} />
        <BookActions
          id={this.props.id}
          isBorrowed={data.isBorrowed}
          toggleBorrowed={this.props.toggleBorrowed}
        />
      </div>
    );
  }
}

export default Book;
