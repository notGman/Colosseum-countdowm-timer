import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import './Timer.css'

const Count = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00: 00: 00: 00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total,days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer((days > 9 ? days: "0" + days)+
      ": " +
        (hours > 9 ? hours : "0" + hours) +
          ": " +
          (minutes > 9 ? minutes :"0" + minutes) +
          ": " +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {

		//SET THE DATE HERE ***
    let deadline = new Date("March 10, 2023 00:00:00"); 
    // let deadline = new Date("Feb 08, 2023 19:07:40"); 
		
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <Container className="mt-5">
      <div className="d-flex align-items-center flex-column">
        <h2 className="timerStyle text-start">{timer}</h2>
				<div className="d-flex timeText">
					<p>DAYS</p>
					<p>HOURS</p>
					<p>MINUTES</p>
					<p>SECONDS</p>
				</div>
      </div>
    </Container>
  );
};

export default Count;
