import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StopWatch } from './Components/StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <div className="both">
 <h1>Age Calculator</h1>
    <p>The Age Calculator can detremine the age</p> */}
     <StopWatch/>
 {/* </div> */}

    </>
  )
}

export default App
