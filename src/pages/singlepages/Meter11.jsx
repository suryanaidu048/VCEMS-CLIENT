import React, { useEffect, useState } from 'react'
import CurrentTime from '../../components/CurrentTime'
import axios from 'axios';

const Meter11 = () => {
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
            <p className='font-bold font-Montserrat'><CurrentTime /></p>
        </header>

        <div className='flex flex-col items-center my-10'>
        <h2 className='font-bold text-xl text-center'>Medha Hostel Lighting</h2>
        <div className='flex gap-4 justify-center text-lg my-10 w-9/12'>
            <div className='border border-black p-4 rounded-xl'>
                <h2 className='font-semibold'>Phase Voltage</h2>
                <p>R - {data?.Voltage_V1N_meter_11}</p>
                <p>Y - {data?.Voltage_V2N_meter_11}</p>
                <p>B - {data?.Voltage_V3N_meter_11}</p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <h2 className='font-semibold'>Line Voltage</h2>
                <p>R - {data?.Voltage_V12_meter_11}</p>
                <p>Y - {data?.Voltage_V23_meter_11}</p>
                <p>B - {data?.Voltage_V31_meter_11}</p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <h2 className='font-semibold'>Current Phases</h2>
                <p>R - {data?.Current_I1_meter_11}</p>
                <p>Y - {data?.Current_I2_meter_11}</p>
                <p>B - {data?.Current_I3_meter_11}</p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <p>KW - {data?.Total_KW_meter_11}</p>
                <p>KVA - {data?.Total_KVA_meter_11}</p>
                <p>KVAR - {data?.Total_KVAR_meter_11}</p>
                <p>Power Factor - {data?.Avg_PF_meter_11}</p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <p>KWH - {data?.TotalNet_KWH_meter_11}</p>
                <p>KVAH - {data?.TotalNet_KVAH_meter_11}</p>
                <p>KVARH - {data?.TotalNet_KVARH_meter_11}</p>
                <p>Neutral Current - {data?.Neutral_Current_meter_11}</p>
            </div>
            <div className='border border-black p-4 rounded-xl'>
                <p>THD_V1 - {data?.THD_V1_meter_11}</p>
                <p>THD_V2 - {data?.THD_V2_meter_11}</p>
                <p>THD_V3 - {data?.THD_V3_meter_11}</p>
                <p>THD_V4 - {data?.THD_I1_meter_11}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Meter11