import React, {Component} from 'react';

// CSS
import './WIassets/WeatherForm.css';

class WeatherForm extends Component {
  constructor (props){
    super(props);
    // this.items = [
    //   "alalal",
    //   "alalal",
    //   "alalal",
    //   "alalal",
    //   "jnewrjjwer",
    //   "sasdas"
    // ];

    this.state = {
      suggestions: [],
      text: ""
    };

  }

  onTextChanged = e => {
    const {items} = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0){
      const regex = new RegExp(`^${value}`,'i');
      suggestions = items.sort().filter(v => regex.test(v));
    }
    // this.setState({suggestions});
    this.setState({suggestions, text: value});
  }

  suggestionSelected = value => {
    this.setState({
      text: value,
      suggestions: []
    })
  }

  renderSuggestions = e => {
    const {suggestions} = this.state;
    if (suggestions.length === 0){ return null; }
    return (
      <div className="position-relative">
        <ul className="auto-li text-muted px-4 position-absolute w-100">
          {suggestions.map((item,i) => <li onClick={() => this.suggestionSelected(item)} key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }

  render(){
    const {text} = this.state;
    return (
      <header className="p-4 d-flex align-items-center">
        <div className="overlay"></div>
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white p-4">
              <h1 className="display-3">Weather API</h1>

              <div className="divider-custom divider-light d-flex align-items-center p-0 mt-0">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">Busca tu ciudad</div>
                <div className="divider-custom-line"></div>
              </div>

              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form onSubmit={this.props.getWeather}>

                  <div className="form-row">

                    <div className="col-12 col-md-6 mb-2 mb-md-0 auto-ul">
                      <input type="text" name="ciudad" className="form-control form-control-lg" placeholder="Ciudad"/>
                    </div>
                    <div className="col-12 col-md-3 mb-2 mb-md-0 auto-ul">
                      <input type="text" name="pais" className="form-control form-control-lg" placeholder="País" onChange={this.onTextChanged} value={text}/>
                      {this.renderSuggestions()}
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
