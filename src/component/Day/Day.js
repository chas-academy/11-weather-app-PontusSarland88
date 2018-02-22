import React, { Component } from 'react';
// import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
        day: []
    }
  }

  getDay(date) {
      let day = new Date(date);
      console.log(day); 
    switch (day.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    return day;
  }

  render() {
    /* :) 
    const backgroundStyle = {
      backgroundImage: `url('https://source.unsplash.com/500x150/?${this.props.interval.weather[0].description}&sig=${Math.random()}')`
    }
    */
    return (
      <div>
       <table className="table table-bordered table-dark table-hover">
            <tbody>
                <tr>
                    <td>{this.props.interval.dt_txt}</td>
                    <td>{this.getDay(this.props.interval.dt_txt)}</td>
                </tr>
                <tr>
                    <td>Weather</td>
                    <td className="bg-success">{this.props.interval.weather[0].description}
                    <img src={`http://openweathermap.org/img/w/${this.props.interval.weather[0].icon}.png`} title="Title goes here" alt="A weather icon, describing the... weather" />
                    </td>
                </tr>
                <tr>
                    <td>Temerature</td>
                    <td className="bg-info">{this.props.interval.main.temp}</td>   
                </tr>
                <tr>
                    <td>Wind speed</td>
                    <td className="bg-info">{this.props.interval.wind.speed}</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td className="bg-info">{this.props.interval.main.humidity} %</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}
export default Day;
/*
 <h2 className="h2">Weather forecast for 5 days<h2>
clouds Object {all=0}
dt 1519419600
dt_txt "2018-02-23 21:00:00"
main Object {temp=-11.15, temp_min=-11.15, ...}
snow Object {}
sys Object {pod="n"}
weather [Object {id=800, main="Clear", description="clear sky", ...}]
wind Object {speed=2.96, deg=12.0082}
*/