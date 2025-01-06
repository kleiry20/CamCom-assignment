import React, { useState } from "react";
import { GameContext } from "./GameContext";
import { questionData } from "../data/questionData";
import { gridData } from "../data/gridData";

export const GameProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(questionData[0]);
  const [gridInput, setGridInput] = useState(gridData);
  const [gameResult, setGameResult] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState();

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

  // to check the final answer of grid
  const checkFinalAnswer = (gridInput) => {
    for (let i = 0; i < gridInput.length; i++) {
      if (gridInput[i].isCorrect === true) {
        setGameResult(true);
        continue;
      } else {
        setGameResult(false);
        return false;
      }
    }
    setGameResult(true);
    return true;
  };

  return (
    <GameContext.Provider
      value={{
        currentQuestion,
        gridInput,
        updateCell,
        checkFinalAnswer,
        gameResult,
        setGameResult,
        updateCurrentQuestion,
        timeElapsed,
        setTimeElapsed,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
