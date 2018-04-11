import React from "react";
import { PropTypes } from "prop-types";

export default function BookCover({ book, handleOpen }) {
  return (
    <div
      className="book-cover"
      onClick={handleOpen}
      style={{
        backgroundImage: `url(${
          book.imageLinks
            ? book.imageLinks.smallThumbnail
            : "http://via.placeholder.com/128x188?text=no+available"
        })`
      }}
    />
  );
}

BookCover.propTypes = {
  book: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired
};
