import { useState } from "react";

function App() {
  let [list, setList] = useState(["delhi", "caluctta"]);

  let addNewCity = () => {
    let value = document.querySelector("#id1").value;
    // let newlist = ["KOCHI", ...list];
    let newlist = [value, ...list];
    setList(newlist);
  };

  return (
    <div>
      <h1>List demo</h1>

      <input type="text" id="id1" />
      <input type="button" value="Add More Element!" onClick={addNewCity} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
