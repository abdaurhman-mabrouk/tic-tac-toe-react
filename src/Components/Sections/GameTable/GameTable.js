import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './GameTable.css';
import LoadingModal from '../../Indivaduals/LoadingModal/LoadingModal';

function GameTable() {
  const gameTableSquares = document.querySelectorAll('td.raw');
  let gameTableInputsArray = [];

  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('');
  const [loser, setLoser] = useState('');
  const [squareIsFull, setSquareIsFull] = useState(0);
  const [modalIsShow, setModalIsShow] = useState(false);
  const [modalText, setModalText] = useState('');

  const checkGameProgress = useEffect(() => {
    const square0 = document.getElementById('square0');
    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
    const square3 = document.getElementById('square3');
    const square4 = document.getElementById('square4');
    const square5 = document.getElementById('square5');
    const square6 = document.getElementById('square6');
    const square7 = document.getElementById('square7');
    const square8 = document.getElementById('square8');

    if (
      square0.innerText === square1.innerText &&
      square1.innerText === square2.innerText &&
      square0.innerText !== ''
    ) {
      setWinner(square0.innerText);
      handleWinner(square0.innerText);
    } else if (
      square3.innerText === square4.innerText &&
      square4.innerText === square5.innerText &&
      square3.innerText !== ''
    ) {
      setWinner(square3.innerText);
      handleWinner(square3.innerText);
    } else if (
      square6.innerText === square7.innerText &&
      square7.innerText === square8.innerText &&
      square6.innerText !== ''
    ) {
      setWinner(square6.innerText);
      handleWinner(square6.innerText);
    } else if (
      square0.innerText === square4.innerText &&
      square4.innerText === square8.innerText &&
      square0.innerText !== ''
    ) {
      setWinner(square0.innerText);
      handleWinner(square0.innerText);
    } else if (
      square2.innerText === square4.innerText &&
      square4.innerText === square6.innerText &&
      square2.innerText !== ''
    ) {
      setWinner(square2.innerText);
      handleWinner(square2.innerText);
    } else if (
      square0.innerText === square3.innerText &&
      square3.innerText === square6.innerText &&
      square0.innerText !== ''
    ) {
      setWinner(square0.innerText);
      handleWinner(square0.innerText);
    } else if (
      square1.innerText === square4.innerText &&
      square4.innerText === square7.innerText &&
      square1.innerText !== ''
    ) {
      setWinner(square1.innerText);
      handleWinner(square1.innerText);
    } else if (
      square2.innerText === square5.innerText &&
      square5.innerText === square8.innerText &&
      square2.innerText !== ''
    ) {
      setWinner(square2.innerText);
      handleWinner(square2.innerText);
    } else {
    }
    handleEqualGame();
  }, [gameTableSquares]);

  const handlePlayerClick = (squareId) => {
    var targetSquare = document.getElementById(squareId);

    if (targetSquare.innerText === '') {
      targetSquare.innerText = turn;
      setSquareIsFull(squareIsFull + 1);

      if (turn === 'X') {
        setTurn('O');
      } else {
        setTurn('X');
      }
    }
  };

  const handleWinner = (winner) => {
    if (document.getElementById('loadingModalText')) {
      const loadingModalText = document.getElementById('loadingModalText');
      loadingModalText.style.color = 'green';
      loadingModalText.style.backgroundColor = 'black';
    }
    setModalIsShow(true);
    setModalText(`${winner} is Winner, Prepairing New Game`);
    handleNewGame();
  };

  const handleEqualGame = () => {
    //check if all Squares is Not Empty
    if (squareIsFull === 9) {
      setModalIsShow(true);
      setModalText('Equal Game');

      //Prepair a new game after end
      handleNewGame();
    }
  };

  const handleNewGame = (reloadPeriod = 4000) => {
    setTimeout(() => {
      window.location.reload();
    }, reloadPeriod);
  };

  return (
    <>
      <table id="gameTable">
        <tbody id="gameTableBody">
          <tr className="raw game-table-raw">
            <td
              className="square game-table-square"
              id="square0"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
            <td
              className="square game-table-square"
              id="square1"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
            <td
              className="square game-table-square"
              id="square2"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
          </tr>

          <tr className="raw game-table-raw">
            <td
              className="square game-table-square"
              id="square3"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
            <td
              className="square game-table-square"
              id="square4"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
            <td
              className="square game-table-square"
              id="square5"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
          </tr>

          <tr className="raw game-table-raw">
            <td
              className="square game-table-square"
              id="square6"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
            <td
              className="square game-table-square"
              id="square7"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
            <td
              className="square game-table-square"
              id="square8"
              onClick={(event) => {
                handlePlayerClick(event.target.id);
              }}></td>
          </tr>
        </tbody>
      </table>
      <LoadingModal isVisible={modalIsShow} loadingText={modalText} />;
    </>
  );
}

export default GameTable;
