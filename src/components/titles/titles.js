import React from 'react';
import './titles.scss';
import { Animated } from "react-animated-css";


const Titles = (props) =>{
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div>
        <h1 className="amd-weather-title">Weather</h1>
      </div>
    </Animated>
  )
}
export default Titles;