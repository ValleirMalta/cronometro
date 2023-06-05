import React, { useEffect, useState } from "react";
import "./input.css";
import "./App.css";

function App() {
  const targetDate = new Date("2023-06-07T20:30:00");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      // O cronômetro já chegou ao destino
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="min-h-screen w-full flex items-center justify-center page-cronometro px-8 py-8">
      <div className="ww-96 bg-white rounded-lg p-4 border-2 border-black-200 px-8">
        <h1 className="font-sans">
          Contagem regressiva para o nosso primeiro encontro!
          <strong className="italic">17 maio 2023</strong>
        </h1>
        <div className="lista-horas flex">
          <p className="font-sans">
            Days: <strong>{timeRemaining.days}</strong>
          </p>
          <p className="font-sans">
            Hours: <strong>{timeRemaining.hours}</strong>
          </p>
          <p className="font-sans">
            Minutes: <strong>{timeRemaining.minutes}</strong>
          </p>
          <p className="font-sans">
            Seconds: <strong>{timeRemaining.seconds}</strong>
          </p>
        </div>
        <p className="names italic">Valleir e Emely!</p>
      </div>
    </div>
  );
}

export default App;
