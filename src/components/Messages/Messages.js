import React, { Component } from 'react';

import classes from './Messages.module.css';

class Messages extend Component {
  state = {
    hello: ''
  }
  render{
    return (
      <div>
        <p>This is from</p>
        <div>{This is from coming}</div>
      </div>
    )
  }
}