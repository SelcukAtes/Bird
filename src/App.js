import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bird from './containers/Bird/Bird'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bird />
      </div>
    );
  }
}

export default App;
