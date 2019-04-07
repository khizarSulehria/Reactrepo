import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { connect } from 'react-redux';


//components
import Counter from  '../Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.count}</h1>
        <Counter />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    count : state.count
  };
}


export default connect(mapStateToProps)(App);
