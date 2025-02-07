import React from 'react';
import './LoadingBar.css';
import loadingSvg from '../../../Assets/images/loading-bar-squares.svg';

function LodingBar() {
  return (
    <div id="loadingBarDiv" className="loading-bar">
      <img
        src={loadingSvg}
        alt="Loading"
        id="loadingBarImage"
        className="loading-bar"
      />

      <br />

      <p id="loadingBarText" className="loading-bar">
        Loading...
      </p>
    </div>
  );
}

export default LodingBar;
