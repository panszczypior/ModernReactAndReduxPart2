import React from 'react'
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render () {
    return (
      <div>{this.props.activeBook.title}</div>
    );
  }
}

const mapStateToProps = ({ activeBook }) => ({ activeBook });

export default connect(mapStateToProps)(BookDetail);
