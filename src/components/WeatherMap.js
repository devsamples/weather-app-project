import React,{Component} from 'react';

class WeatherMap extends Component {
  render(){
    return (
      <section id="map" className="map-area">

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=@${this.props.lat},${this.props.lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="weatherMap"></iframe>
          </div>
        </div>

      </section>
    )
  }
}

export default WeatherMap;
