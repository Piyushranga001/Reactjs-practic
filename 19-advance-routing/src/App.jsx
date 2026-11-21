import React from 'react'
import Narbar1 from './Components/Pages/Navbars/Narbar1'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Product from './Components/Pages/Product'
import About from './Components/Pages/About'
import Mens from './Components/Pages/Mens'
import Women from './Components/Pages/Women'
import Kids from './Components/Pages/Kids'
import NotFound from './Components/Pages/NotFound'
import Courses from './Components/Pages/Courses'
import CoursesDetail from './Components/Pages/CoursesDetail'
import Navbar2 from './Components/Pages/Navbars/Navbar2'

const App = () => {

  let nave  = useNavigate()

  return (
    <div>
      <Narbar1/>
      <Navbar2/>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Product' element={<Product/>} >
          <Route path='Mens' element={<Mens/>}></Route>
          <Route path='Womens' element={<Women/>}></Route>
          <Route path='Kids' element={<Kids/>}></Route>
        </Route>

        <Route path='/Courses' element={<Courses/>} ></Route>
        <Route path='/Courses/:id' element={<CoursesDetail/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>
        
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      
    </div>
  )
}

export default App