import logo from './download.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className = "version">V1.01</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NILProject development server
        </p>
        <div>
          Links to our sites:
        </div>
        <a
          className="App-link"
          href="https://drive.google.com/drive/folders/1JTyFjwYsAKY4JwzCAeN94vbVGYR-pjHD"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shared folder
        </a>
        <a
          className="App-link"
          href="https://app.asana.com/0/1202927509660694/1203010425889848"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asana
        </a>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified"
          target="_blank"
          rel="noopener noreferrer"
        >
          react lol ( eventual gate to demo site arch )
        </a>
      </header>
    </div>
  );
}

export default App;
