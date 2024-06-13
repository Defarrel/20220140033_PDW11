import logo from './Waguri Kaoruko.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            "I love Waguri Kaoruko"
        </p>
        <a
          className="App-link"
          href="https://myanimelist.net/character/211945/Kaoruko_Waguri"
          target="_blank"
          rel="noopener noreferrer"
        >
          klik sini!
        </a>
      </header>
    </div>
  );
}

export default App;
