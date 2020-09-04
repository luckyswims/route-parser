import React, { Fragment, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [route, setRoute] = useState(["Loading"])
  const [isLoaded, setIsLoaded] = useState(false)
  const [step, setStep] = useState(0)
  const [link, setLink] = useState()
  const [sheet, setSheet] = useState()
  const [range, setRange] = useState()
  const [target, setTarget] = useState()
  const handleChange = event => {
  switch (event.target.id) {
    case "link":
      setLink(event.target.value)
      break
    case "sheet":
      setSheet(event.target.value)
      break
    case "range":
      setRange(event.target.value)
      break
    case "target":
      setTarget(Number(event.target.value))
      break
    default:
      break
  }
}
  const previousStep = num => {
    if (num > 0) {
      setStep(num - 1)
    }
  }
  const nextStep = num => {
    if (num < route.length - 1) {
      setStep(num + 1)
    }
  }
  const loadSheet = event => {
    event.preventDefault()
    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${link}/values/${sheet}!${range}?key=AIzaSyByszzO7OEIsYazzKUA52ngaNKTEIspeDs`)
    .then(res => {
      console.log(res)
      setRoute(res.data.values)
      setIsLoaded(true)
    })
  }
  const goTo = event => {
    event.preventDefault()
    setStep(target - 1)
  }
  let display
  if (isLoaded) {
    display = (
      <Fragment>
        <div className="display">
          <img onClick={() => previousStep(step)} src="https://github.com/luckyswims/route-parser/blob/master/public/left-arrow.png?raw=true" alt="Previous Step"/>
          <p>{route[step]}</p>
          <img onClick={() => nextStep(step)} src="https://github.com/luckyswims/route-parser/blob/master/public/right-arrow.png?raw=true" alt="Next Step"/>
        </div>
        <form onSubmit={goTo}>
          <label htmlFor="target">Go to Step:</label>
          <input type="text" id="target" onChange={handleChange}/>
          <input type="submit"/>
        </form>
      </Fragment>
    )
  } else {
    display = (
      <form onSubmit={loadSheet}>
        <label htmlFor="link">Google Sheet ID</label>
        <input type="text" id="link" onChange={handleChange}/>
        <label htmlFor="sheet">Sheet Name</label>
        <input type="text" id="sheet" placeholder="Sheet1" onChange={handleChange}/>
        <label htmlFor="range">Range</label>
        <input type="text" id="range" placeholder="A1:A100" onChange={handleChange}/>
        <input type="submit"/>
      </form>
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
