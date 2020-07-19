import React, { Component } from "react";

class BookActions extends Component {
  render() {
    const id = this.props.id;
    const isBorrowed = this.props.isBorrowed;
    const toggleBorrowed = this.props.toggleBorrowed;

    let buttonText = "Lend Book";
    if (isBorrowed) {
      buttonText = "Return Book";
    }

    return (
      <button className="btn draw-border" onClick={() => toggleBorrowed(id)}>
        {buttonText}
      </button>
    );
  }
}

export default BookActions;
