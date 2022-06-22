function App() {
  let price = 100;
  let str = "CDAC";
  let ref = { name: "rahul" };
  let myfun = (a, b) => a + b;

  return (
    <div>
      <h1>{str}</h1>
      <h1>{price}</h1>
      <h1>{ref.name}</h1>
      <h1>{myfun(1, 1)}</h1>

      <h1 id="id1">{str}</h1>
      <h1 id={price}> {str}</h1>
    </div>
  );
}

export default App;
