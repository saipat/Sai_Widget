import React from 'react';
import Widgets from './widgets';

const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
        }
    }
    return parts.join('&');
};


class Weather extends React.Component {
    constructor(){
        super();
        this.state = {
            weather: null
        };  
        // console.log(this);
        
        this.area = this.area.bind(this);
    }

    componentDidMount(){
        // console.log(navigator.geolocation.getCurrentPosition(this.area));
        navigator.geolocation.getCurrentPosition(this.area);
    }

    area(location){
        // console.log("inside area: " + this);
        
        let url = 'http://api.openweathermap.org/data/2.5/weather?';
        const positions = {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        };

        // console.log("positions:" + positions);

        url += toQueryString(positions);
        const API_KEY = "1ddef1f1b1b511353d32184336183ffe";
        url += `&APPID=${API_KEY}`;

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(xmlhttp.responseText);
                this.setState({ weather: data });
            }
        };

        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    }

    render() {
        let content = <div></div>;

        if (this.state.weather) {
            const weather = this.state.weather;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32;
            content = <div>
                <h4>{weather.name}</h4>
                <h4>{temp.toFixed(1)} degrees</h4>
            </div>;
        } else {
            content = <div className='loading'></div>;
        }
        return (
            <div className = "climate">
                <h2>Weather</h2>
                <div className='weather'>
                    {content}
                </div>
            </div>
        );
    
    }

    

}

export default Weather;