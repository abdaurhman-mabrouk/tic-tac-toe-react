import React from 'react';
import './GameTopNav.css';
import LoadingModal from '../../Indivaduals/LoadingModal/LoadingModal';
// import handleNewGame from '../GameTable/GameTable.js';

function GameTopNav() {
  const handleNewGame = () => {
    window.location.reload();
  };

  const handlePauseGame = () => {};
  const handleResumeGame = () => {};
  const handleExitGame = () => {};

  return (
    <nav id="topNav">
      <a href="#" onClick={handleNewGame} className="top-nav-link link">
        New Game
      </a>
      <a href="." /*onClick={``}*/ className="top-nav-link link">
        Pause
      </a>
      <a href="." /*onClick={``}*/ className="top-nav-link link">
        Resume
      </a>
      <a href="#" /*onClick={``}*/ className="top-nav-link link">
        Exit
      </a>
    </nav>
  );
}

export default GameTopNav;
