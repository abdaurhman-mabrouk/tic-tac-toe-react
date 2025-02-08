import React from 'react';
import { useState, useEffect } from 'react';
import LoadingModal from '../../Indivaduals/LoadingModal/LoadingModal';
import './GameTable.css';

function GameTable() {
  const gameTableSquares = document.querySelectorAll('td.raw');

  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('');
  let gameTableInputsArray = [];

  const [squareIsFull, setSquareIsFull] = useState(0);

  const [modalIsShow, setModalIsShow] = useState(false);

  const checkWinner = useEffect(() => {
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
      handleWinner(square0.innerText);
      handleNotEqualGame();
    } else if (
      square3.innerText === square4.innerText &&
      square4.innerText === square5.innerText &&
      square3.innerText !== ''
    ) {
      handleWinner(square3.innerText);
      handleNotEqualGame();
    } else if (
      square6.innerText === square7.innerText &&
      square7.innerText === square8.innerText &&
      square6.innerText !== ''
    ) {
      handleWinner(square6.innerText);
      handleNotEqualGame();
    } else if (
      square0.innerText === square4.innerText &&
      square4.innerText === square8.innerText &&
      square0.innerText !== ''
    ) {
      handleWinner(square0.innerText);
      handleNotEqualGame();
    } else if (
      square2.innerText === square4.innerText &&
      square4.innerText === square6.innerText &&
      square2.innerText !== ''
    ) {
      handleWinner(square2.innerText);
      handleNotEqualGame();
    } else if (
      square0.innerText === square3.innerText &&
      square3.innerText === square6.innerText &&
      square0.innerText !== ''
    ) {
      handleWinner(square0.innerText);
      handleNotEqualGame();
    } else if (
      square1.innerText === square4.innerText &&
      square4.innerText === square7.innerText &&
      square1.innerText !== ''
    ) {
      handleWinner(square1.innerText);
      handleNotEqualGame();
    } else if (
      square2.innerText === square5.innerText &&
      square5.innerText === square8.innerText &&
      square2.innerText !== ''
    ) {
      handleWinner(square2.innerText);
      handleNotEqualGame();
    } else {
    }
  }, [gameTableSquares]);

  const handlePlayerClick = (squareId) => {
    var targetSquare = document.getElementById(squareId);

    if (targetSquare.innerText === '') {
      targetSquare.innerText = turn;
      setSquareIsFull(squareIsFull + 1);
      alert(squareIsFull);

      if (turn === 'X') {
        setTurn('O');
      } else {
        setTurn('X');
      }
    }
  };

  const handleWinner = (winner) => {
    alert(winner);
  };

  const handleEqualGame = () => {
    if (squareIsFull === 9) {
      alert('Equal Game');
    }
  };

  const handleNotEqualGame = () => {
    setModalIsShow(true);
    <LoadingModal isVisible={modalIsShow} />;

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
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
  );
}

export default GameTable;
