import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

class BookList extends React.Component {

  constructor() {
    super();
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li
        className="list-group-item"
        key={book.title}
        onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    })
  };

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({books: state.books});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ selectBook: selectBook}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
