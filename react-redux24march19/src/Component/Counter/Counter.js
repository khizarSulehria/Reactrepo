import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CounterAction } from '../../store/action/counter';


class Counter extends Component{
    decrement = () => {
        this.props.dispatch(CounterAction.decrement());
        console.log("decrement");
    }
    increment = () => {
        this.props.dispatch(CounterAction.increment());
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