import { useState } from "react";

function App() {
  let list = ["delhi", "caluctta"];

  return (
    <div>
      <h1>List demo</h1>

      {list.map((item) => (
        <h1>{item}</h1>
      ))}

      <input type="button" value="Add More Element!" />
    </div>
  );
}

export default App;
