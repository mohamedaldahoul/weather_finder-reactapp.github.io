import React, {
  useState,
  ChangeEvent,} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = "1cb2bb224015a61e9639b5b74c149a4f";

const App = () => {
  const [temperature, setTemperature] = useState<any>();
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [humidity, setHumidity] = useState<any>();
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<string>('');

  const  getWeather = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const city = '' // e.target.elements.city.value;
    const country = '' // e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      setTemperature(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
      setError('')
    } else {
      setTemperature(undefined);
      setCity('');
      setCountry('');
      setHumidity(undefined);
      setDescription('');
      setError('>> Please insert the City and the Country');
    }
  }

  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-S title-container">
              <Titles />
            </div>
            <div className="col-xs-7 form-container">
              <Form getWeather={getWeather} />
              <Weather
                temperature={temperature}
                city={city}
                country={country}
                humidity={humidity}
                description={description}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
