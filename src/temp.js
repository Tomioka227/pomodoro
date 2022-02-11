import React, { useEffect, useState } from "react"
import './App.css';

let flag = false;
function StartButton(props) {
  const handleClick = () => {
    if ( props.onClick ) {
      if(!flag) 
        props.onClick(58);
    }
  }; 
  return <button id="start" onClick={handleClick}>Start</button>;
}

function ResetButton(prop_Sec, prop_Min) {
  const handleClick = () => {
    prop_Sec.onClick(59);
    prop_Min.onClick(4);
  }
  return <button id="reset" onClick={handleClick}>Reset</button>;
}

function TimerComp() {

  const timeCounter = () => {

    if(second <= 0) {
      minute --;
      second = 59;
    } else --second;
    minute - 1 < 0 ? minute = 0 : minute = minute;
    setSecond(second); 
    setMinute(minute);   
  }

  let [second, setSecond] = useState(59);
  let [minute, setMinute] = useState(5);
  useEffect(() => {
    if(!flag && second) {
      setInterval(timeCounter, 1000);
      flag = true;
    }
  }, [second])
  return (
    <div className="timer">
      <label id="min">{minute}</label>
      <label>:</label>
      <label id="sec">{second}</label>
      <StartButton onClick={setSecond} />
      <ResetButton onClick={setSecond, setMinute} />
    </div>
  );
}

function App() {
  
  return (
    <div className="App">
      <TimerComp />      
    </div>
  );
}

export default App;
