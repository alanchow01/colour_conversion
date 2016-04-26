import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './components/slider.jsx';

var ColourSlide = React.createClass({
  render: function() {
    return (
      <section className="wrapper">
        <header className="content">
          <h1>Simple RGB - CMYK Converter</h1>
        </header>

        <Slider/>

          <footer className="disclaimer">
            <p>
              CMYK Colour values and swatches are for reference only.<br />
              Please work with your printer to ensure colour accuracy!
            </p>
          </footer>
      </section>
    );
  }
});

ReactDOM.render(<ColourSlide />, document.querySelector('#colour-mount'));
