import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrentTime from '../components/CurrentTime';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import { dark, light } from '../constants';
import Sidebar from '../components/Sidebar'

const Pcc3 = () => {

  const [data, setData] = useState(null);
  const { theme, toggleTheme } = useTheme();

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
    <div className='flex md:flex-row flex-col'>
      <Sidebar/>
      <section className="bg-[#F1F4FC] dark:bg-[#1e1e1e] w-full text-[#1F2937] px-3 h-screen overflow-auto 2xl:px-5">
        <header className="justify-between flex items-center py-2">
        <h1 className="md:text-2xl 2xl:text-5xl text-xl p-4 font-Audiowide font-bold dark:text-[#e4e2e2]">
          Vishnu Energy Monitoring System
        </h1>
        <span className="flex flex-row justify-center items-center">
          <img
            className="w-[30px] h-[30px] cursor-pointer 2xl:w-[42px] 2xl:h-[42px]"
            src={theme === "light" ? dark : light}
            alt="add"
            onClick={toggleTheme}
          />
          <p className="md:text-sm 2xl:text-2xl text-xs text-center px-4 text-gray-500 font-Audiowide font-medium dark:text-[#eae8e8]">
            <CurrentTime />
          </p>
        </span>
      </header>
        <section className="flex justify-center items-center">
              <div className=" my-8 bg-gray-400 xl:px-10 py-5 rounded-lg md:px-7 px-2 overflow-x-auto">
                <h2 className='font-bold text-xl text-center underline my-2 mb-6'>PCC3</h2>
                <div className="flex rounded-md justify-between text-center items-center font-Montserrat font-bold pr-9 my-2 ">
                  <h2 className="rounded-full text-gray-400 w-64 ">
                    PCC
                  </h2>
                  <p className="rounded-full ">Power(Kw)</p>
                  <p className=" rounded-full">Energy(Kwh)</p>
                  <p className=" rounded-full pr-4">Power Factor</p>
                  <p className=" rounded-full pr-4">KVA</p>
                </div>

                <div className="">
                  <div className="param1-div">
                    <Link to='/SingleMeter/15'><h2
                      className='parameter'
                    >
                      VIT Block 2 Lighting
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_15.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_15.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_15.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_15.toFixed(2)}
                    </p>
                  </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/16'><h2 className='parameter'>
                        VIT Block 1 Lighting
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_16.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_16.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_16.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_16.toFixed(2)}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/17'><h2 className='parameter'>
                        VIT Block-2 A/C's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_17}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_17}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_17}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_17}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/18'><h2 className='parameter'>
                        VIT Block-3 lighting
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_18}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_18}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_18}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_18}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/19'><h2 className='parameter'>
                       VIT Block-4 A/C's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_19}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_19}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_19}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_19}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/20'><h2 className='parameter'>
                        4th Phase Boy's Hostel
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_20}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_20}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_20}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_20}
                      </p>
                    </div>
    
                    <div className="param1-div">
                    <Link to='/SingleMeter/21'><h2 className='parameter'>
                        VIT Block-1 AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_21}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_21}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_21}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_21}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/22'><h2 className='parameter'>
                        Seetha Canteen Lighting
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_22}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_22}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_22}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_22}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/23'><h2 className='parameter'>
                        53 rooms lighting supply
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_23}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_23}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_23}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_23}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/24'><h2 className='parameter'>
                        "3" Hostels (RPSP & GVVS)
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_24}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_24}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_24}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_24}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/25'><h2 className="parameter">
                        Medha Hostel
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_25}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_25}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_25}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_25}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/26'><h2 className='parameter'>
                        VDC Block 1A
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_26}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_26}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_26}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_26}
                      </p>
                    </div>
                    </div>
              </div>
            </section>
            </section>
    </div>
  )
}

export default Pcc3