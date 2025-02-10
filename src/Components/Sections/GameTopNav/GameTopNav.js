import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './GameTopNav.css';
import LoadingModal from '../../Indivaduals/LoadingModal/LoadingModal';
import handleNewGame from '../GameTable/GameTable.js';
import handleStartGame from '../GameTable/GameTable.js';

function GameTopNav() {
  const handleStartGame = () => {};
  const handleNewGame = () => {
    window.location.reload();
  };
  const handlePauseGame = () => {};
  const handleResumeGame = () => {};
  const handleExitGame = () => {};

  return (
    <nav id="topNav">
      <a href="#" /*onClick={}*/ className="top-nav-link link">
        Start
      </a>

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
