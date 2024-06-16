import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />

        <p>
          This project was coded by Kasia Niemiec and is open-sourced on{" "}
          <a
            href="https://github.com/kasianiemiec/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://jocular-licorice-aaa95d.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
