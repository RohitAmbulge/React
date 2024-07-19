import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // you can put any name instead of counter and setCounter
  let [counter,setCounter] =  useState(15)
  
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)

    if(counter > 20)
    {
      setCounter(20)
    }

  }

  const removeValue = () =>{
    setCounter(counter - 1)
    if(counter < 0)
    {
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>

    </>
  )
}

export default App
