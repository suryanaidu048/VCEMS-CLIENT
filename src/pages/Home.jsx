import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentTime from "../components/CurrentTime";
import Loading from '../components/Loading'
import { useTheme } from "../components/ThemeContext";
import { dark, light } from "../constants";
import RealTimeEnergyMeter from '../components/charts/RealTimeEnergyMeter';
import RealTimePowerMeter from "../components/charts/RealTimePowerMeter";
import { Link } from "react-router-dom";
import { API_URL } from "../data/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PowerFactorCharts from "../components/charts/PowerFactorCharts";
import PowerLineChart from "../components/charts/PowerLineChart";

const Home = () => {
  const [data, setData] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const [currentEnergy, setCurrentEnergy] = useState(null);
  const [previousDayEnergy, setPreviousDayEnergy] = useState(null);
  const [todayConsumption, setTodayConsumption] = useState(null);
  const [totalEnergy, setTotalEnergy] = useState(0);

  const notify = () => toast.error("Energy limit exceed!");
  
  /* useEffect(() => {
    const fetchPreviousDayEnergy = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/previousDayEnergy`
        );
        setPreviousDayEnergy(response.data.initialEnergyValue);
      } catch (error) {
        console.error("Error fetching previous day energy:", error);
      }
    };

    fetchPreviousDayEnergy();
  }, []); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vems-api.onrender.com/api/sensordata"
        );
        setData(response.data[0]);
        setCurrentEnergy(response.data[0].TotalNet_KWH_meter_1);
      
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000); // Fetch data every 60 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  /* useEffect(() => {
    if (previousDayEnergy !== null && currentEnergy !== null) {
      setTodayConsumption((currentEnergy - previousDayEnergy).toFixed(3));
      setTotalEnergy((currentEnergy - previousDayEnergy + 300).toFixed(3));
    }
  }, [previousDayEnergy, currentEnergy]); */

  if (!data) {
    return <div className="flex justify-center items-center w-full"><Loading/></div>;
  }

  return (
    <section className="bg-[#F1F4FC] dark:bg-[#1e1e1e] w-full text-[#1F2937] px-3 h-screen overflow-auto 2xl:px-5">
      <ToastContainer />
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
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 mt-2 2xl:mt-6">
        <div className="w-full flex flex-col justify-around bg-[#a4a4e3] rounded-lg min-[2000px]:text-4xl xl:text-xl text-lg max-[500px]:text-base font-medium shadow font-OpenSans py-4 px-3 2xl:px-7 max-[500px]:px-0">
          <div className="flex rounded-md px-2 text-center items-center font-Montserrat font-bold justify-between my-2 max-[450px]:px-1">
            <h2 className=" px-5 rounded-full max-[450px]:px-2 min-[2000px]:px-6 2xl:py-2">
              PCC
            </h2>
            <p className=" ml-3 rounded-full max-[450px]:px-2 min-[2000px]:px-6 2xl:py-2">
              Power <span className="text-sm">(Kw)</span>
            </p>
            <p className=" rounded-full max-[450px]:px-2 min-[2000px]:px-6 2xl:py-2">
              Energy <span className="text-sm">(Kwh)</span>
            </p>
            <p className=" rounded-full max-[450px]:px-2 min-[2000px]:px-6 2xl:py-2">
              PowerFactor
            </p>
            <p className=" rounded-full max-[450px]:px-2 min-[2000px]:px-6 2xl:py-2 mr-3">
              KVA
            </p>
          </div>
          <div className="param-div">
            <Link to='/pcc1'><h2 className="pccs">
              PCC1
            </h2></Link>
            <p className="value">
              {data?.Total_KW_meter_1.toFixed(2)}
            </p>
            <p className="value">
                {!todayConsumption? <span>0.00000</span>:todayConsumption}
            </p>
            <p className="value">
              {data?.Avg_PF_meter_1.toFixed(3)}
            </p>
            <p className="value">
              {data?.Total_KVA_meter_1.toFixed(2)}
            </p>
          </div>
          <div className="param-div">
            <Link to='/pcc2'><h2 className="pccs">
              PCC2
            </h2></Link>
            <p className="value">
              {data?.Total_KW_meter_1.toFixed(2)}
            </p>
            <p className="value">
                {!todayConsumption? <span>0.00000</span>:todayConsumption}
            </p>
            <p className="value">
              {data?.Avg_PF_meter_1.toFixed(3)}
            </p>
            <p className="value">
              {data?.Total_KVA_meter_1.toFixed(2)}
            </p>
          </div>
          <div className="param-div">
          <Link to='/pcc3'><h2 className="pccs">
              PCC3
            </h2></Link>
            <p className="value">
              {data?.Total_KW_meter_1.toFixed(2)}
            </p>
            <p className="value">
                {!todayConsumption? <span>0.00000</span>:todayConsumption}
            </p>
            <p className="value">
              {data?.Avg_PF_meter_1.toFixed(3)}
            </p>
            <p className="value">
              {data?.Total_KVA_meter_1.toFixed(2)}
            </p>
          </div>
          <div className="param-div">
            <Link to='/pcc4'><h2 className="pccs">
              PCC4
            </h2></Link>
            <p className="value">
              {data?.Total_KW_meter_1.toFixed(2)}
            </p>
            <p className="value">
                {!todayConsumption? <span>0.00000</span>:todayConsumption}
            </p>
            <p className="value">
              {data?.Avg_PF_meter_1.toFixed(3)}
            </p>
            <p className="value">
              {data?.Total_KVA_meter_1.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <RealTimeEnergyMeter totalEnergy={data?.TotalNet_KWH_meter_1.toFixed(2)} />
          <div className="flex flex-col gap-4">
            <RealTimePowerMeter kva={data?.Total_KW_meter_1.toFixed(2)} />
            <PowerFactorCharts powerFactor={data?.Avg_PF_meter_1.toFixed(3)} /> 
          </div>
        </div>
      </div>
      <div className="flex md:flex-row gap-4 flex-col h-[44%] mt-4 ">
        <PowerLineChart/>
        <PowerLineChart/>
      </div>
    </section>
  );
};

export default Home;