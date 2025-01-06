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

  const checkFinalAnswer = (gridInput) => {
    gridInput.map((item) => {
      if (item.isCorrect === true) {
        setCount(count + 1);
      } else {
        // setCount(count - 1);
      }
      return count;
    });

    if (count == 23) {
      console.log("You WONNNNNN!", count);
    } else {
      console.log("You LOSEEE!", count);
    }
  };

  return (
    <GameContext.Provider
      value={{
        currentQuestion,
        gridInput,
        updateCell,
        checkFinalAnswer,
        updateCurrentQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
