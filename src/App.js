import { useState } from "react";

function App() {
  let title = "Counter Application";

  let counter1 = 0;
  let [counter, setCOunter] = useState(0);

  let str1 = "hello";
  let [str, setStr] = useState("Hello");

  let list1 = [];
  let [list, setList] = useState([]);

  return (
    <div>
      <h1>{title}</h1>

      <input type="button" value="Add More Element!" />
    </div>
  );
}

export default App;
