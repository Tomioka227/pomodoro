import React from "react";

// class CounterComponent extends React.Component {
//     state = { count: 0, intervalId: 0 };
  
//     handleClick = () => {
//       if(this.state.intervalId){
//         clearInterval(this.state.intervalId);
//         this.setState(prevState => {
//           return {
//             ...prevState,
//             intervalId: 0,
//           };
//         });
//         return;
//       }
      
//       const newIntervalId = setInterval(() => {
//         this.setState(prevState => {
//           return {
//             ...prevState,
//             count: prevState.count + 1,
//           };
//         });
//       }, 1000);
      
//       this.setState(prevState => {
//         return {
//           ...prevState,
//           intervalId: newIntervalId,
//         };
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <label>{this.state.count}</label>
//           <button onClick={this.handleClick}>
//             {this.state.intervalId? "Stop counter": "Start counter"}
//           </button>
//         </div>
//       );
//     }
//   }

function FruitListItem(props) {
  return <li>{props.fruit.name}</li>;
}

function FruitList(props) {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}

export default FruitList;