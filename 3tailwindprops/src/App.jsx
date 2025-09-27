import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);
  let objects = {
    name: "areeba",
    regno: 22,
  };
  let arr = [1, 2, 3];

  return (
    <>
      {/* fragments */}
      <h1 className="bg-red-300 text-xl text-blue-50 rounded-3xl p-4 mb-5">
        tailwind
      </h1>
      <Card name="areeba" btn="click" />
      <Card name="zahid" btn="send" />
      <Card /> {/* the dafault values will be displayed on this card */}
    </>
  );
}

export default App;
