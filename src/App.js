import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NILProject
        </p>
        <div>
          This is a barebones React app.
        </div>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
