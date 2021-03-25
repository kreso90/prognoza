import React, { Component } from 'react'


export default class Forecast extends Component {
    constructor(props){
        super(props);
        this.state = {
           nameCity: null,
           mainTemp: null,
        
        }
    }

    changesCity(namecity){
        namecity = this.props.city
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${namecity}&units=metric&appid=729e86f0a3dd2bd324196ccee8e89bfd`)
        .then(response => response.json())
        .then(data => this.setState({nameCity: data.name, mainTemp: data.main.temp}));
    }

    render() {
        const {nameCity, mainTemp} = this.state;
        return (
            <div>
                {nameCity}
                {mainTemp}
               {this.props.city}
            </div>
        )
    }
}
