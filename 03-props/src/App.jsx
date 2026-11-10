import React from 'react'
import Card from './conponents/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user = 'Piyush' age = {20} img = 'https://i.pinimg.com/736x/d3/af/a7/d3afa7b59dab4c20f0f1963c74e338c2.jpg' />
     <Card user = 'Kanchan' age = {18} img = 'https://i.pinimg.com/736x/06/ca/4e/06ca4e8991799574c6283311e3e5990e.jpg' />

    </div>
  )
}

export default App
