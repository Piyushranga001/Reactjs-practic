import React, { useEffect, useState } from 'react'

const App = () => {

  let [a, seta] = useState(0)
  let [b, setb] = useState(0)
  
  function aChanging(){
    seta(a+1)
  }

  function bChanging(){
    setb(b+1)
  }

  useEffect(function(){
    console.log('UseState is running')
  },[b])

  
  return (
    <div>
      <button onClick={aChanging}>Change A</button>
      <button onClick={bChanging}>Change b</button>
    </div>
  )
}

export default App