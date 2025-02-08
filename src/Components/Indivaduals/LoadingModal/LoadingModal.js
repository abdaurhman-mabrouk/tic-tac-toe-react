import React from 'react';
import './LoadingModal.css';
import loadingSvg from '../../../Assets/images/loading-bar-squares.svg';

function LodingModal({ isVisible }) {
  if (isVisible === true) {
    return (
      <div id="loadingModalDiv" className="loading-modal">
        <img
          src={loadingSvg}
          alt="Loading"
          id="loadingModalImage"
          className="loading-modal"
        />

        <br />

        <p id="loadingModalText" className="loading-modal">
          Loading...
        </p>
      </div>
    );
  } else {
    <></>;
  }
}

export default LodingModal;
