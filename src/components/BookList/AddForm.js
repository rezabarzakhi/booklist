import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };
    
    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }
  authorHandler(event) {
    this.setState({
      author: event.target.value,
    });
  }
  yearHandler(event) {
    this.setState({
      year: event.target.value,
    });
  }
  submitHandler(event) {
    event.preventDefault();
    let { title , author , year } = this.state

    if (title && author && year ) {
      let newBook = {
        title: title,
        id: this.state.books.length + 1,
        author: author,
        year: year,
      };
      this.setState((prevstate) => ({
        books: [...prevstate.books, newBook],
        title: "",
        author: " ",
        year: "",
      }));
    }
  }

  render() {
    return (
      <>
        <form
          id="book-form"
          autoComplete="off">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.titleHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
              onChange={this.authorHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
              onChange={this.yearHandler}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-warning btn-block add-btn"
            onClick={this.submitHandler}
          />
        </form>
        <table className="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.map((book) => (
              <Book
                {...book}
                key={book.id}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
