import React from 'react';
import './App.css';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '86c3ae85f327c6c5d06640781514b28d';

//`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    console.log(city);
    console.log(country);
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=86c3ae85f327c6c5d06640781514b28d&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      });
    }
    else {
      console.log(data);
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please fill in the values'
      });
    }
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
        temperature= {this.state.temperature}
        city= {this.state.city}
        country= {this.state.country}
        humidity= {this.state.humidity}
        description= {this.state.description}
        error= {this.state.description}
        />
      </div>
    );
  }
}

export default App;
