import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const GameResult = ({ isOpen, onClose }) => {
  const { gameResult, timeElapsed } = useContext(GameContext);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: "20rem",
          width: "50rem",
          margin: "auto",
          padding: "2rem 2.5rem",
          boxShadow: "2px solid black",
        }}
      >
        <div className="flex justify-center pb-4">
          {gameResult ? (
            <div className="flex flex-col gap-4 mt-5 text-center">
              <p className="text-3xl font-extrabold">Congratulations!</p>
              <p className="text-3xl">
                You solved <strong>The Mini</strong>
              </p>
              <p>
                in <strong>{timeElapsed} seconds.</strong>
              </p>
              <div className="w-full">
                <button className="px-3 py-2 text-sm text-white bg-black border rounded-full ">
                  Share your results
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-8 text-center">
              <h2 className="text-3xl font-extrabold">Just about.</h2>
              <p>The puzzle is filled, but at least one</p>
              <p>square's amiss. Aw, shucks!</p>
              <div className="w-full">
                <button className="px-3 py-2 text-sm text-white bg-black border rounded-full ">
                  Keep trying
                </button>
              </div>
            </div>
          )}
        </div>

        {/* timer paused */}
        {/* <div className="flex flex-col gap-4">
          <h2>Your game is paused.</h2>
          <h2>Ready to play?</h2>
          <button className="border rounded-md">Continue</button>
          <p>Sunday, January 5, 2025</p>
          <p>
            By Tracy Bennett <span>&#x2022;</span>Edited by Sam Ezersky
          </p>
        </div> */}
      </div>
    </div>
  );
};
