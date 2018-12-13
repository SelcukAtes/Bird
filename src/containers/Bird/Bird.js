import React, { Component } from 'react';


class Bird extends Component {
  state = {
    name: 'What is you Name'
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}

export default Bird;