import React, { useState, useEffect } from "react";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // To track whether the stopwatch is running or paused

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Update every second
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer); // Cleanup timer
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning); // Toggle between start and pause
  };

  const handleReset = () => {
    setTime(0); // Reset time to 0
    setIsRunning(false); // Stop the stopwatch
  };

  // Format the time into mm:ss
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <div
        className="flex gap-1 items-center"
        //   style={{ textAlign: "center", marginTop: "20px" }}
      >
        <h2>{formatTime(time)}</h2>
        <button onClick={handleStartPause}>
          {isRunning ? (
            <img className="h-4 w-4" src={PauseIcon} />
          ) : (
            <img className="h-4 w-4" src={PlayIcon} />
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
