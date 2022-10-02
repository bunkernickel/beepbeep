import logo from './download.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Jarrod
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi Everybody
        </a>
      </header>
    </div>
  );
}

export default App;
