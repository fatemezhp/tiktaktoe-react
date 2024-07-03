import React, { useState } from "react";
import Squre from "./Square";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

 
  const squreClickHandler = (i) => {
    if (squares[i]  || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();   
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="flex flex-wrap align-center justify-evenly">
      <div>
        <Squre value={squares[0]} onSquareClick={() => squreClickHandler(0)} />
        <Squre value={squares[1]} onSquareClick={() => squreClickHandler(1)} />
        <Squre value={squares[2]} onSquareClick={() => squreClickHandler(2)} />
      </div>
      <div>
        <Squre value={squares[3]} onSquareClick={() => squreClickHandler(3)} />
        <Squre value={squares[4]} onSquareClick={() => squreClickHandler(4)} />
        <Squre value={squares[5]} onSquareClick={() => squreClickHandler(5)} />
      </div>
      <div>
        <Squre value={squares[6]} onSquareClick={() => squreClickHandler(6)} />
        <Squre value={squares[7]} onSquareClick={() => squreClickHandler(7)} />
        <Squre value={squares[8]} onSquareClick={() => squreClickHandler(8)} />
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Board;
