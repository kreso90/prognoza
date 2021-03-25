import 'swiper/swiper.scss'
import './style.scss';
import React, {useEffect, useState} from 'react';
import Getweather from './components/Getweather';
import Fivedayforecast from './components/Fivedayforecast';


function App() {
  const [city, setCity] = useState('Zagreb');
  const [getCity, setGetCity] = useState('Zagreb');
  const [selectCity, setSelectCity] = useState("")
  const changeCity = () => {
    setGetCity(city)
  }

  const handleSelect = async value => {};
  return (
    <div className="container">
      <div className="wrapper">
        <div className="search_wrapper">
            <input className="city_search" placeholder="Search city" type="text" value={city} onChange={e => setCity(e.target.value)}/>
            <button className="search_button" type="button" onClick={changeCity}>Search</button>
        </div>
        <Getweather getCity={getCity}/>
        <Fivedayforecast getCity={getCity}/> 
      </div>
    </div>
  );
}

export default App;
