import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Data = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today's date
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data every 30 seconds and when the date changes
  /* useEffect(() => {
    const fetchInterval = setInterval(() => {
      fetchSensorData(date);
    }, 30000); // 30000 ms = 30 seconds

    // Initial fetch when the component mounts or when the date changes
    fetchSensorData(date);

    // Cleanup interval on component unmount or when date changes
    return () => clearInterval(fetchInterval);
  }, [date]);

  // Function to fetch sensor data based on the selected date
  const fetchSensorData = async (selectedDate) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3306/api/sensordatabydate/${selectedDate}`);
      const data = await response.json();
      setSensorData(data);
      setError(null); // Clear any previous error
    } catch (err) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  }; */
  useEffect(() => {
    fetchSensorData(date);
  }, [date]);

  // Function to fetch sensor data based on the selected date
  const fetchSensorData = async (selectedDate) => {
    setLoading(true);
    try {
      const response = await fetch(`http://65.1.134.192:4000/api1/sensordatabydate/${selectedDate}`);
      const data = await response.json();
      setSensorData(data);
      setError(null); // Clear any previous error
    } catch (err) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  return (
    <section className="w-full h-fit flex md:flex-row flex-col">
      <Sidebar />
      <div className="p-6 bg-gray-100 min-h-screen w-full">
        <div className='flex justify-between mb-4'>
        <h1 className="text-2xl font-bold mb-4">Sensor Data Dashboard</h1>
        
        {/* Date Selector */}
        <div className=" flex gap-4 justify-center items-center">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="date">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)} // Update state when a date is selected
          />
        </div>
        </div>

        {/* Display loading state */}
        {loading && <div className="text-blue-500 text-lg">Loading...</div>}

        {/* Display error if any */}
        {error && <div className="text-red-500 text-lg">{error}</div>}

        {/* Display sensor data in a table */}
        {sensorData.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sensor Data for {date}</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Record ID</th>
                  <th className="py-2 px-4 border">Meter</th>
                  <th className="py-2 px-4 border">Total KW</th>
                  <th className="py-2 px-4 border">TotalNet KWH</th>
                  <th className="py-2 px-4 border">Total KVA</th>
                  <th className="py-2 px-4 border">Avg PF</th>
                  <th className="py-2 px-4 border">TotalNet KVAH</th>
                  <th className="py-2 px-4 border">Energy Consumption</th>
                </tr>
              </thead>
              <tbody>
                {sensorData.map((data, index) => (
                  <React.Fragment key={data.id}>
                    <tr>
                      <td className="py-2 px-4 border" rowSpan="4">{data.timestamp}</td>
                      <td className="py-2 px-4 border">Meter 70</td>
                      <td className="py-2 px-4 border">{data.Total_KW_meter_70}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KWH_meter_70}</td>
                      <td className="py-2 px-4 border">{data.Total_KVA_meter_70}</td>
                      <td className="py-2 px-4 border">{data.Avg_PF_meter_70}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KVAH_meter_70}</td>
                      <td className="py-2 px-4 border">{data.energy_consumption_meter_70}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Meter 40</td>
                      <td className="py-2 px-4 border">{data.Total_KW_meter_40}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KWH_meter_40}</td>
                      <td className="py-2 px-4 border">{data.Total_KVA_meter_40}</td>
                      <td className="py-2 px-4 border">{data.Avg_PF_meter_40}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KVAH_meter_40}</td>
                      <td className="py-2 px-4 border">{data.energy_consumption_meter_40}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Meter 69</td>
                      <td className="py-2 px-4 border">{data.Total_KW_meter_69}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KWH_meter_69}</td>
                      <td className="py-2 px-4 border">{data.Total_KVA_meter_69}</td>
                      <td className="py-2 px-4 border">{data.Avg_PF_meter_69}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KVAH_meter_69}</td>
                      <td className="py-2 px-4 border">{data.energy_consumption_meter_69}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Meter 41</td>
                      <td className="py-2 px-4 border">{data.Total_KW_meter_41}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KWH_meter_41}</td>
                      <td className="py-2 px-4 border">{data.Total_KVA_meter_41}</td>
                      <td className="py-2 px-4 border">{data.Avg_PF_meter_41}</td>
                      <td className="py-2 px-4 border">{data.TotalNet_KVAH_meter_41}</td>
                      <td className="py-2 px-4 border">{data.energy_consumption_meter_41}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* No data message */}
        {!loading && sensorData.length === 0 && (
          <p className="text-gray-600">No data found for the selected date.</p>
        )}
      </div>
    </section>
  );
};

export default Data;
