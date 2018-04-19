import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Dimmer } from "semantic-ui-react";
import Shelf from "../components/Shelf";
import Quote from "../components/Quote";

export default function BookList({ books, updateShelf, loading, quote }) {
  const shelves = [
    {
      title: "🤩 Currently reading",
      shelf: "currentlyReading",
      books,
      updateShelf
    },
    { title: "🤗 Want to read", shelf: "wantToRead", books, updateShelf },
    { title: "😎 Read", shelf: "read", books, updateShelf }
  ];

  return (
    <Dimmer.Dimmable blurring dimmed={loading}>
      <Dimmer inverted active={loading}>
        <Quote quote={quote} />
      </Dimmer>
      <div className="list-books">
        <div className="list-books-title">
          <h1>
            <img src="images/kitty.svg" alt="" /> MyReads
          </h1>
        </div>

        <div className="list-books-content">
          {shelves.map(shelf => (
            <Shelf
              key={shelf.shelf}
              title={shelf.title}
              shelf={shelf.shelf}
              books={shelf.books}
              updateShelf={shelf.updateShelf}
            />
          ))}
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </Dimmer.Dimmable>
  );
}

BookList.propTypes = {
  loading: PropTypes.bool,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  quote: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ])
};
BookList.defaultProps = {
  loading: null
};
