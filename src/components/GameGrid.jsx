import React, { useState } from "react";
import { gridData } from "../data/gridData";

export const GameGrid = (props) => {
  const { cellsToHighlight } = props;
  console.log("cellsToHighlight", cellsToHighlight);

  const [gridInput, setGridInput] = useState(gridData);

  function handleClick(rowIndex, colIndex) {}

  function handleChange(e) {}

  return (
    <div className="game-grid flex-wrap">
      {gridInput.map((item) => {
        return (
          <input
            key={item.id}
            // key={`${rowIndex}-${colIndex}`}
            type="text"
            maxLength="1"
            className="cell"
            // value={(e) => handleChange(e)}
            // onClick={() => {
            //   handleClick(rowIndex, colIndex);
            //   console.log("cell click", { rowIndex }, { colIndex });
            // }}
            // onClick={()=>}
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
