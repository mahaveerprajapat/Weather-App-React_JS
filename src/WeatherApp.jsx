import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Todaraisingh",
        feels_like: 10.48,
        humidity: 87,
        temp: 11.05,
        tempMax: 11.05,
        tempMin: 11.05,
        weather: "fog"
    });
    let updateInfo = (newInfo)=>{
            setWeatherInfo(newInfo);
    }
    return  ( 
        <div style={{textAlign:"center"}}>
            <h2>Weather App By mahaveer </h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div> 
    );
}