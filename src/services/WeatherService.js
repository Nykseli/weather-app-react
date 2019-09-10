import axios from 'axios'
import CookieService from './CookieService'

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/weather` || 'localhost:8000/api/weather'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getCity = (cityName) => {
  const token = CookieService.getCookie('api_token')
  console.log(token);
  const weatherConf = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  console.log(weatherConf)
  const request = axios.get(`${baseUrl}/${cityName}`, weatherConf)
  return request.then(response => response.data);
}


export default { getCity }
