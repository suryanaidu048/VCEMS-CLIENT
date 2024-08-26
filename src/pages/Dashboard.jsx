import React from 'react'
import Sidebar from '../Components/Sidebar'
import Home from './Home'

const Dashboard = () => {
  return (
    <div>
        <section className='h-[100vh] flex md:flex-row flex-col'>
        <Sidebar/>
        <Home/>
        </section>
    </div>
  )
}

export default Dashboard