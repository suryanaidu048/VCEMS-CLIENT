import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useTheme } from '../ThemeContext';
import { API_URL } from '../../data/api';

const EnergyConsumptionChart = () => {
    const [energyData, setEnergyData] = useState([]);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const fetchEnergyData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/energy-consumption`);
                setEnergyData(response.data);
            } catch (error) {
                console.error('Error fetching energy data:', error);
            }
        };

        fetchEnergyData();
        const interval = setInterval(fetchEnergyData, 10*60000); // Fetch data every 30 seconds

    return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white max-md:py-5 p-0 md:p-1 xl:p-3 2xl:p-5 w-full h-full rounded-lg min-[2200px]:text-2xl 2xl:text-xl text-sm max-[500px]:text-xs max-sm:h-full font-medium shadow font-OpenSans dark:bg-[#2c2c2c] dark:text-[#ffffff]">
            {/* <h2>Energy Consumption for the Last 4 Days and Today</h2> */}
            <ResponsiveContainer width="100%">
                <BarChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fill: theme == 'light'?'#000':'#fff' }}/>
                    <YAxis tick={{ fill: theme == 'light'?'#000':'#fff' }}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="energy" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EnergyConsumptionChart;