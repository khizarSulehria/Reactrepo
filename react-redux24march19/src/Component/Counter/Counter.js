import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component{
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
        console.log("decrement");
    }
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
        console.log("increment");
    }
    render() {
        return (
          <div>
            <h2>Counter</h2>
            <div>
              <button onClick={this.decrement}>-</button>
              <span>{this.props.count}</span>
              <button onClick={this.increment}>+</button>
            </div>
          </div>
        )
      }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }
//export default Counter;
export default connect(mapStateToProps)(Counter)