import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './components/slider.jsx';

var ColourSlide = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <header className="content">
          <h1>RGB - HEX - CMYK Converter</h1>
        </header>

        <Slider/>

          <footer className="disclaimer">
            <p>
              Use the generated CMYK colour values as a guide only.<br />
              Please work with your printer to ensure colour accuracy!
            </p>
          </footer>
      </div>
    );
  }
});

ReactDOM.render(<ColourSlide />, document.querySelector('#colour-mount'));
