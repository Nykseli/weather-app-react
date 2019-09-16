import React, { useState, useEffect } from 'react'
import LoginService from '../services/LoginService'
import '../style/Login.css'


const Register = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    LoginService.register(name, email, password, passwordConfirm)
    return false
  }

  const nameChange = (event) => {
    setName(event.target.value);
  }

  const emailChange = (event) => {
    setEmail(event.target.value);
  }

  const passwordChange = (event) => {
    setPassword(event.target.value);
  }

  const passwordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  }

  return (
    <div class="login-div">
      <form onSubmit={handleRegister}>
        <div class="container">
          <label for="uname"><b>Name</b></label>
          <input onChange={nameChange} type="text" placeholder="Enter Username" name="uname" required />
          <label for="uname"><b>Email</b></label>
          <input onChange={emailChange} type="email" placeholder="Enter Email" name="email" required />

          <label for="psw"><b>Password</b></label>
          <input onChange={passwordChange} type="password" placeholder="Enter Password" name="psw" required />
          <label for="psw"><b>Confirm password</b></label>
          <input onChange={passwordConfirmChange} type="password" placeholder="Confirm Password" name="psw" required />

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
