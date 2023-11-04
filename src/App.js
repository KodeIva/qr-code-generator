
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>QR Code Generator</h1>

      <div>
        <div>
          <h4>Enter your link</h4>
          <input type='text' />
        </div>
        <div>
          <h4>Enter website name </h4>
          <input type='text' />
        </div>
        <button>Generate</button>
      </div>
    </div>
  );
}

export default App;
