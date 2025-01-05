import React, { useState, useEffect } from "react";
import { gridData } from "../data/gridData";

export const GameGrid = (props) => {
  const { cellsToHighlight, setSelectedQuestion } = props;

  const [gridInput, setGridInput] = useState(gridData);
  const [activeCell, setActiveCell] = useState("");

  useEffect(() => {
    setActiveCell(cellsToHighlight[0]);
  }, [cellsToHighlight]);

  function handleClick(item) {
    setActiveCell(item.id);
    // setSelectedQuestion(item);
  }

  const handleChange = (id, event) => {
    const updatedItems = gridInput.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [event.target.name]: event.target.value.toUpperCase(),
        };
      }
      return item;
    });
    setGridInput(updatedItems);
    // setActiveCell(item.id)
  };

  // const updateCell = (item) => {
  //   setActiveCell(item.id);

  // };

  console.log("GridInpiut", gridInput);

  // console.log("active", activeCell);

  return (
    <form className="flex-wrap game-grid">
      {gridInput &&
        gridInput.map((item) => {
          return (
            <input
              key={item.id}
              id={item.id}
              type="text"
              maxLength="1"
              placeholder={item.placeholder}
              className="text-6xl text-center uppercase selected"
              value={item.userInput}
              name="userInput"
              onChange={(event) => {
                handleChange(item.id, event);
              }}
              onClick={() => handleClick(item)}
              style={{
                backgroundColor: item.isEditable
                  ? activeCell === item.id
                    ? "yellow"
                    : cellsToHighlight.includes(item.id) && "#A7D8FE"
                  : "black",
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

// backgroundColor: item.isEditable
//                 ? "red"
//                 : "black" && activeCell === item.id
//                 ? "yellow"
//                 : cellsToHighlight.includes(item.id)
//                 ? "#A7D8FE"
//                 : "white",

// TASKS:
// 1. take input and update state variable
// 2. handle tab shifting for input while typing forward and backspace
// 3. handle active cell color while typing or backspace
// 4. integrate timer when game starts and end it
// 5. check if answer input matches the correct answer
// 6. alert when answer does not match
// 7. put placeholders in grid, black spots in grid
