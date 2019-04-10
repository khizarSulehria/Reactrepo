import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/users/">User Listing</Link>
                            </li>
                            <li>
                                <Link to="/user/">Create User</Link>
                            </li>
                        </ul>
                    </nav>
           
                </div>
            </Router>
            
        );
    }
}

export default Nav;