import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            weather: []
        }
    }

    onSubmit(e) {
        e.preventDefault();
        
        const cityName = e.nativeEvent.target.elements[0].value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=5434f1c129e1ac657b10a23c1ac6a1e9`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    weather: res.weather,
                    wind: res.wind,
                    main: res.main,
                    sys: res.sys
                }, function () {
                    console.log(this.state.weather);
                });
            });
    }

    render() {
        return (
          <div className="container">
            <form onSubmit={this.onSubmit.bind(this)}>
              <input className="form-control" type="text" placeholder="Type the city name here" name="city" />
              <button className="btn btn-primary" type="submit">Get weather</button>
            </form>
            { this.state.weather.length > 0 ? 
              <div className="App-weather">
                <img src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`} title="Title goes here" alt="A weather icon, describing the... weather" />
                <p>
                  {this.state.weather[0].description}
                </p>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Wind</td>
                            <td>{this.state.wind.speed} m/s</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{this.state.main.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Sunrise</td>
                            <td>{this.calculateTime(this.state.sys.sunrise)}</td>
                        </tr>
                        <tr>
                            <td>Sunset</td>
                            <td>{this.calculateTime(this.state.sys.sunset)}</td>
                        </tr>
                    </tbody>
                </table>
              </div>
              : <p>No results yet</p>
            }
          </div>
        );
    }
    
    calculateTime(time) {
        return new Date(time * 1e3).toISOString().slice(-13, -5);
    }
}
 
export default Form;
    