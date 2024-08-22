import React from 'react'
import Dashboard from './pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Pcc1 from './pages/Pcc1'
import Pcc3 from './pages/Pcc3'
import SinglePage from './pages/SinglePage'
import Meter2 from './pages/singlepages/Meter2'
import Meter1 from './pages/singlepages/Meter1'
import Meter3 from './pages/singlepages/Meter3'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/Pcc1' element={<Pcc1/>} />
        <Route path='/Pcc3' element={<Pcc3/>} />
        <Route path='/Meter1' element={<Meter1/>} />
        <Route path='/Meter2' element={<Meter2/>} />
        <Route path='/Meter3' element={<Meter3/>} />
      </Routes>
    </div>
  )
}

export default App