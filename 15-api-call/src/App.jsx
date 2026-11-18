import React from 'react'
import axios from "axios"
import { useState } from 'react';

const App = () => {

  const [DataValues, setDataValues] = useState([]);

  const datavalue =  async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

    setDataValues(response.data)
    // setDataValues(data)
  }

  
  return (
    <div>
      <button onClick={datavalue}>Click  me </button>
      <div>
        {DataValues.map(function(e){

          return <h1>helo {e.title}</h1>
        })}
      </div>
      
    </div>
  )
}

export default App
