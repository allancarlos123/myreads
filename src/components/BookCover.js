import React from "react";
import { PropTypes } from 'prop-types';

const BookCover = ({ book, handleOpen }) => {
  return (
    <div
      onClick={handleOpen}
      className="book-cover"
      style={{
        backgroundImage: `url(${
          book.imageLinks
            ? book.imageLinks.smallThumbnail
            : "http://via.placeholder.com/128x188?text=no+available"
        })`
      }}
    />
  );
};

BookCover.propTypes = {
	book: PropTypes.object.isRequired,
	handleOpen: PropTypes.func.isRequired
};

export default BookCover;
