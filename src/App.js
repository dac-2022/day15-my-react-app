function App() {
  let price = 100;
  let str = "CDAC";
  let active = true;
  let list = ["A", "B"];
  let ref = { name: "rahul" };

  return (
    <h1>
      hello World {price} {str} {active} {list}
      {ref.name}
    </h1>
  );
}

export default App;
