function App() {
  let title = "Counter Application";
  let counter = 1;

  let likeMe = () => {
    counter += 1;
    console.log(counter);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h1>{counter}</h1>

      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
