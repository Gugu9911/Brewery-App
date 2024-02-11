import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BreweryDetail from './pages/BreweryDetail'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/breweries/:id' element={<BreweryDetail />} />
  </Routes>
  )
}

export default App