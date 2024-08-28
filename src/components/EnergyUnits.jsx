import React from "react";

const EnergyUnits = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow font-OpenSans dark:bg-[#2c2c2c] text-center">
        <h2 className="font-bold text-xl text-center">
          Energy Consumption
        </h2>
        <p className="font-medium text-lg my-2">Units Consumed Today</p>
        <p className="bg-gray-100 mx-4 p-2 rou">100</p>
      </div>
    </div>
  );
};

export default EnergyUnits;
