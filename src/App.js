import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Notes from './Notes';

class App extends Component {
state = { count: 0 }
increment = () => {
  this.props.dispatch({type:'INCREMENT'});
}
decrement = () => {
  this.props.dispatch({type:'DECREMENT'});
}
incrementDua = () => {
  this.props.dispatch({type:'INCREMENTDUA', plus: 2});
}
decrementDua = () => {
  this.props.dispatch({type:'DECREMENTDUA', minus: 2});
}
  render() {
    return (
      <div className="App">
        <div>
          <Notes/>
          <button onClick = {() => this.decrement()}>
            Kurang
          </button>
          <span></span>
          <button onClick = {() => this.increment()}>
            Tambah
          </button>
          <span></span>
          <button onClick = {() => this.incrementDua()}>
          Tambah + 2
          </button>
          <span/>
          <button onClick = {() => this.decrementDua()}>
          Kurang - 2
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(App);
