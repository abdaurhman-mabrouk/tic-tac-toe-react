import React from 'react';
import './GameTopNav.css';

function GameTopNav() {
  return (
    <nav id="topNav">
      <a href="." className="top-nav-link link">
        New Game
      </a>
      <a href="." className="top-nav-link link">
        Pause
      </a>
      <a href="." className="top-nav-link link">
        Resume
      </a>
      <a href="." className="top-nav-link link">
        Exit
      </a>
    </nav>
  );
}

export default GameTopNav;
