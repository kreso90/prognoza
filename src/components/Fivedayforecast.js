import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { WiCloud } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiStormShowers } from "react-icons/wi";
import { WiDust } from "react-icons/wi";

const Fivedayforecast = ({getCity}) => {

    const[list, setList] = useState([])
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        async function fetchData(){
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${getCity}&units=metric&appid=729e86f0a3dd2bd324196ccee8e89bfd`)
        .then(res => {
            setList(res.data.list)
            setWeather(res.data.list.weather)
        })
    }
    fetchData();
    }, [getCity])

    return (
        <div>
           
        <Swiper
      spaceBetween={20}
      slidesPerView={3}
      observer
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        480: {
            slidesPerView: 4,
        },
        640: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {    
          slidesPerView: 8,
        },
      }}
      
    >{list.map(list => (
        
        <SwiperSlide>
            <div className="today_weather">
                <span>{new Date(list.dt * 1000).toLocaleTimeString('hr', {hour: '2-digit', minute:'2-digit'})}</span>
                {list.weather.map(weather => (
                    <span className="weather_icon"> 
                        {weather.main == 'Clear' &&  <WiDaySunny/>}
                        {weather.main == 'Clouds' && <WiCloud/> }
                        {weather.main == 'Rain' && <WiRain/> }
                        {weather.main == 'Snow' && <WiSnow/> }
                        {weather.main == 'Drizzle' && <WiRain/> }
                        {weather.main == 'Thunderstorm' && <WiStormShowers/> }
                        {weather.main == 'Atmosphere' && <WiDust/> }
                        </span>
                ))}
                <span>{Math.round(list.main.temp)}°</span>
            </div>
        </SwiperSlide>
     
     ))}
     
    </Swiper>
  
        </div>
        
    )
}

export default Fivedayforecast

