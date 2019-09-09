import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/weather` || 'localhost:8000/api/weather'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getCity = (cityName) => {
  console.log(process.env)
  console.log(`${baseUrl}/${cityName}`)
  const request = axios.get(`${baseUrl}/${cityName}`)
  return request.then(response => response.data);
}


export default { getCity }
