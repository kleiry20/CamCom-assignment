import React, { useState, useContext } from "react";
import { GameGrid } from "./GameGrid";
import { questionData } from "../data/questionData";
import { GameContext } from "../context/GameContext";
export const GameView = () => {
  const { currentQuestion, updateCurrentQuestion } = useContext(GameContext);

  const [selectedAcrossIndex, setSelectedAcrossIndex] = useState(null);
  const [selectedDownIndex, setSelectedDownIndex] = useState(null);
  // const [activeCell, setActiveCell] = useState();

  const [selectedQuestion, setSelectedQuestion] = useState(questionData[0]);

  // const handleAcrossClick = (index) => {
  //   setSelectedAcrossIndex(index);
  //   setSelectedDownIndex(null);
  // };

  // const handleDownClick = (index) => {
  //   setSelectedDownIndex(index);
  //   setSelectedAcrossIndex(null);
  // };

  // const handleHintDisplay = (item) => {
  //   setSelectedQuestion(item);
  //   // setActiveCell(item.cells[0]);
  // };

  // useEffect(() => {
  //   setActiveCell(cellsToHighlight[0]);
  // }, [cellsToHighlight]);

  return (
    <article className="flex gap-4">
      <section className="flex flex-col items-end w-1/2 gap-2 p-4">
        <div
          className="p-4"
          style={{ backgroundColor: "#DCEFFF", width: "30.25rem" }}
        >
          <p className="font-semibold">
            {/* {selectedQuestion?.quesNumber +
              (selectedQuestion?.direction === "across" ? "A" : "D")} */}
            {currentQuestion?.quesNumber +
              (currentQuestion?.direction === "across" ? "A" : "D")}
            <span className="ml-2 font-normal">
              {/* {selectedQuestion?.quesText} */}
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
                          // handleAcrossClick(item.id);
                          // handleHintDisplay(item);
                          updateCurrentQuestion(item);
                        }}
                        className="hint-li"
                        style={{
                          backgroundColor:
                            // selectedAcrossIndex === item.id
                            //   ? "#A7D8FE"
                            //   : "white",
                            currentQuestion.id === item.id
                              ? "#A7D8FE"
                              : "white",
                        }}
                      >
                        <span className="font-semibold">{item.quesNumber}</span>
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
                          // handleDownClick(item.id);
                          // handleHintDisplay(item);
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
                        <span className="font-semibold">{item.quesNumber}</span>
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
  );
};
