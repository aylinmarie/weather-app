import React from 'react';
import './weather.scss';

const Weather = (props) => {
  return(
    <div className='amd-weather-component'>
      {props.country && <h2>{props.description}</h2>}
      {props.country && props.city && <p>{props.city}, {props.country}</p>}
      {props.icon && <img alt="Weather Icon" src={props.icon} /> }

       <div>  
          {props.temperature && props.temperatureCelsius && <h3>Temperature: {props.temperature} &#8457; / {props.temperatureCelsius} &#8451;</h3>}
          {props.humidity && <h4>Humidity: {props.humidity}%</h4>}
       </div>
    </div>
   )
}
export default Weather;