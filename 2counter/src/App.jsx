import { useState } from "react"; //usestate hook change ko propogate krny ka lia ui mai means dom
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let counter = 5;
  //usestate retuen a value in 0 index like here counter amd setcounter is a method
  //to propogate the changes is counter variable in the ui
  let [counter, setCounter] = useState(5);
  //the coutervariable value is updating on clicking addvalue button but
  //is not updating anywhere in the ui this is where react concept of hooks comes
  function addvalue() {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }

    console.log("helo value add", counter);
  }
  const removevalue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }

    console.log("value removed", counter);
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>couter value is {counter}</h2>
      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App;
