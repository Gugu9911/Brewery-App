import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BreweryDetail from './pages/BreweryDetail'
import SearchResult from './pages/SearchResult'
import Header from './components/Header'
import FilterResult from './pages/FilterResult'

const App = () => {
  return (
    <div>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/breweries/:id' element={<BreweryDetail />} />
    <Route path='/search' element={<SearchResult />} />
    <Route path='/filter' element={<FilterResult />} />
  </Routes>
  </div>
  )
}

export default App