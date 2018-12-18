import React from 'react';
import './weather.scss';

const Weather = (props) => {
  return(
    <div className='amd-weather-component'>
      {props.country && props.city && <h1>{props.city}, {props.country}</h1>}
      {props.country && <p>{props.description}</p>}

       <div>  
          {props.temperature && <h2>Temperature: {props.temperature}</h2>}
          {props.humidity && <h2>Humidity: {props.humidity}</h2>}
       </div>
    </div>
   )
}
export default Weather;