import React, { Component } from 'react';


class Login extends Component {
  state = {
    emailAddress: 'name@gmail.com'
  }
  render() {
    return (
      <div>
        <form>
          <label>
            E-Mail:  <input type='text' name='E-Mail Address' />
          </label>
          <label>
            Password:  <input type='text' name='Password' />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default Login;