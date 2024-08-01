import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const AddValue = () => {
    if(count < 20){
      setCount(count+1)
    }
    else{
      alert("the value is not available before 20")
    } 
  }

  const RemoveValue = () => {
    if(count > 0){
      setCount(count-1)
    }
    else{
      alert("the value is not available before 0")
    }  
  }

  return (
    <>
      <h1>Counter</h1>
      <div >
        <button onClick={AddValue}>
          count add {count}
        </button>
        <br/>
        <button onClick={RemoveValue}>
          count remove {count}
        </button>
      </div>
    </>
  )
}

export default App
