import React, { Component } from 'react';

import classes from './Profile.module.css';

class Profile extends Component {
  state = {
    userName: 'Default Name'
  }
  render() {
    return (
      <div>
        <p>{this.state.userName}</p>
      </div>
    )
  }
}
export default Profile;