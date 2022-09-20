import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Count></Count>
    </div>
  );
}

////count component
function Count() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div
      style={{
        backgroundColor: "beige",
        margin: "40px",
        padding: "20px",
        borderRadius: "10px",
        border: "2px solid brown",
      }}
    >
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
export default App;
