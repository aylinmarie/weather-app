import React from 'react';
import './App.css';
import Titles from './components/titles.js';
import Form from './components/form.js';
import Weather from './components/weather.js';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  getWeather = async (e) => {
    e.preventDefault();
    console.log(e)
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const Api_Key = 'b8c41f2cff8f5a6e7650c586a7ef3b1f';
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
  }
  render() {
    return (
      <div className="amd-weather-app ">
      <Titles />
      <Form loadWeather={this.getWeather} />
      <Weather />
      </div>
    );
  }
}

export default App;

