import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { Container, Header, Grid } from "semantic-ui-react";
import Slider from "react-slick";
import sliderConfig from "../utils/sliderConfig";

export default function Shelf({ title, shelf, books, updateShelf }) {
  return (
    <Container style={{ marginTop: "3em" }}>
      <Header as="h3" dividing>
        {title}
      </Header>

      <Grid verticalAlign="middle" columns={1} centered>
        <Grid.Row>
          <Grid.Column>
            <Slider {...sliderConfig}>
              {books.map(book => (
                <div key={book.id}>
                  <Book key={book.id} book={book} updateShelf={updateShelf} />
                </div>
              ))}
            </Slider>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};
