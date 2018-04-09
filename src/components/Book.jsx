import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import ModalBook from "./ModalBook";
import BookCover from "./BookCover";

export default class Book extends Component {
  state = {
    modalOpen: null
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { updateShelf, book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <BookCover book={book} handleOpen={this.handleOpen} />

          <ShelfChanger
            updateShelf={updateShelf}
            currentShelf={book.shelf}
            book={book}
          />
        </div>

        <div className="book-title" onClick={this.handleOpen}>
          {book.title}
        </div>

        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>

        <div>
          <ModalBook
            book={book}
            modalOpen={this.state.modalOpen}
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            updateShelf={this.updateShelf}
          />
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};