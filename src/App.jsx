import React from 'react'
import Dashboard from './pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Pcc1 from './pages/Pcc1'
import Pcc2 from './pages/Pcc2'
import Pcc3 from './pages/Pcc3'
import SingleMeter from './pages/SingleMeter'
import PageNotFound from './components/PageNotFound'
import DatewiseGraphs from './pages/DatewiseGraphs'
import Data from './pages/Data'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="/graphs" element={<DatewiseGraphs/>}/>
        <Route path='/Pcc1' element={<Pcc1/>} />
        <Route path='/Pcc2' element={<Pcc2/>} />
        <Route path='/Pcc3' element={<Pcc3/>} />
        <Route path='/SingleMeter/:id' element={<SingleMeter/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path="/sensordata" element={<Data/>}/>
      </Routes>
    </div>
  )
}

export default App