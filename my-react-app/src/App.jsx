import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlueButton from './components/BlueButton.jsx'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  // below wont work
  var wrongCount = 0

  // functions that try to change without useState and setter
  const increaseWrongCount = () => {
    wrongCount = wrongCount + 1
  }

  const decreaseWrongCount = () => {
    wrongCount = wrongCount - 1
  }


  return (
    <>
      <Card title="Card Title" ></Card>
      <BlueButton />
      
      <h1>Count: { count }</h1>
      <button onClick={() => increaseCount()} > increase </button>
      <button onClick={ () => decreaseCount()} > decrease </button>

      <h1>Test: {wrongCount} </h1>
      {/* clicking these will do nothing :( */}
      <button onClick={() => increaseWrongCount()} > increase </button>
      <button onClick={() => decreaseWrongCount()} > decrease </button>
    </>
  )
}

export default App
