import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [route, setRoute] = useState(["Loading"])
  const [isLoaded, setIsLoaded] = useState(false)
  const [step, setStep] = useState(0)
  const loadSheet = () => {
    axios.get("https://sheets.googleapis.com/v4/spreadsheets/1MHWsGUOfXQ6qYEkbgGzc6svhlt9pr0ZlLd9nWUjtr7Q/values/Sheet1!A:A?key=AIzaSyByszzO7OEIsYazzKUA52ngaNKTEIspeDs")
    .then(res => {
      console.log(res)
      setRoute(res.data.values)
      setIsLoaded(true)
    })
  }
  useEffect(() => { loadSheet() }, [])
  let display
  if (isLoaded) {
    display = (
      <div class="display">
        <img onClick={() => setStep(step - 1)} src="./src/left-arrow.png" alt="Previous Step"/>
        <p>{route[step]}</p>
        <img onClick={() => setStep(step + 1)} src="" alt="Next Step"/>
      </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Route Parser</h1>
      </header>
      <main>
        {display}
      </main>
      <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
