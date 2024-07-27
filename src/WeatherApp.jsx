import {useState} from 'react';
import SearchBox from './searchBox.jsx';
import InfoBox from './infoBox.jsx';
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "NONE",
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        feelsLike: 0,
        weather: "Haze",
    });
    function updateInfo(newinfo) {
        console.log(newinfo);
        setWeatherInfo(newinfo);

    }
    return (
        <div>
            <h2>Weather App</h2>
            < SearchBox updateInfo={updateInfo}/><br/>
            <InfoBox info ={weatherInfo} />
        </div>
    )
}