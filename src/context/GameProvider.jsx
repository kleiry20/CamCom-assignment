import React, { useState } from "react";
import { GameContext } from "./GameContext";
import { questionData } from "../data/questionData";
import { gridData } from "../data/gridData";

export const GameProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(questionData[0]);
  const [gridInput, setGridInput] = useState(gridData);
  const [count, setCount] = useState(0);

  // to update answer for a cell
  const updateCell = (id, event) => {
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
  };

  // Update current question
  const updateCurrentQuestion = (question) => {
    setCurrentQuestion(question);
  };

  const highlightGridRow = () => {};

  const checkWord = () => {};

  const checkAnswer = (id) => {
    console.log("id", id);
    const currentItem = gridInput.find((item) => item.id === id);
    console.log("currentItem", currentItem);
    if (currentItem.userInput === currentItem.answer) {
      setCount(count + 1);
      console.log("updated count", currentItem.userInput, currentItem.answer);
    }
  };

  return (
    <GameContext.Provider
      value={{
        currentQuestion,
        gridInput,
        updateCell,
        checkAnswer,
        updateCurrentQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
