import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../context/GameContext";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { timeElapsed, setTimeElapsed } = useContext(GameContext);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartPause = (time) => {
    setIsRunning(!isRunning);
    setTimeElapsed(time);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <h2>{formatTime(time)}</h2>
        <button onClick={() => handleStartPause(formatTime(time))}>
          {isRunning ? (
            <img className="w-4 h-4" src={PauseIcon} />
          ) : (
            <img className="w-4 h-4" src={PlayIcon} />
          )}
        </button>
        <button
          className="hidden"
          onClick={handleReset}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
