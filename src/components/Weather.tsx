import React from 'react';

interface Props {
  city: string;
  country: string;
  temperature: Float32Array;
  humidity: Float32Array;
  description: string;
  error: string; 
}

const Weather = ({ city, country, temperature, humidity, description, error}: Props): JSX.Element =>(
  <div className='weather_info'>
    {
      city && country && 
      <p className="weather__key">Location :
          <span className="weather__value">  { city}, { country}</span> 
      </p>
    } 
    {
      temperature && 
      <p className="weather__key"> Temperature :
          <span className="weather__value">  {temperature}</span>
      </p>
    }
    {
      humidity &&
      <p className="weather__key">Humidity :
          <span className="weather__value">  { humidity}</span>
      </p>
    }
    {
      description && 
      <p className="weather__key">Conditions : 
          <span className="weather__value">  { description}</span>
      </p>
    }
    {
      error && 
      <p className="weather__error">Error : 
            { error}
      </p>
    }
  </div>
);

export default Weather;
