import React from 'react';
import './App.scss';
import $ from "jquery";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core'

import Titles from './components/titles/titles.js';
import Search from './components/search/search.js';
import Weather from './components/weather/weather.js';

dom.watch()
library.add(
  fal,
  faCloud
);

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      temperatureCelsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      icon: undefined
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const Api_Key = 'b8c41f2cff8f5a6e7650c586a7ef3b1f';
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);

    if(city && country) {
      this.setState({
        temperature: Math.round(9/5 * (response.main.temp - 273) + 32),
        temperatureCelsius: Math.round( response.main.temp - 273.15),
        temp_max: Math.round(9/5 * (response.main.temp_max - 273) + 32),
        temp_min: Math.round(9/5 * (response.main.temp_min - 273) + 32),
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })

      // Swap Icons based on Description
      switch(response.weather[0].description) {
        case 'rain':
        case 'shower rain':
        case 'moderate rain':
        case 'light rain':
        case 'heavy intensity rain':
          this.setState({
            icon: 'fal fa-raindrops fa-4x'
          })
          break;
        case 'clear sky':
          this.setState({
            icon: 'fal fa-sun fa-4x'
          })
          break;
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
          this.setState({
            icon: 'fal fa-clouds fa-4x'
          })
          break;
        default:
          this.setState({
            icon: 'fal fa-clouds fa-4x'
          })
          break;
      }
    } 
  }
  render() {
    return (
      <div id="amd-weather-app">
      <FontAwesomeIcon color="#497098" size="2x" icon={['fal', 'clouds']} />
        <Titles />
        <Search loadWeather={this.getWeather} />
        {this.state.temperature && <Weather temperature={this.state.temperature}
                temperatureCelsius={this.state.temperatureCelsius}
                temp_max={this.state.temp_max}
                temp_min={this.state.temp_min}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
    icon={this.state.icon}/> }
      </div>
    );
  }
}

export default App;

