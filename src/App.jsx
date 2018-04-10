import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import * as QuotesAPI from "./utils/getQuotes";
import { Switch, Route } from "react-router-dom";
import BooksList from "./pages/BooksList";
import SearchBook from "./pages/SearchBook";
import "./App.css";

export default class App extends Component {
  state = {
    books: [],
    results: [],
    quote: [],
    loading: true
  };

  componentDidMount() {
    QuotesAPI.get().then(quote => {
      this.setState({
        quote,
        loading: true
      });
    });

    BooksAPI.getAll().then(books => {
      this.setState({
        books,
        loading: false
      });
    });
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
      this.setState({ loading: true });

      BooksAPI.search(query).then(books => {
        if (books.length) {
          books.forEach((book, index) => {
            let myBook = this.state.books.find(b => b.id === book.id);
            book.shelf = myBook ? myBook.shelf : "none";
            books[index] = book;
          });

          this.setState({
            results: books,
            loading: false
          });
        }
        if (!books.length) {
          this.setState({ loading: false })
        }
      });
    } else {
      this.setState({
        results: [],
        loading: false
      });
    }
  };

  render() {
    const { books, results, loading, quote } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <BooksList
                books={books}
                updateShelf={this.updateShelf}
                loading={loading}
                quote={quote}
              />
            )}
          />

          <Route
            path="/search"
            render={() => (
              <SearchBook
                results={results}
                updateShelf={this.updateShelf}
                searchBook={this.searchBook}
                loading={loading}
                quote={quote}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}