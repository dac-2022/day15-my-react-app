import { useState } from "react";

function App() {
  let [title] = useState("Counter Application");
  let [counter, setCounter] = useState(1);

  let likeMe = () => {
    counter += 1;
    setCounter(counter);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
      <h1>{counter}</h1>

      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
