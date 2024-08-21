import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrentTime from '../components/CurrentTime';
import { Link } from 'react-router-dom';

const Pcc3 = () => {

    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://energybackend-v86d.onrender.com/api/sensordata1"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000); // Fetch data every 60 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
        <header className='m-4 mx-10 flex justify-between'>
            <h1 className='text-2xl font-bold font-Montserrat'>Vishnu Energy Monitoring System</h1>
            <p className='font-bold font-Montserrat'><CurrentTime/></p>
        </header>
        <section className="flex justify-center items-center">
              <div className="w-fit my-10 bg-gray-400 xl:px-10 py-5 rounded-lg md:px-7 px-2">
                <div className="flex rounded-md justify-between text-center items-center font-Montserrat font-bold pr-4 my-2 ">
                  <h2 className="rounded-full text-gray-400 w-64 ">
                    PCC
                  </h2>
                  <p className="rounded-full ">Power(Kw)</p>
                  <p className=" rounded-full">Energy(Kwh)</p>
                  <p className=" rounded-full">Power Factor</p>
                  <p className=" rounded-full">KVA</p>
                </div>

                <div className="">
                  <div className="param-div">
                    <Link to='/single'><h2
                      className='parameter'
                    >
                      VDC Block 2&3 Lighting
                    </h2></Link>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.lineVlotageR}
                    </p>
                  </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        VDC Block 2&3 AC's
                      </h2>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageY}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        Mini Auditorium AC's
                      </h2>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                      <p className='value'>
                        {data?.lineVoltageB}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        Sumedha Hostel AC's
                      </h2>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                      <p className='value'>
                        {data?.phaseVolate1}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        Sita Auditorium AC's
                      </h2>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage2}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        VDC Girls Hostels
                      </h2>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                      <p className='value'>
                        {data?.phaseVoltage3}
                      </p>
                    </div>
    
                    <div className="param-div">
                      <h2 className='parameter'>
                        VDC Block-1 AC's
                      </h2>
                      <p className='value'>
                        {data?.current1}
                      </p>
                      <p className='value'>
                        {data?.current1}
                      </p>
                      <p className='value'>
                        {data?.current1}
                      </p>
                      <p className='value'>
                        {data?.current1}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        VDC Library AC's
                      </h2>
                      <p className='value'>
                        {data?.current2}
                      </p>
                      <p className='value'>
                        {data?.current2}
                      </p>
                      <p className='value'>
                        {data?.current2}
                      </p>
                      <p className='value'>
                        {data?.current2}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className="parameter">
                        SVECW Library AC's
                      </h2>
                      <p className='value'>
                        {data?.current3}
                      </p>
                      <p className='value'>
                        {data?.current3}
                      </p>
                      <p className='value'>
                        {data?.current3}
                      </p>
                      <p className='value'>
                        {data?.current3}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        CSSD Building
                      </h2>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                      <p className='value'>
                        {data?.totalKW}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        Medha Hostel Lighting
                      </h2>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                      <p className='value'>
                        {data?.totalKVA}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                       Geysers
                      </h2>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                      <p className='value'>
                        {data?.powerFactor1}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        Medha Hostel Geysers
                      </h2>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                      <p className='value'>
                        {data?.powerFactor2}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        Hostel Geysers VDC
                      </h2>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                      <p className='value'>
                        {data?.powerFactor3}
                      </p>
                    </div>
                    </div>
              </div>
            </section>
    </div>
  )
}

export default Pcc3