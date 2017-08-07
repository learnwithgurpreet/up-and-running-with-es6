import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'weather-report';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'New Delhi',
      description: ''
    };
  }
  componentDidMount() {
    this.grabWeather(this.state.city);
  }
  grabWeather(city) {
    fetch(`https://demo0737567.mockable.io/${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          description: (json.weather) ? json.weather : 'Sorry, no results found'
        })
      });
  }
  render() {
    return (
      <div>
        <h1>Weather report for {this.state.city}</h1>
        <h2>{this.state.description}</h2>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));