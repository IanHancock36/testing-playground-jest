import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

function App() {
  const a = 1;
  const b = 2;
  return (
    <div className="App">
      <ul>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Pears</li>
      </ul>
      <h1 data-testid="mytestid">Hello</h1>
      <span title="sum">{a + b}</span>

      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
