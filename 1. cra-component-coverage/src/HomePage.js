import logo from "./logo.svg";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const contactId = Math.ceil(Math.random() * 10);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="App-link" to={`/contact/${contactId}`}>
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
