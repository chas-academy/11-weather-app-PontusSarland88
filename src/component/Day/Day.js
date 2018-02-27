import React, { Component } from 'react';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
        day: []
    }
  }

  getDay(date) {
      let day = new Date(date);
    switch (day.getDay()) {
        case 0:
            day = "Monday";
            break;
        case 1:
            day = "Tuesday";
            break;
        case 2:
            day = "Wednesday";
            break;
        case 3:
            day = "Thursday";
            break;
        case 4:
            day = "Friday";
            break;
        case 5:
            day = "Saturday";
            break;
        case 6:
            day = "Sunday";
            break;
    }
    return day;
  }

  render() {

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
                    <td>Temperature</td>
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
