import QRCode from "react-qr-code";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>

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
