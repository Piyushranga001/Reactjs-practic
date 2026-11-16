import React, { useState } from 'react'

const App = () => {
  let [num, setnum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() =>{
        setnum(num + 1)
      }}>Increase By 1</button>
      <button onClick={() => {
        setnum(num - 1);
      }}>Decrease by 1</button>
      <button onClick={() => {
        setnum(num + 5)
      }}>Increase by 5</button>
    </div>
  )
}

export default App
