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
          "https://vems-api.onrender.com/api/sensordata"
        );
        setData(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1500); // Fetch data every 60 seconds

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
                    <Link to='/Meter1'><h2
                      className='parameter'
                    >
                      VDC Block 2&3 Lighting
                    </h2></Link>
                    <p
                      className='value'
                    >
                      {data?.Total_KW_meter_1.toFixed(2)}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.TotalNet_KWH_meter_1.toFixed(2)}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.Avg_PF_meter_1.toFixed(2)}
                    </p>
                    <p
                      className='value'
                    >
                      {data?.Total_KVA_meter_1.toFixed(2)}
                    </p>
                  </div>

                    <div className="param-div">
                    <Link to='/Meter2'><h2 className='parameter'>
                        VDC Block 2&3 AC's
                      </h2></Link>
                      <p className='value'>
                        {data?.Total_KW_meter_2.toFixed(2)}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_2.toFixed(2)}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_2.toFixed(2)}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_2.toFixed(2)}
                      </p>
                    </div>

                    <div className="param-div">
                    <Link to='/Meter3'><h2 className='parameter'>
                        Mini Auditorium AC's
                      </h2></Link>
                      <p className='value'>
                        {data?.Total_KW_meter_3}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_3}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_3}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_3}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        Sumedha Hostel AC's
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_4}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_4}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_4}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_4}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        Sita Auditorium AC's
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_5}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_5}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_5}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_5}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        VDC Girls Hostels
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_6}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_6}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_6}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_6}
                      </p>
                    </div>
    
                    <div className="param-div">
                      <h2 className='parameter'>
                        VDC Block-1 AC's
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_7}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_7}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_7}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_7}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        VDC Library AC's
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_8}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_8}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_8}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_8}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className="parameter">
                        SVECW Library AC's
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_9}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_9}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_9}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_9}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter'>
                        CSSD Building
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_10}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_10}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_10}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_10}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        Medha Hostel Lighting
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_11}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_11}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_11}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_11}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                       Geysers
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_12}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_12}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_12}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_12}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        Medha Hostel Geysers
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_13}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_13}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_13}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_13}
                      </p>
                    </div>

                    <div className="param-div">
                      <h2 className='parameter1'>
                        Hostel Geysers VDC
                      </h2>
                      <p className='value'>
                        {data?.Total_KW_meter_14}
                      </p>
                      <p className='value'>
                        {data?.TotalNet_KWH_meter_14}
                      </p>
                      <p className='value'>
                        {data?.Avg_PF_meter_14}
                      </p>
                      <p className='value'>
                        {data?.Total_KVA_meter_14}
                      </p>
                    </div>
                    </div>
              </div>
            </section>
    </div>
  )
}

export default Pcc3