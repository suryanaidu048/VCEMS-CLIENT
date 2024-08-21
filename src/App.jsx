import React from 'react'
import Dashboard from './pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Pcc1 from './pages/Pcc1'
import Pcc3 from './pages/Pcc3'
import SinglePage from './pages/SinglePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/Pcc1' element={<Pcc1/>} />
        <Route path='/Pcc3' element={<Pcc3/>} />
        <Route path='/single' element={<SinglePage/>} />
      </Routes>
    </div>
  )
}

export default App