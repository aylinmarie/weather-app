import React from 'react';
import './titles.scss';
import { Animated } from "react-animated-css";


const Titles = (props) =>{
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div>
        <h1 className="amd-weather-title">Weather App</h1>
        <p>Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></p>
      </div>
    </Animated>
  )
}
export default Titles;