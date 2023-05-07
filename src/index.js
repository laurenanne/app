import React from "react";
import ReactDOM from "react-dom";
import fruits from "./foods";
import { choice, remove } from "./helpers";

function App() {
  let randFruit = choice(fruits);
  let fruitArr = remove(fruits, randFruit);

  return (
    <div className="App">
      <p>I'd like one {randFruit}, please</p>
      <p>Here you go {randFruit}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {fruitArr.length} left.</p>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
