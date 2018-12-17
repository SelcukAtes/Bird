import React, { Component } from 'react';

class Tweet extends Component {
  state = {
    'userTweet': 'This is user tweet'
  }
  render() {
    return (
      <div>
        <p>{this.state.userTweet}</p>
      </div>
    )
  }
}

export default Tweet;