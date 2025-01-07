import React, { useState, useContext } from "react";
import { GameGrid } from "./GameGrid";
import { questionData } from "../data/questionData";
import { GameContext } from "../context/GameContext";
import { GameResult } from "./GameResult";
export const GameView = () => {
  const { currentQuestion, updateCurrentQuestion, gameResult, setGameResult } =
    useContext(GameContext);
  console.log("gameree", gameResult);
  const [selectedQuestion, setSelectedQuestion] = useState(questionData[0]);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setGameResult(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <article className="flex gap-4">
        <section className="flex flex-col items-end w-1/2 gap-2 p-4">
          <div
            className="p-4"
            style={{ backgroundColor: "#DCEFFF", width: "30.25rem" }}
          >
            <p className="font-semibold">
              {currentQuestion?.quesNumber +
                (currentQuestion?.direction === "across" ? "A" : "D")}

              <span className="ml-2 font-normal">
                {currentQuestion?.quesText}
              </span>
            </p>
          </div>

          <GameGrid
            cellsToHighlight={currentQuestion?.cells}
            setSelectedQuestion={setSelectedQuestion}
          />
        </section>
        <section className="flex flex-grow ">
          <div className="flex flex-grow gap-6 p-2">
            {/* Across List */}
            <div className="w-2/5">
              <h3 className="pb-1 font-bold uppercase border-b">Across</h3>

              <ul>
                {questionData.map((item, index) => {
                  return (
                    <>
                      {item.direction === "across" && (
                        <li
                          key={item.id}
                          onClick={() => {
                            updateCurrentQuestion(item);
                          }}
                          className="hint-li"
                          style={{
                            backgroundColor:
                              currentQuestion.id === item.id
                                ? "#A7D8FE"
                                : "white",
                          }}
                        >
                          <span className="font-semibold">
                            {item.quesNumber}
                          </span>
                          <span>{item.quesText}</span>
                        </li>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
            {/* Down List */}
            <div className="w-2/5">
              <h3 className="pb-1 font-bold uppercase border-b">Down</h3>
              <ul className="ps-4">
                {questionData.map((item, index) => {
                  return (
                    <>
                      {item.direction === "down" && (
                        <li
                          key={item.id}
                          onClick={() => {
                            updateCurrentQuestion(item);
                          }}
                          className="hint-li"
                          style={{
                            backgroundColor:
                              currentQuestion.id === item.id
                                ? "#A7D8FE"
                                : "white",
                          }}
                        >
                          <span className="font-semibold">
                            {item.quesNumber}
                          </span>
                          <span>{item.quesText}</span>
                        </li>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </article>

      <div className="p-4 text-right">
        <button
          id="game-result-btn"
          className="px-3 py-2 border rounded-md" // style={{ display: "none" }}
          onClick={handleOpen}
        >
          Check result
        </button>
        <GameResult isOpen={gameResult} onClose={handleClose} />
      </div>

      {/* {gameResult &&
        document
          .getElementById("game-result-btn")
          .addEventListener("click", () => handleOpen())} */}
    </>
  );
};
