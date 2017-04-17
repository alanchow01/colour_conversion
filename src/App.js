import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Colours!</h2>
        </div>
        <p className="App-intro">
          A simple app that converts RGB values to CMYK and HEX values.
        </p>
      </div>
    );
  }
}

export default App;
