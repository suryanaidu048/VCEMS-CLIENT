import React, { useEffect, useState } from 'react'
import CurrentTime from '../components/CurrentTime'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { dark } from '../constants'

const Dashboard = () => {
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

        const interval = setInterval(fetchData, 10000); 

        return () => clearInterval(interval); 
    }, []);

  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      <section className="bg-[#F1F4FC] dark:bg-[#1e1e1e] w-full h-screen overflow-auto">
        <div className="mx-2 my-2">
          <div className="flex justify-between mx-10 font-Audiowide dark:text-[#e4e2e2]">
            <h2 className="font-bold text-2xl ">Energy Monitoring System</h2>
            <div className="flex flex-row justify-center text-sm items-center font-semibold gap-2">
              <img
                className="w-[30px] h-[30px] cursor-pointer 2xl:w-[42px] 2xl:h-[42px]"
                src={dark}
                alt="add"
              />
              <CurrentTime />
            </div>
          </div>
        <div className='flex justify-center'>
        <div className='flex justify-between my-12 w-8/12 text-xl p-10 rounded-xl bg-[#bdbdbd]'>
            <div className='font-medium gap-8 flex flex-col'>
                <p className='font-bold text-[#bdbdbd]'>PCC</p>
                <Link to='/Pcc1'><p className='bg-[#6eabbf] px-6 py-1 rounded-full cursor-pointer'>PCC1</p></Link>
                <Link to='/Pcc2'><p className='bg-[#6eabbf] px-6 py-1 rounded-full cursor-pointer'>PCC2</p></Link>
                <Link to='/Pcc3'><p className='bg-[#6eabbf] px-6 py-1 rounded-full cursor-pointer'>PCC3</p></Link>
                <Link to='/Pcc4'><p className='bg-[#6eabbf] px-6 py-1 rounded-full cursor-pointer'>PCC4</p></Link>
                <Link to='/Pcc5'><p className='bg-[#6eabbf] px-6 py-1 rounded-full cursor-pointer'>PCC5</p></Link>
            </div>
            <div className='gap-8 flex flex-col text-center'>
                <p className='font-bold'>Power(Kw)</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>{data?.Total_KW_meter_1.toFixed(2)}</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
            </div>
            <div className='gap-8 flex flex-col text-center'>
                <p className='font-bold'>Energy(Kwh)</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>{data?.TotalNet_KWH_meter_1.toFixed(1)}</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
            </div>
            <div className='gap-8 flex flex-col text-center'>
                <p className='font-bold'>Power Factor</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>{data?.Avg_PF_meter_1.toFixed(2)}</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
            </div>
            <div className='gap-8 flex flex-col text-center'>
                <p className='font-bold'>KVA</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>{data?.Total_KVA_meter_1.toFixed(2)}</p>
                <p className='dash-param'>0</p>
                <p className='dash-param'>0</p>
            </div>
        </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default Dashboard