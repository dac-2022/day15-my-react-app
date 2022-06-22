function App() {
  let str = "CDAC";
  let myfun = () => {
    alert();
    return "Helo";
  };

  return (
    <div>
      <h1>{str}</h1>

      <input type="button" value="Click Me!" onClick={myfun} />
    </div>
  );
}

export default App;
