import React, { useEffect, useState } from 'react'
import CurrentTime from '../components/CurrentTime'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    <div>
        <header className='m-4 mx-10 flex justify-between'>
            <h1 className='text-2xl font-bold font-Montserrat'>Vishnu Energy Monitoring System</h1>
            <p className='font-bold font-Montserrat'><CurrentTime/></p>
        </header>
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
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>{data?.Total_KW_meter_1.toFixed(2)}</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
            </div>
            <div className='gap-8 flex flex-col text-center'>
                <p className='font-bold'>Energy(Kwh)</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>{data?.TotalNet_KWH_meter_1.toFixed(1)}</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
            </div>
            <div className='gap-8 flex flex-col text-center'>
                <p className='font-bold'>Power Factor</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>{data?.Avg_PF_meter_1.toFixed(2)}</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
            </div>
            <div className='gap-8 flex flex-col text-center'>
                <p className='font-bold'>KVA</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>{data?.Total_KVA_meter_1.toFixed(2)}</p>
                <p className='dash-param'>100</p>
                <p className='dash-param'>100</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard