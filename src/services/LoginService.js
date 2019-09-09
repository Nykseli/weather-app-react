import axios from 'axios'

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


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
  }).catch(function (error) {
    //TODO: tell user that login failed
    console.log(error);
  })
}


export default { login }
