import React, { Component } from 'react';
import classes from './Tweet.module.css'

class Tweet extends Component {
  state = {
    'userTweet': 'This is user tweet'
  }
  render() {
    return (
      <div>
        <p className={classes.message}>{this.state.userTweet}</p>
      </div>
    )
  }
}

export default Tweet;