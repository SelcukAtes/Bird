import React, { Component } from 'react';

import classes from './Messages.module.css';

class Messages extends Component {
  state = {
    hello: ''
  }
  render() {
    return (
      <div>
        <p>We are going to display all the user Messages in here</p>
      </div>
    )
  }
}