import "./App.css";
import ClickablePicture from "./componets/clickable-picture/clickable-picture";
import Counter from "./componets/counter/counter";
import LikeButton from "./componets/like-button";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
