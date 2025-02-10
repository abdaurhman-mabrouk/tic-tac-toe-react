import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './LoadingModal.css';
import loadingSvg from '../../../Assets/images/loading-bar-squares.svg';

function LodingModal({ isVisible, loadingText }) {
  if (isVisible) {
    document.getElementById('gameTable').style.opacity = '0.3';
    document.getElementById('topNav').style.opacity = '0.3';
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
          {loadingText ? loadingText : 'Loading...'}
        </p>
      </div>
    );
  } else {
    <></>;
  }
}

export default LodingModal;
