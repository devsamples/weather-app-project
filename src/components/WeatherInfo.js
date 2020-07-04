import React, {Component} from 'react';

import './WIassets/WeatherInfo.css';

class WeatherInfo extends Component {
  render(){
    const data = this.props;

    const amanecer = new Date(data.sunrise*1000);
    const sunrise = amanecer.getHours() + "am";


    const atardecer = new Date(data.sunset*1000);
    const sunset = atardecer.getHours() + "hs";

    return (

      <div className="wrapper-info">

        <section className="resume-section">

        {
          data.error &&
          <div className="alert alert-danger my-4">
            <p>
              {data.error}
            </p>
          </div>
        }

        {
          !data.error && !data.city && !data.country &&
          <div className="card">
            <div className="card-body">
              <div className="alert alert-primary my-4">
              <p>
                Introduce Ciudad y País
              </p>
              </div>
            </div>
          </div>
        }

        {

          !data.error && data.city && data.country ?
            <div className="resume-section-content">

              <h2 className="mb-5" style={{color: "#C72B7B"}}>{data.city} <small><span style={{color:"#ACB6C4"}}>{data.country}</span></small></h2>

              <div className="d-flex flex-column flex-md-row mb-5">
                  <div className="icon-anchor">

                    <div className="position-relative">
                      <h3 className="mb-0">Temp: {data.temperature} ºC</h3>
                      <img className="position-absolute" style={{top: "-30px",right: "0"}} src={"http://openweathermap.org/img/wn/" + data.icon + "@2x.png"} alt="This icon showing a reference of the weather"/>
                    </div>
                    <div className="subheading mb-3">
                      <span style={{color:"#68D0BC"}}>Min: {data.temp_min} ºC /</span> <span style={{color:"#FF5417"}}>Max: {data.temp_max} ºC</span>
                      <p>
                         Amanecer: {sunrise} - Atardecer: {sunset}
                      </p>
                    </div>
                    <h4 style={{color: "#C72B7B"}}>{data.description}</h4>
                    <p>
                      Sensación térmica {data.feels_like} ºC | Humedad: {data.humidity} % | Velocidad del Viento: {data.wind_speed} Km/h
                    </p>
                  </div>
              </div>

              <p className="text-center">
                <small style={{color:"#ACB6C4"}}>La ubicación en el mapa corresponde a la estación climática que toma los datos.</small>
              </p>

            </div>

          :

          <div className="mb-4"/>

        }

        </section>

      </div>
    )
  }
}

export default WeatherInfo;
