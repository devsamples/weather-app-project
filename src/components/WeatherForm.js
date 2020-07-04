import React, {Component} from 'react';

import './WIassets/WeatherForm.css';

class WeatherForm extends Component {

  render(){
    return (
      <header className="p-4 h-100">
        <div className="overlay"></div>
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white p-4">
              <h1 className="display-3">Weather API</h1>

              <div className="divider-custom divider-light d-flex align-items-center p-0">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">Busca tu ciudad</div>
                <div className="divider-custom-line"></div>
              </div>

              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form onSubmit={this.props.getWeather}>

                  <div className="form-row">

                    <div className="col-12 col-md-6 mb-2 mb-md-0">
                      <input type="text" name="ciudad" className="form-control form-control-lg" placeholder="Ciudad" />
                    </div>
                    <div className="col-12 col-md-3 mb-2 mb-md-0">
                      <input type="text" name="pais" className="form-control form-control-lg" placeholder="País" />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Buscar!</button>
                    </div>

                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default WeatherForm;
