import React from 'react';
import './GameTitleDiv.css';

function GameTitleDiv({ gameTitleText }) {
  return (
    <div id="gameTitleDiv">
      <p id="gameTitleText">{gameTitleText}</p>
    </div>
  );
}

export default GameTitleDiv;
