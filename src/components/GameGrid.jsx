import React, { useState } from "react";
import { gridData } from "../data/gridData";

export const GameGrid = (props) => {
  const { cellsToHighlight } = props;

  console.log("cellsToHighlight", cellsToHighlight);

  const [activeCell, setActiveCell] = useState(cellsToHighlight[0]);
  // const [activeRow, setActiveRow] = useState(cellsToHighlight);

  const inactiveCells = [...cellsToHighlight];
  inactiveCells.shift();
 

  const [gridInput, setGridInput] = useState(gridData);

  function handleClick(item) {
    setActiveCell(item.id);
  }

  console.log("active", activeCell);

  return (
    <div className="game-grid flex-wrap">
      {gridInput.map((item) => {
        return (
          <input
            key={item.id}
            type="text"
            maxLength="1"
            className="text-6xl uppercase text-center"
            // value={() => handleChange()}
            // value={activeCell}

            onClick={() => handleClick(item)}
            style={{
              backgroundColor: activeCell.includes(item.id)
                ? "yellow"
                : "white" && inactiveCells.includes(item.id)
                ? "#A7D8FE"
                : "white",
            }}
          />
        );
      })}
    </div>
  );
};

{
  /* {Array.from({ length: gridSize }).map((_, colIndex) => (
        <div key={colIndex} className="row">
          {Array.from({ length: gridSize }).map((_, rowIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              maxLength="1" // Allow only one character per cell
              className="cell"
              onClick={() => {
                handleClick(rowIndex, colIndex);
                console.log("cell click", { rowIndex }, { colIndex });
              }}
            />
          ))}
        </div>
      ))} */
}
