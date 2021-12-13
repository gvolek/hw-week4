import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <h4>HW Week 4</h4>
      </header>
      Coded by: Gema Volek 🐾 using
      <a
        target="_blank"
        href="https://github.com/gvolek/hw-week4"
        rel="noreferrer"
      >
        GitHub
      </a>
      and hosted on
      <a
        target="_blank"
        href="https://app.netlify.com/sites/quirky-kilby-3068cb/deploys/61b6b3b71fcd5e3f20276d26"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}

export default App;
