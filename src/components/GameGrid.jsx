import React, { useState, useEffect, useContext } from "react";
import { gridData } from "../data/gridData";
import { GameContext } from "../context/GameContext";

export const GameGrid = (props) => {
  const { cellsToHighlight, setSelectedQuestion } = props;
  const { updateCell } = useContext(GameContext);

  const [gridInput, setGridInput] = useState(gridData);
  const [activeCell, setActiveCell] = useState("");

  useEffect(() => {
    setActiveCell(cellsToHighlight[0]);
  }, [cellsToHighlight]);

  function handleClick(item) {
    // console.log(item.id);
    setActiveCell(item.id);
  }

  const handleChange = (id, event) => {
    const updatedItems = gridInput.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [event.target.name]: event.target.value.toUpperCase(),
        };
      }
      if (event.target.value.toUpperCase() === item.answer) {
        setCount(count + 1);

        console.log("updated count", currentItem.userInput, currentItem.answer);
      }
      return item;
    });
    setGridInput(updatedItems);
  };

  const checkAnswer = (id) => {
    console.log("id", id);
    const currentItem = gridInput.find((item) => item.id === id);
    console.log("currentItem", currentItem);
    if (currentItem.userInput === currentItem.answer) {
      setCount(count + 1);
      console.log("updated count", currentItem.userInput, currentItem.answer);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     checkAnswer(id);
  //   }, 4000);
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
                // key={item.id}
                id={item.id}
                type="text"
                maxLength="1"
                className="text-6xl uppercase selected cell-input"
                value={item.userInput}
                name="userInput"
                onChange={(event) => {
                  handleChange(item.id, event);
                  // checkAnswer(item.id);
                }}
                // onChange={(event) => {
                //   updateCell(item.id, event);
                //   checkAnswer(item.id);
                // }}
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
