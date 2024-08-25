import React, { useEffect, useState } from "react";
import CurrentTime from "../components/CurrentTime";
import Sidebar from "../components/Sidebar";
import { dark } from "../constants";
import Panels from "../components/Panels";
import RealTimePowerMeter from "../components/charts/RealTimePowerMeter";
import axios from "axios";
import RealTimeEnergyMeter from "../components/charts/RealTimeEnergyMeter";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [totalEnergy,setTotalEnergy] = useState(0)

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
    <div className="flex md:flex-row flex-col w-full">
      <Sidebar />
      <section className="bg-[#F1F4FC] dark:bg-[#1e1e1e] pr-5 py-2 w-full h-screen overflow-x-hidden overflow-x-hidde overflow-auto">
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
        </div>
        <div className="flex mx-3 gap-3 my-6 w-full">
            <Panels/>
            <div className="flex gap-3">
            <RealTimeEnergyMeter totalEnergy={data?.TotalNet_KWH_meter_1.toFixed(2)}/>
            <RealTimePowerMeter kva={data?.Total_KVA_meter_1.toFixed(2)}/>
            </div>
        </div>
        <div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
