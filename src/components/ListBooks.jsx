import React, { Component } from "react";
import Book from "./Book";

class ListBooks extends Component {
  constructor(props) {
    super(props);

    let books = props.books;
    if (!books) {
      books = [];
    }

    this.state = { books };
  }

  toggleBorrowed(id) {
    const books = this.state.books;
    books[id].isBorrowed = !books[id].isBorrowed;

    this.setState({ books });
  }

  render() {
    return (
      <div className="books-list">
        {this.state.books.map((book, i) => {
          return (
            <Book
              data={book}
              id={i}
              toggleBorrowed={this.toggleBorrowed.bind(this)}
            />
          );
        })}
      </div>
    );
  }
}

export default ListBooks;
