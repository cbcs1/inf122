import { useState } from "react";
import React from "react";

export const Tercero=()=>{
    const [time, setTime] = useState(0);

  const startTime = () => {
    window.myTime = setInterval(() => {
        setTime((time) => time + 1);
    }, 1000);
  };
  const stopTime = () => {
    clearInterval(window.myTime);
  };
  const resetTime = () => {
    clearInterval(window.myTime);
    setTime(0);
  };

    return(
        <div className="container">
        <h1>Cronometro de minutos</h1>
        <span>{Math.trunc(time / 60)} minutos </span>
        <span>{time % 60} segundos</span>
        <div>
          <button onClick={startTime}>Start</button>
          <button onClick={stopTime}>Stop</button>
          <button onClick={resetTime}>Reset</button>
        </div>
      </div>
    );
}