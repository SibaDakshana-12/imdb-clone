import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // cleanup
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        ⏱ {seconds} sec
      </h1>

      <button
        onClick={startTimer}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Start
      </button>

      <button
        onClick={pauseTimer}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Pause
      </button>

      <button
        onClick={resetTimer}
        style={{
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Reset
      </button>
    </div>
  );
}
