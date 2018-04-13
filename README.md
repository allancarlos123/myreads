![MyReads](/public/favicon.ico "MyReads") # MyReads

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/react-boilerplate/react-boilerplate">
    <img src="https://david-dm.org/react-boilerplate/react-boilerplate.svg" alt="Dependency Status" />
  </a>
</div>

<br />

<div align="center">
  <sub>Made with much ❤️ and ☕️ by <a href="http://allancarlos.io">Allan Carlos</a>.</sub> <br />
  <sub>This project was built for the Udacity React Nanodegree Program.</sub>
</div>

## Demo

![Demo](https://i.imgur.com/ONVzX7n.gif)

## Quick start

1. Clone this repo using `git clone https://github.com/allancarlos123/myreads.git`
2. Move to the appropriate directory: `cd myreads`<br />
3. Run `npm install` or `yarn` in order to install dependencies<br />
4. Run `npm start` or `yarn start` to run the app.

Now you're ready to manage your books!

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

#### Search Terms
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Author

<table>
  <tr>
    <td>
      <img src="https://avatars1.githubusercontent.com/u/8354944?s=460&v=4" width="100">
    </td>
    <td>
      :octocat: Allan Carlos<br />
      <a href="mailto:me@allancarlos.io">:point_right: me@allancarlos.io</a><br />
      <a href="allancarlos.io">:point_right: allancarlos.io</a>
    </td>
  </tr>
</table>
