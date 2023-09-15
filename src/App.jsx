import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'

function App() {

  const [houses, setHouses] = useState([ { name: 'Lakeside Villa', address: '123 Lake St, Watertown, MA', price: 1000000, isSold: false }, { name: 'Mountain Retreat', address: '456 Mountain Rd, Boulder, CO', price: 750000, isSold: true }, { name: 'Downtown Apartment', address: '789 Main St, Seattle, WA', price: 500000, isSold: false }]);

  return (
    <>
      <Home houses={houses}/>
    </>
  )
}

export default App
