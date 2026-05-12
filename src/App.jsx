import "./App.css";
import Counter from "./componets/counter/counter";
import LikeButton from "./componets/like-button";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
    </div>
  );
}

export default App;
