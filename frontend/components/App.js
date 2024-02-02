import React, { useState } from 'react'

function App() {
  const [isOn] = useState(true)

  return (
    <div>
      <h2>Lightbulb</h2>
      <div>The bulb is {isOn ? 'ON' : 'OFF'}</div>
    </div>
  )
}

export default App
