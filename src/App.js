import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import CookieService from './services/CookieService'
import './App.css';

function App() {
  // Make sure that the user is logged in
  const apiToken = CookieService.getCookie('api_token')
  if(!apiToken) {
    window.location = 'http://localhost:3000/login'
  }

  const [cityName, setCityName] = useState('')

  const searchWeather = (event) => {
    event.preventDefault()
    window.location = `http://localhost:3000/city/${cityName}`
    return false
  }

  const cityNameChange = (event) => {
    setCityName(event.target.value.toString().toLowerCase())
  }

  return (
    <div className="login-div">
      <form onSubmit={searchWeather}>
        <div className="container">
          <label for="uname"><b>Search city</b></label>
          <input onChange={cityNameChange} type="text" placeholder="Search city" name="uname" required />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default App;
