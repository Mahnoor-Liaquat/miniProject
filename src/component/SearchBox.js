import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox(){
    let [city, setCity] = useState("");
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_key = 'c1a1c449597ad40f9bd284b01f6767f8';

    let getWeatherInfo =async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_key}`);
         let jsonResponse = await response.json;
        console.log(jsonResponse);
    }

let handleCity = (e)=>{
    setCity(e.target.value);
}

let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
}
    return(
    <div className='SearchBox'>
   
          <h2>Search for the Weather!</h2>
    <form  onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="City Name" variant="outlined" required  value={city} onChange={handleCity}/>
      <br></br>
      <br></br>
      <Button variant="contained" type="Submit">Search</Button>

    </form>
    
    </div>
    )
}