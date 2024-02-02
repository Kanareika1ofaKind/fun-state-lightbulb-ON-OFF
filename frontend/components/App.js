import React, { useState } from 'react'

function App() {
  const [isOn, setIsOn] = useState(false)
  const [count, setCount] = useState(0)
  const toggle = evt => setIsOn(!isOn)     // eslint-disable line
  const inc = evt => setCount(count + 1)   // eslint-disable line
 
  return (
    <div>
      <h2>Lightbulb & Counter</h2>
      <div onClick={toggle}>The bulb is {isOn ? 'ON' : 'OFF'}</div>
      <div onClick={inc}>The count is {count}</div>
    </div>
  )
}

export default App 
