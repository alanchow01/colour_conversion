import React from 'react';
import Sliders from './sliders.js';

import '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Colours</h2>
        </div>
        <p className="App-intro">
        A simple app that converts RGB values to CMYK and HEX values.
        </p>
        <Sliders />
      </div>
    );
  }
}
