import React, { Component } from 'react';
import logo from './logo.svg';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
            <span>&#9729;</span>
            <img src={logo} className="App-logo" alt="logo" />
            <span>&#127783;</span>
            <h1 className="App-title">&#9731; Weathever! &#127780;</h1>
          </header>   
        )
    }
}

export default Header;