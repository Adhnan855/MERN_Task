import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Component1/>} />
        <Route path='/Component2' element={<Component2/>} />
        <Route path='/Component3' element={<Component3/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
