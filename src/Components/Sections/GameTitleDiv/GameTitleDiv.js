import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './GameTitleDiv.css';

function GameTitleDiv({ gameTitleText }) {
  return (
    <div id="gameTitleDiv">
      <p id="gameTitleText">
        {gameTitleText ? gameTitleText : `${new Date().toTimeString()}`}
      </p>
    </div>
  );
}

export default GameTitleDiv;
