import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
class Notes extends Component {
  render() {
    return (
      <div className = "App">
        <div>
          <center>
            <h1>{this.props.count}</h1>
          </center>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Notes);
