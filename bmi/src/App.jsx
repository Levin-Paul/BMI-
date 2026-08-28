import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBMI = (e) => {
    e.preventDefault()
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w) return
    const value = w / (h * h)
    setBmi(value.toFixed(1))
    if (value < 18.5) setCategory('Underweight')
    else if (value < 25) setCategory('Normal weight')
    else if (value < 30) setCategory('Overweight')
    else setCategory('Obese')
  }

  const reset = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setCategory('')
  }

  return (
    <div className="bmi-app">
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <label>
          Height (cm)
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 170"
            min="1"
          />
        </label>
        <label>
          Weight (kg)
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 65"
            min="1"
          />
        </label>
        <div className="actions">
          <button type="submit">Calculate</button>
          <button type="button" onClick={reset}>Reset</button>
        </div>
      </form>

      {bmi && (
        <div className="result">
          <p className="value">Your BMI: {bmi}</p>
          <p className="cat">Category: {category}</p>
        </div>
      )}
    </div>
  )
}

export default App
