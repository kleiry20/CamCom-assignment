import React, { useState } from "react";
import { GameGrid } from "./GameGrid";
import { questionData } from "../data/questionData";

export const GameView = () => {
  const [selectedAcrossIndex, setSelectedAcrossIndex] = useState(null);
  const [selectedDownIndex, setSelectedDownIndex] = useState(null);

  const [selectedQuestion, setSelectedQuestion] = useState(questionData[0]);

  const handleAcrossClick = (index) => {
    setSelectedAcrossIndex(index);
    setSelectedDownIndex(null);
  };

  const handleDownClick = (index) => {
    setSelectedDownIndex(index);
    setSelectedAcrossIndex(null);
  };

  const handleHintDisplay = (item) => {
    setSelectedQuestion(item);
  };

  return (
    <article className="flex gap-4">
      <section className="w-1/2  flex flex-col items-end p-4 gap-2">
        <div
          className="p-4"
          style={{ backgroundColor: "#DCEFFF", width: "25.25rem" }}
        >
          <p className="font-semibold">
            {selectedQuestion?.quesNumber +
              (selectedQuestion?.direction === "across" ? "A" : "D")}
            <span className="font-normal ml-2">
              {selectedQuestion?.quesText}
            </span>
          </p>
        </div>
        <GameGrid cellsToHighlight={selectedQuestion?.cells} />
      </section>
      <section className="flex flex-grow ">
        <div className="flex-grow flex gap-6 p-2">
          {/* Across List */}
          <div className="w-2/5">
            <h3 className="border-b uppercase font-bold pb-1">Across</h3>
            <ul className="">
              {questionData.map((item, index) => {
                return (
                  <>
                    {item.direction === "across" && (
                      <li
                        key={item.id}
                        onClick={() => {
                          handleAcrossClick(item.id);
                          handleHintDisplay(item);
                        }}
                        className="hint-li"
                        style={{
                          backgroundColor:
                            selectedAcrossIndex === item.id
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
            <h3 className="border-b uppercase font-bold pb-1">Down</h3>
            <ul className="ps-4">
              {questionData.map((item, index) => {
                return (
                  <>
                    {item.direction === "down" && (
                      <li
                        key={item.id}
                        onClick={() => {
                          handleDownClick(item.id);
                          handleHintDisplay(item);
                        }}
                        className="hint-li"
                        style={{
                          backgroundColor:
                            selectedDownIndex === item.id ? "#A7D8FE" : "white",
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

{
  /* <section className="flex flex-grow ">
  <div className="flex-grow flex gap-6 p-2">
    <div className="w-2/5">
      <h3 className="border-b uppercase font-bold pb-1">Across</h3>
      <ul className="">
        {hintData.across.map((item, index) => (
          <li
            key={index}
            onClick={() => handleAcrossClick(index)}
            className="hint-li"
            style={{
              backgroundColor:
                selectedAcrossIndex === index ? "#A7D8FE" : "white",
            }}
          >
            <span className="font-semibold">{item.hintNumber}</span>
            <span>{item.hintText}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="w-2/5">
      <h3 className="border-b uppercase font-bold pb-1">Down</h3>
      <ul className="ps-4">
        {hintData.down.map((item, index) => (
          <li
            key={index}
            onClick={() => handleDownClick(index)}
            className="hint-li"
            style={{
              backgroundColor:
                selectedDownIndex === index ? "#A7D8FE" : "white",
            }}
          >
            <span className="font-semibold">{item.hintNumber}</span>
            <span>{item.hintText}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>; */
}
