import React from 'react';
import './weather.scss';
import { Animated } from 'react-animated-css';

const Weather = (props) => {
  return(
   <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
    <div className='amd-weather-component'>
      {props.country && <h2>{props.description}</h2>}
      {props.country && props.city && <p className="amd-city">{props.city}, {props.country}</p>}
      {props.icon && <i className={props.icon}></i> }

       <div>  
          {props.temperature && props.temperatureCelsius && <p className="amd-temperature">{props.temperature} &#8457;</p>}
          {props.temperatureCelsius && <p>{props.temperatureCelsius} &#8451;</p>}
          {props.temp_min && <h4>Low: {props.temp_min}%</h4>}
          {props.temp_max && <h4>High: {props.temp_max}%</h4>}
          {props.humidity && <h4>Humidity: {props.humidity}%</h4>}
       </div>
    </div>
   </Animated>
   )
}
export default Weather;