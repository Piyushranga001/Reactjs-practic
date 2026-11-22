import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from './ThemeContext'

const Navbar = () => {

  const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div><button onClick={() => {
      setTheme('Dark')
    }}>Change theme</button></div>
  )
}

export default Navbar