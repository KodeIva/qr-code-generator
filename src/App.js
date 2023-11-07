
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
    <div className="App bg-slate-100 w-full h-[100vh]">
      <h1 className='text-3xl text-slate-700 font-semibold pt-9 mb-9'>QR Code Generator</h1>
  
      <div className='bg-pink-200 py-8'>
        <div className='my-3 py-4'>
          <h4 className='text-lg font-medium mb-2 text-slate-700'>Enter your link</h4>
          <input className='h-10 w-60 rounded-xl shadow-md outline-none pl-3' type='text' value={link} onChange={(e) => linkChange(e)} />
        </div>
        <div className='my-3 py-4'>
          <h4 className='text-lg font-medium mb-2 text-slate-700'>Enter website name </h4>
          <input className='h-10 w-60 rounded-xl shadow-md outline-none pl-3' type='text' value={name} onChange={(e) => nameChange(e)} />
        </div>
        <button
          className=' bg-slate-600 text-white text-lg rounded-xl w-36 mt-10 py-2 hover:bg-white border-4 border-slite-100 hover:text-slate-600 hover:border-3 hover:border-slate-600 transition duration-600' 
          onClick={generator}>
            Generate
        </button>
           {isClicked && <div className='flex flex-wrap'>
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
