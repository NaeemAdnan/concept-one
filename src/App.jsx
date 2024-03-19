import { useState } from 'react'
import './App.css'

import handleClick from './components/function/test'


function App() {
  const result = handleClick();
  console.log(handleClick); //console a function.
  handleClick(); //function call.
  console.log(result)

  return (
    <>
      
      <h1>Vite + React</h1>
      
      
    </>
  )
}

export default App
