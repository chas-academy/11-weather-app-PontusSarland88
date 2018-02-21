import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            weather: [],
            selectedOption: "metric"
        }
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
        const degrees = event.target.value;
        const cityName = event.nativeEvent.target.parentElement.parentElement.elements[0].value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${degrees}&APPID=5434f1c129e1ac657b10a23c1ac6a1e9`)
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

    onSubmit(e) {
        e.preventDefault();
        // if ("geolocation" in navigator) {debugger;
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         let lat = position.coords.latitude; 
        //         let long = position.coords.longitude;
        //       });
        //     let geo = navigator.geolocation;
        //   } else {
        //     /* geolocation IS NOT available */
        //   }
        
        const cityName = e.nativeEvent.target.elements[0].value;
        const degrees = this.state.selectedOption;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${degrees}&APPID=5434f1c129e1ac657b10a23c1ac6a1e9`)
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
              <div className="form-group ">
                <input name="group100" type="radio" id="radio100" value="metric" checked={this.state.selectedOption === 'metric'} onChange={this.handleOptionChange.bind(this)}/>
                <label>Celcius</label>
                <input name="group100" type="radio" id="radio101" value="imperial" checked={this.state.selectedOption === 'imperial'} onChange={this.handleOptionChange.bind(this)}/>
                <label>Farenheit</label>
            </div>
            </form>
            {this.state.weather && this.state.weather.length > 0 ? 
              <div className="App-weather">
                <img src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`} title="Title goes here" alt="A weather icon, describing the... weather" />
                {this.state.selectedOption === 'metric' ? (
                    <p>
                        {this.state.main.temp} Celcius
                        <br/>
                    </p>
                ) : (
                    <p>
                        {this.state.main.temp} Farenheit
                        <br/>
                    </p>
                )}
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
    