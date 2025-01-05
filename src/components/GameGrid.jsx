import React, { useState, useEffect } from "react";
import { gridData } from "../data/gridData";

export const GameGrid = (props) => {
  const { cellsToHighlight } = props;

  console.log("cellsToHighlight", cellsToHighlight);

  const [activeCell, setActiveCell] = useState("");

  useEffect(() => {
    setActiveCell(cellsToHighlight[0]);
  }, [cellsToHighlight]);

  // const inactiveCells = [...cellsToHighlight];
  // inactiveCells.shift();

  const [gridInput, setGridInput] = useState(gridData);

  function handleClick(item) {
    setActiveCell(item.id);
  }

  function handleChange(e) {
    // setGridInput()
  }

  console.log("active", activeCell);

  return (
    <form className="game-grid flex-wrap">
      {gridInput.map((item) => {
        return (
          <input
            key={item.id}
            id={item.id}
            type="text"
            maxLength="1"
            className="text-6xl uppercase text-center selected"
            onChange={(e) => handleChange(e)}
            onClick={() => handleClick(item)}
            // style={{
            //   backgroundColor: activeCell.includes(item.id)
            //     ? "yellow"
            //     : "white" && inactiveCells.includes(item.id)
            //     ? "#A7D8FE"
            //     : "white",
            // }}
            style={{
              backgroundColor:
                activeCell === item.id
                  ? "yellow"
                  : cellsToHighlight.includes(item.id)
                  ? "#A7D8FE"
                  : "white",
            }}
          />
        );
      })}
    </form>
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
