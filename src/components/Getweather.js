import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { WiDayCloudyHigh } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiStormShowers } from "react-icons/wi";
import { WiDust } from "react-icons/wi";



const Getweather = ({getCity}) => {

    const [weather, setWeather] = useState([]);
    const [curTemp, setCurTemp] = useState('');
    const [wind, setWind] = useState('');
    const [country, setCountry] = useState('');
    const [getDate, setGetDate] = useState(new Date())
  
    useEffect(() => {
        async function fetchData(){
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&appid=729e86f0a3dd2bd324196ccee8e89bfd`)
        .then(res => {
            setWeather(res.data.weather)
            setCurTemp(res.data.main)
            setCountry(res.data.sys)
            setWind(res.data.wind)
        })
    }
    fetchData();

    }, [getCity])
 
    return (
       
        <div className="main-wrapper">
            <div className="city_date">
                <h1 style={{textTransform: 'capitalize'}}>{getCity}, {country.country}</h1>
                <p>{getDate.toLocaleDateString()}</p>
            </div>

            <div className="main_weather_wrapper">
                {weather.map(weather => (
                <div className="current_weather_wrapper" key={weather.id}>
                    <div className="current_weather">
                        <span className="weather_icon">
                            {weather.main == 'Clear' &&  <WiDaySunny/>}
                            {weather.main == 'Clouds' && <WiCloud/> }
                            {weather.main == 'Rain' && <WiRain/> }
                            {weather.main == 'Snow' && <WiSnow/> }
                            {weather.main == 'Drizzle' && <WiRain/> }
                            {weather.main == 'Thunderstorm' && <WiStormShowers/> }
                            {weather.main == 'Atmosphere' && <WiDust/> }
                        </span>
                        <div className="current_temp_wrapper">
                            <div>
                                <span className="current_temp">{Math.round(curTemp.temp)}°</span>
                                <span style={{textTransform: 'capitalize'}}>{weather.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            

                <div className="other_weather_info">
                    <ul>
                        <li>
                            <p>{Math.round(curTemp.feels_like)}°</p>
                            <span>Feels like</span>
                        </li>
                        <li>
                            <p>{Math.round(wind.speed)} km/h</p>
                            <span>Wind</span>
                        </li>
                        <li>
                            <p>{new Date(country.sunrise * 1000).toLocaleTimeString('hr', {hour: '2-digit', minute:'2-digit'})}</p>
                            <span>Sunrise</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>{curTemp.pressure} hPa</p>
                            <span>Pressure</span>
                        </li>
                        <li>
                            <p>{curTemp.humidity}%</p>
                            <span>Humidity</span>
                        </li>
                        <li>
                            <p>{new Date(country.sunset * 1000).toLocaleTimeString('hr', {hour: '2-digit', minute:'2-digit'})}</p>
                            <span>Sunset</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
       
    )
}

export default Getweather
