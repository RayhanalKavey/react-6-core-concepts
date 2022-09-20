import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Count></Count>
      <div className="boxstyle-parent">
        <LoadComments></LoadComments>
      </div>
    </div>
  );
}
//load comments
function LoadComments() {
  const [comments, setComment] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComment(data.slice(0, 10)));
  }, []);
  return (
    <div>
      <h1 className="boxstyle">{comments.length} comments found.</h1>

      {comments.map((comment) => DisplayComment(comment))}
    </div>
  );
}

function DisplayComment(props) {
  // console.log(props);
  const { id, name, email, body } = props;
  return (
    <div className="boxstyle">
      <h3>Name: {name}</h3>
      <h4>ID: {id}</h4>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
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
