import React, { useState } from "react";

function Square({ value , onSquareClick }) {
  return (
    <button className="border-red-500 text-red-500 w-11 h-11 flex justify-center"
    onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
