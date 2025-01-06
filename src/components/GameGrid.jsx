import React, { useState, useEffect, useContext } from "react";
import { gridData } from "../data/gridData";
import { GameContext } from "../context/GameContext";

export const GameGrid = (props) => {
  const { cellsToHighlight, setSelectedQuestion } = props;
  const { checkFinalAnswer, gameResult, setGameResult } =
    useContext(GameContext);

  const [gridInput, setGridInput] = useState(gridData);
  const [activeCell, setActiveCell] = useState("");

  useEffect(() => {
    setActiveCell(cellsToHighlight[0]);
  }, [cellsToHighlight]);

  function handleClick(item) {
    setActiveCell(item.id);
  }

  // updates the user input in state variable
  const handleChange = (id, event) => {
    const updatedItemList = gridInput.map((currentItem) => {
      if (currentItem.id === id) {
        const updatedValue = event.target.value.toUpperCase();

        if (updatedValue === currentItem.answer) {
          return {
            ...currentItem,
            [event.target.name]: updatedValue,
            isCorrect: true,
          };
        } else {
          return {
            ...currentItem,
            [event.target.name]: updatedValue,
            isCorrect: false,
          };
        }
      }

      return currentItem;
    });

    // tab switching logic
    var index_of_id = cellsToHighlight.indexOf(id);
    if (index_of_id != -1 && index_of_id != cellsToHighlight.length - 1) {
      setActiveCell(cellsToHighlight[index_of_id + 1]);
      document.getElementById(cellsToHighlight[index_of_id + 1]).focus();
    }

    setGridInput(updatedItemList);
    checkFinalAnswer(updatedItemList);
  };

  return (
    <form className="flex-wrap game-grid">
      {gridInput &&
        gridInput.map((item) => {
          return (
            <div
              key={item.id}
              className="cell"
              style={{
                backgroundColor: item.isEditable
                  ? activeCell === item.id
                    ? "yellow"
                    : cellsToHighlight.includes(item.id) && "#A7D8FE"
                  : "black",
              }}
            >
              <span className="cell-placeholder">{item.placeholder}</span>
              <input
                id={item.id}
                type="text"
                maxLength="1"
                className="text-6xl uppercase selected cell-input"
                value={item.userInput}
                name="userInput"
                onChange={(event) => {
                  handleChange(item.id, event);
                }}
                onClick={() => handleClick(item)}
                style={{
                  caretColor: "transparent",
                  backgroundColor: item.isEditable
                    ? activeCell === item.id
                      ? "yellow"
                      : cellsToHighlight.includes(item.id) && "#A7D8FE"
                    : "black",
                }}
              />
            </div>
          );
        })}
      {/* {gameResult ? alert("Game solved!") : alert("Try again")} */}
    </form>
  );
};
