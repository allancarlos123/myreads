import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import * as QuotesAPI from "./utils/getQuotes";
import { Switch, Route } from "react-router-dom";
import { Header, Dimmer } from 'semantic-ui-react'

import Quote from "./components/Quote";
import BooksList from "./pages/BooksList";
import SearchBook from "./pages/SearchBook";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    results: [],
    quote: [],
    loading: true
  };
  
  componentDidMount() {
    QuotesAPI.get().then(quote => {
      this.setState({ quote })
    })
    
    BooksAPI.getAll().then(books => {
      this.setState({
        books,
        loading: false
      });
    })
  }

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;

      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  searchBook = query => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.length) {
          books.forEach((book, index) => {
            let myBook = this.state.books.find(b => b.id === book.id);
            book.shelf = myBook ? myBook.shelf : "none";
            books[index] = book;
          });

          this.setState({
            results: books
          });
        }
      });
    } else {
      this.setState({
        results: []
      });
    }
  };

  render() {
    const { books, results, loading, quote } = this.state;
    
    return (
      <div className="app">
        <Dimmer.Dimmable blurring dimmed={loading}>
          <Dimmer inverted active={loading}>
            <Quote quote={quote} />
          </Dimmer>
        
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <BooksList books={books} updateShelf={this.updateShelf} />
              )}
            />

            <Route
              path="/search"
              render={() => (
                <SearchBook
                  results={results}
                  updateShelf={this.updateShelf}
                  searchBook={this.searchBook}
                />
              )}
            />
          </Switch>
        </Dimmer.Dimmable>
      </div>
    );
  }
}

export default App;
