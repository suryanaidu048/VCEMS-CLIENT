import React from 'react'
import CurrentTime from '../components/CurrentTime'

const SinglePage = () => {
  return (
    <div>
        <header className='m-4 mx-10 flex justify-between'>
            <h1 className='text-2xl font-bold font-Montserrat'>Vishnu Energy Monitoring System</h1>
            <p className='font-bold font-Montserrat'><CurrentTime /></p>
        </header>
        <div className='flex gap-4 text-lg my-10 mx-28'>
            <div className='border border-black p-4 rounded-xl'>
                <h2 className='font-semibold'>Phase Voltage</h2>
                <p>R - </p>
                <p>Y - </p>
                <p>B - </p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <h2 className='font-semibold'>Line Voltage</h2>
                <p>R - </p>
                <p>Y - </p>
                <p>B - </p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <h2 className='font-semibold'>Current Phases</h2>
                <p>R - </p>
                <p>Y - </p>
                <p>B - </p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <p>KW - </p>
                <p>KVA - </p>
                <p>KVARH - </p>
            </div>
        </div>
    </div>
  )
}

export default SinglePage