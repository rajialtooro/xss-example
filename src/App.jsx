import { useEffect, useRef, useState } from 'react'
import './App.css'
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState(`<h1>hello</h1>`)
  const [jolyanCode, setJolyanCode] = useState(code)
  const jolyanRef = useRef(null)

  useEffect(() => {
    if(jolyanRef.current) {
      const slotHtml = document.createRange().createContextualFragment(jolyanCode) // Create a 'tiny' document and parse the html string
      jolyanRef.current.innerHTML = '' // Clear the container
      jolyanRef.current.appendChild(slotHtml) // Append the new content
    }
  },[jolyanCode])

  return (
    <div className="text-center">
      <div>
      <Editor
          theme="vs-dark"
          height="40vh"
          options={{fontSize: 30}}
          value={code}
          defaultLanguage="html"
          onChange={(e) => {
            setCode(e)
          }}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
        setJolyanCode(code);
      }}>Hack Jolyan</button>
      <div style={{height: "40vh"}}>
        <div className="flex justify-center content-center align-middle mt-1">
      <img src="https://avatars.githubusercontent.com/u/88225432?s=400&u=6643cbc9c920bd9fce225a06c675a17e75a7c48a&v=4" />
      <h1 className="font-bold text-2xl text-blue-900 text-center align-middle flex justify-center content-center">jolyan Azzam</h1>
        </div>
      <div className="m-5 border-4 h-full">
        <div ref={jolyanRef}></div>
      </div>
      </div>
    </div>
  );
}

export default App
