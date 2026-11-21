import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <h1>This is Nav Bar</h1>
      {/* <div className="nav">
        <a href="/">Home</a>
        <a href="/Contact">Contact</a>
        <a href="/About">About</a>
      </div> */}
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>

      <Routes>
        <Route path='/' element= {<Home/>} ></Route>
        <Route path='/Contact' element= {<Contact/>} ></Route>
        <Route path='/About' element= {<About/>} ></Route>
      </Routes>

    </div>
  )
}

export default App
