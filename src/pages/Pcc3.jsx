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
                    <Link to='/SingleMeter/42'><h2
                      className='parameter'
                    >
                     42
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_42.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_42.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_42.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_42.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/43'><h2
                      className='parameter'
                    >
                      43
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_43.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_43.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_43.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_43.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/44'><h2
                      className='parameter'
                    >
                      44
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_44.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_44.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_44.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_44.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/45'><h2
                      className='parameter'
                    >
                      45
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_45.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_45.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_45.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_45.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/46'><h2
                      className='parameter'
                    >
                      46
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_46.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_46.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_46.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_46.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/47'><h2
                      className='parameter'
                    >
                      47
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_47.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_47.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_47.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_47.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/48'><h2
                      className='parameter'
                    >
                      48
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_48.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_48.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_48.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_48.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/49'><h2
                      className='parameter'
                    >
                      49
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_49.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_49.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_49.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_49.toFixed(2)}
                    </p>
                  </div>

                  <div className="param1-div">
                    <Link to='/SingleMeter/50'><h2
                      className='parameter'
                    >
                      50
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_50.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_50.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_50.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_50.toFixed(2)}
                    </p>
                  </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/51'><h2 className='parameter'>
                        51
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_51.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_51.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_51.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_51.toFixed(2)}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/52'><h2 className='parameter'>
                        52
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_52}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_52}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_52}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_52}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/53'><h2 className='parameter'>
                        53
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_53}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_53}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_53}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_53}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/54'><h2 className='parameter'>
                        54
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_54}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_54}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_54}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_54}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/55'><h2 className='parameter'>
                        55
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_55}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_55}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_55}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_55}
                      </p>
                    </div>
    
                    <div className="param1-div">
                    <Link to='/SingleMeter/56'><h2 className='parameter'>
                        56
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_56}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_56}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_56}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_56}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/57'><h2 className='parameter'>
                        57
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_57}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_57}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_57}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_57}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/58'><h2 className="parameter">
                        58
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_58}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_58}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_58}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_58}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/59'><h2 className='parameter'>
                        59
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_59}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_59}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_59}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_59}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/60'><h2 className='parameter'>
                        60
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_60}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_60}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_60}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_60}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/61'><h2 className='parameter'>
                       61
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_61}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_61}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_61}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_61}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/62'><h2 className='parameter'>
                        62
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_62}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_62}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_62}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_62}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/63'><h2 className='parameter'>
                        63
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_63}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_63}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_63}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_63}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/64'><h2 className='parameter'>
                        64
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_64}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_64}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_64}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_64}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/65'><h2 className='parameter'>
                        65
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_65}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_65}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_65}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_65}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/66'><h2 className='parameter'>
                        66
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_66}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_66}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_66}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_66}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/67'><h2 className='parameter'>
                        67
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_67}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_67}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_67}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_67}
                      </p>
                    </div>

                    <h2 className='text-center text-lg font-semibold underline mt-4 my-2'>PCC3-A</h2>
                    <div className="param1-div">
                    <Link to='/SingleMeter/1'><h2
                      className='parameter'
                    >
                      VDC Block 2&3 Lighting
                    </h2></Link>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KW_meter_1.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.TotalNet_KWH_meter_1.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Avg_PF_meter_1.toFixed(2)}
                    </p>
                    <p
                      className='param-value'
                    >
                      {data?.Total_KVA_meter_1.toFixed(2)}
                    </p>
                  </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/2'><h2 className='parameter'>
                        VDC Block 2&3 AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_2.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_2.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_2.toFixed(2)}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_2.toFixed(2)}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/3'><h2 className='parameter'>
                        Mini Auditorium AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_3}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_3}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_3}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_3}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/4'><h2 className='parameter'>
                        Sumedha Hostel AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_4}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_4}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_4}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_4}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/5'><h2 className='parameter'>
                        Sita Auditorium AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_5}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_5}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_5}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_5}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/6'><h2 className='parameter'>
                        VDC Girls Hostels
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_6}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_6}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_6}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_6}
                      </p>
                    </div>
    
                    <div className="param1-div">
                    <Link to='/SingleMeter/7'><h2 className='parameter'>
                        VDC Block-1 AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_7}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_7}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_7}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_7}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/8'><h2 className='parameter'>
                        VDC Library AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_8}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_8}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_8}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_8}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/9'><h2 className="parameter">
                        SVECW Library AC's
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_9}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_9}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_9}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_9}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/10'><h2 className='parameter'>
                        CSSD Building
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_10}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_10}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_10}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_10}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/11'><h2 className='parameter'>
                        Medha Hostel Lighting
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_11}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_11}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_11}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_11}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/12'><h2 className='parameter'>
                       Geysers
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_12}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_12}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_12}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_12}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/13'><h2 className='parameter'>
                        Medha Hostel Geysers
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_13}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_13}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_13}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_13}
                      </p>
                    </div>

                    <div className="param1-div">
                    <Link to='/SingleMeter/14'><h2 className='parameter'>
                        Hostel Geysers VDC
                      </h2></Link>
                      <p className='param-value'>
                        {data?.Total_KW_meter_14}
                      </p>
                      <p className='param-value'>
                        {data?.TotalNet_KWH_meter_14}
                      </p>
                      <p className='param-value'>
                        {data?.Avg_PF_meter_14}
                      </p>
                      <p className='param-value'>
                        {data?.Total_KVA_meter_14}
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