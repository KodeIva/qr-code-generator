
import './App.css';
import { useState } from "react";
import CodesList from "./component/CodesList";

function App() {

  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [codes, setCodes] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  function linkChange(e) {
    e.preventDefault()
    setLink(e.target.value)
  }

  function nameChange(e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function generator(e) {
    e.preventDefault()
    setIsClicked(true)

    if(!name && !link) return null
    else {
       codes.push({link:link, name:name})
    }
   
    setLink('')
    setName('')
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
  
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
        {isClicked && <div>
          {codes.map((code) => {
            return (
              <CodesList link={code.link} name={code.name}/>
            )
          })}
        </div>
        
        }
      </div>
    </div>
  );
}

export default App;
