import React from 'react'
import '../Css/Weather.css'
import { useSelector } from 'react-redux'
import Loader from './Loader';

function Weather() {

    const days = useSelector(state => state.weather.days);

    if (!days || days.length === 0) {
        return <Loader />
    }


    return (
        <div className='weather-cont'>
            <h2 className='city'>{days[0].city} ({days[0].country})</h2>
            <img className='weather-ico' src={`src/img/weather/${days[0].weatherIco}.png`} alt="weather" />
            <span className='temp'>{days[0].temperature} °C</span>
            <span className='weather-name'>{days[0].weather}</span>
            <ul className='other-days'>
                <li className='day'>
                    <h4>{days[1].date}</h4>
                    <img src={`src/img/weather/${days[1].weatherIco}.png`} alt="" />
                    <span>{days[1].temperature} °C</span>
                </li>
                <li className='day'>
                    <h4>{days[2].date}</h4>
                    <img src={`src/img/weather/${days[2].weatherIco}.png`} alt="" />
                    <span>{days[2].temperature} °C</span>
                </li>
                <li className='day'>
                    <h4>{days[3].date}</h4>
                    <img src={`src/img/weather/${days[3].weatherIco}.png`} alt="" />
                    <span>{days[3].temperature} °C</span>
                </li>
                <li className='day'>
                    <h4>{days[4].date}</h4>
                    <img src={`src/img/weather/${days[4].weatherIco}.png`} alt="" />
                    <span>{days[4].temperature} °C</span>
                </li>


            </ul>
        </div>
    )
}

export default Weather