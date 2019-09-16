import React from 'react'
import CookieService from '../services/CookieService'
import '../style/LogoutButton.css'

const LogoutButton = (props) => {

  const handleLogout = () => {
    CookieService.removeCookie('api_token')
    window.location = 'http://localhost:3000'
  }

  return (
    <div className="logout-button">
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default LogoutButton;
