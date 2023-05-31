import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/home/home'
import About from './component/about/about';
import Services from './component/services/services';
import Contact from './component/contact/contact';
import Login from './component/login/login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        
       



      </Routes>
    </BrowserRouter>
  )
}

export default App
