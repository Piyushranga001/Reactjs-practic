import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from './Component/ThemeContext'
import Navbar from './Component/Navbar'

const App = () => {
const [theme,setTheme] = useContext(ThemeDataContext)


  return (
    <div>
      
      <h1>The theme of this page is {theme}</h1>
      <Navbar/>
    </div>
  )
}

export default App