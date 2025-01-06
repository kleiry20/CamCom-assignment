import React, { useState, useEffect, useContext } from "react";
import { gridData } from "../data/gridData";
import { GameContext } from "../context/GameContext";

export const GameGrid = (props) => {
  const { cellsToHighlight, setSelectedQuestion } = props;
  const { checkFinalAnswer } = useContext(GameContext);
  const [count, setCount] = useState();

  const [gridInput, setGridInput] = useState(gridData);
  const [activeCell, setActiveCell] = useState("");

  useEffect(() => {
    setActiveCell(cellsToHighlight[0]);
  }, [cellsToHighlight]);

  function handleClick(item) {
    setActiveCell(item.id);
  }

  const handleChange = (id, event) => {
    const updatedItemList = gridInput.map((currentItem) => {
      if (currentItem.id === id) {
        const updatedValue = event.target.value.toUpperCase();

        // Perform checks directly here
        if (updatedValue === currentItem.answer) {
          // console.log("match! val, ans", updatedValue, currentItem.answer);
          return {
            ...currentItem,
            [event.target.name]: updatedValue,
            isCorrect: true,
          };
        } else {
          // console.log("NOO", updatedValue, currentItem.answer);
          return {
            ...currentItem,
            [event.target.name]: updatedValue,
            isCorrect: false,
          };
        }
      }
      return currentItem;
    });
    // console.log("updatedItemList", updatedItemList);
    setGridInput(updatedItemList);
  };

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   checkFinalAnswer(gridInput);
  //   // }, 4000);
  // }, [handleChange]);

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
                  checkFinalAnswer(gridInput);
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
    </form>
  );
};
