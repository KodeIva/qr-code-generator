import QRCode from "react-qr-code";

import './App.css';
import { useState } from "react";

function App() {

  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [codes, setCodes] = useState([])

  function linkChange(e) {
    setLink(e.target.value)
  }

  function nameChange(e) {
    setName(e.target.value)
  }

  function generator() {
    codes.push({link:link, name:name})
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={link}
          viewBox={`0 0 256 256`}
        />
      </div>

      <div>
        <div>
          <h4>Enter your link</h4>
          <input type='text' value={link} onChange={(e) => linkChange(e)} />
        </div>
        <div>
          <h4>Enter website name </h4>
          <input type='text' value={name} onChange={(e) => nameChange(e)} />
        </div>
        <button onClick={generator}>Generate</button>
      </div>
    </div>
  );
}

export default App;
