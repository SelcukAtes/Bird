import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bird from './containers/Bird/Bird';
import Login from './containers/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bird />
        <Login />
      </div>
    );
  }
}

export default App;
