import React, { useState, useEffect } from 'react'
import LoginService from '../services/LoginService'
import '../style/Login.css'


const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault();
    const loginData = {
      email: username,
      password: password
    }
    LoginService.login(loginData);
    return false;
  }

  const usernameChange = (event) => {
    setUsername(event.target.value);
  }

  const passwordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div class="login-div">
      <form onSubmit={handleLogin}>
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input onChange={usernameChange} type="text" placeholder="Enter Username" name="uname" required />

          <label for="psw"><b>Password</b></label>
          <input onChange={passwordChange} type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
