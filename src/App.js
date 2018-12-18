import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bird from './containers/Bird/Bird';
import Login from './containers/Login/Login';
import Tweet from './components/Tweet/Tweet';
import Profile from './components/Profile/Profile';
import Headers from './components/Header/Header';
import Messages from './components/Messages/Messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <Bird />
        <Login />
        <Messages />
        <Tweet />
        <Profile />
      </div>
    );
  }
}

export default App;
