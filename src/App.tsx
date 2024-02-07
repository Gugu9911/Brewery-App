import React from 'react'
import {useFetch} from './hooks/useFetch'

const LISTBREWERIES = 'https://api.openbrewerydb.org/vi/breweries'

const App = () => {
  const { data, loading } = useFetch(LISTBREWERIES)


  return (
    <div>App</div>
  )
}

export default App