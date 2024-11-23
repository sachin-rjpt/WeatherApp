import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ShowInfo from './showInfo';
import './WeatherApp.css';

export default  function SearchBox(){
    let [city,setCity]=useState("");
    let [weather,setWeather]=useState("");
    let [error,setError]=useState(false);
    let url="http://api.openweathermap.org/geo/1.0/direct?" 
        let API_KEY="4e40ef81a5be4cc9878ce326502532ca";
    function handleChange(event){
        setCity(event.target.value);
    }
   async function getWeather(){
       try{
        let response= await fetch(`${url}q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
        let WeatherResponse=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${jsonResponse[0].lat}&lon=${jsonResponse[0].lon}&appid=${API_KEY}&units=metric`);
        let weatherData=await WeatherResponse.json();
       let result={
         city:city,
         feel : weatherData.main.feels_like,
         humidity :weatherData.main.humidity,
         temp : weatherData.main.temp,
         max: weatherData.main.temp_max,
         min :weatherData.main.temp_min,
         description : weatherData.weather[0].description
       }
       setError(false);
       return result;
      }catch(err){
         setError(true);
      }  
  }
  async  function handleSubmit(event){
        event.preventDefault();
       let weather=await getWeather();
       setWeather(weather);
       setCity("");
    }
   return (
        <div className='weatherApp'>
        <h2>Let's Search weather of your City</h2>
        <form onSubmit={handleSubmit}>
         <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleChange} /> <br /> <br />
         <Button variant="contained" type='submit'>Search</Button>
       </form>
          {!error&&<ShowInfo weather={weather}/>}
         {error&&<h3 color='error'>there no such palce exist</h3>}
       </div>
    );
}