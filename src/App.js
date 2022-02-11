import React, { useEffect, useState } from "react"
import FruitList from "./components";
import FruitListItem from "./components"
import './App.css';

let intervalId = 0;

const music = new Audio("../public/ring.wav");
const breakTime = 5;
const workTime = 25;
let data = [

];


function TimerComponent() {
  
  
  
  let [second, setSecond] = useState(0);
  let [minute, setMinute] = useState(25);
  let [btnText, setBtnText] = useState("Start");
  let [taskName, setTaskName] = useState("fdsafsdafsda");
  let [mylist, setMyList] = useState([{id:1, name:"fdsa"}]);
  // let taskBar = <h1>fdsafsadfsad</h1>;
 
  useEffect( () => {
    setBtnText(!intervalId ? "Start" : "Pause");
  }, [intervalId]);

  const resetComponents = (flag) => {
    setBtnText(!flag ? "Start" : "Pause");
  }

  const countDown = () => {
    if(!second) {
      second = 59;
      minute--;
    }
    else second--;
    setSecond(second);
    setMinute(minute);
    if(!second && !minute) {
      music.play();
      debugger
      mylist.shift(mylist.indexOf(0));
      setMyList(mylist);
      handleResetClick();
    }
  }

  const handleFireClick = () => {
    !intervalId ? intervalId = setInterval(countDown, 100) : intervalId = clearInterval(intervalId);
    resetComponents(intervalId);
  }

  const handleResetClick = () => {
    intervalId = clearInterval(intervalId);
    setSecond(0);
    setMinute(25);
  }

  const handleBreakClick = () => {
    if(!intervalId)
      setMinute(1);
  }

  const handleWorkClick = () => {
    if(!intervalId) setMinute(25);
  }

  const handleAddClick = () => {
    const ulData = {
      id: data.length + 1,
      name: taskName
    };
    debugger
    data.push(ulData);
    setMyList(data);
    mylist = data;
    handleFireClick();
    handleResetClick();
  }

  // useEffect( () => {
  //   list = (data);  
  //   setList(list);
  // }, [data])

  const handleInputChange = (event) => {
    const target = event.target;
    taskName = target.value;
    
  }

  return (
    <div>
      <label>{ minute }</label>
      <label>:</label>
      <label>{ second }</label>
      <input onChange={handleInputChange}></input>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleBreakClick}>Break Time</button>
      <button onClick={handleWorkClick}>Work Time</button>
      <button onClick={handleFireClick}>{btnText}</button>
      <button onClick={handleResetClick}>Reset</button>
      <FruitList fruits={mylist} />
    </div>
  )
}




function App() {
  
  return (
    <div className="App">
      <TimerComponent />      
    </div>
  );
}

export default App;
