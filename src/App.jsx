import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Homapage from './pages/Homapage'
import About from './pages/About'
import Prodotti from './pages/Prodotti'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Homapage />} />
            <Route path='/chi-siamo' element={<About />} />
            <Route path='/prodotti' element={<Prodotti />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
