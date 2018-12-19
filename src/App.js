import React from 'react';
import './App.scss';

import Titles from './components/titles.js';
import Search from './components/search.js';
import Weather from './components/weather/weather.js';

import sunIcon from './assets/img/sun-light.png';
import rainIcon from './assets/img/rain.png';
import cloudIcon from './assets/img/cloud.png';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
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
        temperature: response.main.temp,
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
          this.setState({
            icon: rainIcon
          })
          break;
        case 'clear sky':
          this.setState({
            icon: sunIcon
          })
          break;
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
          this.setState({
            icon: cloudIcon
          })
          break;
        default:
          this.setState({
            icon: ''
          })
      }
    } 
  }
  render() {
    return (
      <div id="amd-weather-app">
        <Titles />
        <Search loadWeather={this.getWeather} />
        <Weather temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  icon={this.state.icon}/>
      </div>
    );
  }
}

export default App;

