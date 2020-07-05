import React, {Component} from 'react';

// Components
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import WeatherMap from './components/WeatherMap';

import {WEATHER_KEY} from './keys';

// JSON Countries
import countries from './countries';

class App extends Component {

  state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    feels_like: "",
    temp_max: "",
    temp_min: "",
    icon: "",
    sunrise: "",
    sunset: "",
    lat: "40.4169019",
    lon: "-3.7056774",
    error: null,
  }

  getWeather = async e => {
    e.preventDefault();

    // get form inputs
    const {ciudad,pais} = e.target.elements;
    let ciudadVal = ciudad.value.trim();
    let paisVal = pais.value.trim();

    if (ciudadVal && paisVal){

      // API
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadVal},${paisVal}${WEATHER_KEY}&units=metric`;
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.main){
        this.setState({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          feels_like: data.main.feels_like,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          icon: data.weather[0].icon,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          coord: data.coord,
          lat: data.coord.lat,
          lon: data.coord.lon,
          error: null
        })
      }
      else {
        this.setState({
          error: "Ciudad no encontrada. Por favor, revise si el país se corresponde o si la ciudad esta escrita correctamente."
        })
      }

    }

  }

  render(){
    return (
      <div>
        <WeatherForm items={countries} getWeather={this.getWeather}/>
        <WeatherInfo {...this.state}/>
        <WeatherMap lat={this.state.lat} lon={this.state.lon}/>
      </div>
    )
  }
}

export default App;
