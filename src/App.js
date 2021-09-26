import "./App.css";

function Weather() {
  return (
    <div className="App container">
      <h1> Weather app</h1>
      <footer>
        <p>
          {"This project was code with React by"}
          <a
            href="https://www.linkedin.com/in/anastasiia-sherstobitova-4911971b0/"
            target="_blank"
            rel="noreferrer"
          >
            {"Anastasiia Sherstobitova"}
          </a>
          {"and it is"}
          <a
            href="https://www.linkedin.com/in/anastasiia-sherstobitova-4911971b0/"
            rel="noreferrer"
          >
            {"open-sourced"}
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Weather;
