import React from 'react';

const From = props =>(
  <form onSubmit={props.getWeather} > 
    <input type="text" name="city" placeholder="city..." />
    <input type="text" name="country" placeholder="country..." />
    <button> Get Weather </button> 
  </form>
);

export default From;
