import React from 'react'

const App = () => {
  return (
    <input onChange={(e)=>{
      console.log(e.target.value)
    }} type="text" />
  )
}

export default App
