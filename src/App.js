import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bird from './containers/Bird/Bird';
import Login from './containers/Login/Login';
import Tweet from './components/Tweet/Tweet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bird />
        <Login />
        <Tweet />
      </div>
    );
  }
}

export default App;
