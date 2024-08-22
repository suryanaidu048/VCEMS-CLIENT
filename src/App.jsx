import React from 'react'
import Dashboard from './pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Pcc1 from './pages/Pcc1'
import Pcc3 from './pages/Pcc3'
import SingleMeter from './pages/SingleMeter'
import { Meter1, Meter10, Meter11, Meter12, Meter13, Meter14, Meter2, Meter3, Meter4, Meter5, Meter6, Meter7, Meter8, Meter9 } from './pages/singlepages'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/Pcc1' element={<Pcc1/>} />
        <Route path='/Pcc3' element={<Pcc3/>} />
        <Route path='/SingleMeter/:id' element={<SingleMeter/>} />
        <Route path='/Meter2' element={<Meter2/>} />
        <Route path='/Meter3' element={<Meter3/>} />
        <Route path='/Meter4' element={<Meter4/>} />
        <Route path='/Meter5' element={<Meter5/>} />
        <Route path='/Meter6' element={<Meter6/>} />
        <Route path='/Meter7' element={<Meter7/>} />
        <Route path='/Meter8' element={<Meter8/>} />
        <Route path='/Meter9' element={<Meter9/>} />
        <Route path='/Meter10' element={<Meter10/>} />
        <Route path='/Meter11' element={<Meter11/>} />
        <Route path='/Meter12' element={<Meter12/>} />
        <Route path='/Meter13' element={<Meter13/>} />
        <Route path='/Meter14' element={<Meter14/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default App