import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./slices/quotesSlice";
import { Provider } from "react-redux";

function App() {
  const store = configureStore({
    reducer: { quotes: quotesSlice },
  });

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
