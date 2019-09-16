import React, { useState, useEffect } from 'react'
import WeatherService from '../services/WeatherService';
import LogoutButton from '../buttons/LogoutButton'


const Weather = (props) => {
  const [cityName, setCityname] = useState(props.routeParams.cityName)
  const [temperature, setTemperature] = useState('')

  useEffect(() => {
    WeatherService.getCity(cityName).then(returnVal => {
      console.log(returnVal);
      setCityname(returnVal.cityName)
      setTemperature(returnVal.temperature)
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });;
  }, [cityName]);

  return (
    <div>
      <LogoutButton />
      <h2>City: {cityName}</h2>
      <h3>Temperature: {temperature}</h3>
    </div>
  )
}

export default Weather;
