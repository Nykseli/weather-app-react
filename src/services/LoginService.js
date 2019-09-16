import axios from 'axios'
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
  return request.then(response => response.data)
}

/**
 *
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
const register = (name, email, password, passwordConfirm) => {
  const registerConf = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  let formData = new FormData()
  formData.set('name', name)
  formData.append('email', email)
  formData.append('password', password)
  formData.append('password_confirmation', passwordConfirm)

  const request = axios.post(config.registerUrl, formData, registerConf)
  console.log(request)
  request.then(response => response.data).then(function (response) {
    // TODO: set api_token as a cookie
    console.log(response);
   }).catch(function (error) {
    //TODO: tell user that register failed
    console.log(error);
  })

}

export default { login, register }
