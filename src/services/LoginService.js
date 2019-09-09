import axios from 'axios'
import CookieService from './CookieService'
const config = require('../config')

const login = (data) => {
  const loginConf = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  let dataForm = new FormData();
  dataForm.set('email', data.email);
  dataForm.append('password', data.password);
  const request = axios.post(config.loginUrl, dataForm, loginConf)
  request.then(response => response.data).then(function (response) {
    // TODO: set api_token as a cookie
    console.log(response);
    CookieService.setCookie('api_token', response.data.api_token);
  }).catch(function (error) {
    //TODO: tell user that login failed
    console.log(error);
  })
}


export default { login }
