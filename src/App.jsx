import React from 'react'
import Dashboard from './pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Pcc1 from './pages/Pcc1'
import Pcc3 from './pages/Pcc3'
import Pcc4 from './pages/Pcc4'
import SingleMeter from './pages/SingleMeter'
import PageNotFound from './components/PageNotFound'
import DatewiseGraphs from './pages/DatewiseGraphs'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="/graphs" element={<DatewiseGraphs/>}/>
        <Route path='/Pcc1' element={<Pcc1/>} />
        <Route path='/Pcc3' element={<Pcc3/>} />
        <Route path='/Pcc4' element={<Pcc4/>} />
        <Route path='/SingleMeter/:id' element={<SingleMeter/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default App