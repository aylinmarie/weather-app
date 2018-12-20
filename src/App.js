import React from 'react';
import './App.scss';
import { Alert } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fal } from '@fortawesome/pro-light-svg-icons';

import Titles from './components/titles/titles.js';
import Search from './components/search/search.js';
import Weather from './components/weather/weather.js';

library.add(
  fal
);

const initialState = {
  temperature: undefined,
  temperatureCelsius: undefined,
  temp_max: undefined,
  temp_min: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  icon: undefined
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const Api_Key = 'b8c41f2cff8f5a6e7650c586a7ef3b1f';
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();

    if(city && country && (response.cod != 404)) {
      console.log(response)
      // Swap Icons based on Description
      let s = response.weather[0].id;
      let newIcon;
      switch(true) {
        case (s >= 500 && s <= 599):
          newIcon = 'fal fa-raindrops fa-4x';
          break;
        case (s === 800):
          newIcon = 'fal fa-sun fa-4x';
          break;
        case (s >= 801 && s <= 805):
          newIcon = 'fal fa-clouds fa-4x';
          break;
        case (s >= 200 && s <= 235):
          newIcon = 'fal fa-thunderstorm fa-4x';
          break;
        case (s >= 300 && s <= 321):
          newIcon = 'fal fa-cloud-drizzle fa-4x';
          break;
        case (s >= 600 && s <= 622):
          newIcon = 'fal fa-snowflakes fa-4x';
          break;
        case (s >= 701 && s <= 781):
          newIcon = 'fal fa-wind fa-4x';
          break;
        default:
          newIcon = '';
          break;
      }
      this.setState({
        temperature: Math.round(9/5 * (response.main.temp - 273) + 32),
        temperatureCelsius: Math.round( response.main.temp - 273.15),
        temp_max: Math.round(9/5 * (response.main.temp_max - 273) + 32),
        temp_min: Math.round(9/5 * (response.main.temp_min - 273) + 32),
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        icon: newIcon,
        error: ""
      })
    } else {
      this.setState(initialState);
      this.setState({
        error: "Oops, couldn't seem to find that on the map.",
      })
    }
  } 
  render() {
    return (
      <div>
        <div id="amd-weather-app">
          <FontAwesomeIcon color="#497098" size="2x" icon={['fal', 'clouds']} />
          <Titles />
          {this.state.error && <Alert className="amd-error" color="danger"> {this.state.error} </Alert>}
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
        <p className="amd-footer">Designed and Developed by <a href="https://aylinmarie.co/" target="_blank" rel="noopener noreferrer">Aylin Marie</a></p>
      </div>
    );
  }
}

export default App;

