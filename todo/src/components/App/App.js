import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route } from "react-router-dom";

//components 
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import UserListing from '../UserListing/UserListing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <div className="rc-container">
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/users/" exact component={UserListing} />
            </Router>
          </div>

          
        </header>
      </div>
    );
  }
}

export default App;
