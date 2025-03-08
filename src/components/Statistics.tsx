import React, { useState } from 'react';
import { BarChart3Icon, DropletIcon } from 'lucide-react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Mock data for different locations
const locationData = {
  'Malhar': {
    barData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Water Usage (KL)',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }]
    },
    pieData: {
      labels: ['Residential', 'Academic', 'Labs', 'Gardens'],
      datasets: [{
        data: [30, 25, 25, 20],
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(168, 85, 247, 0.5)',
          'rgba(249, 115, 22, 0.5)',
        ],
      }]
    },
    dailyUsage: '250,000',
    conservation: '15',
    participants: '2,500'
  },
  'Kedhar': {
    barData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Water Usage (KL)',
        data: [75, 69, 90, 71, 76, 65],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }]
    },
    pieData: {
      labels: ['Residential', 'Academic', 'Labs', 'Gardens'],
      datasets: [{
        data: [35, 20, 30, 15],
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(168, 85, 247, 0.5)',
          'rgba(249, 115, 22, 0.5)',
        ],
      }]
    },
    dailyUsage: '320,000',
    conservation: '12',
    participants: '3,200'
  },
  'Des': {
    barData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Water Usage (KL)',
        data: [55, 49, 60, 71, 46, 45],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }]
    },
    pieData: {
      labels: ['Residential', 'Academic', 'Labs', 'Gardens'],
      datasets: [{
        data: [25, 30, 20, 25],
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(168, 85, 247, 0.5)',
          'rgba(249, 115, 22, 0.5)',
        ],
      }]
    },
    dailyUsage: '180,000',
    conservation: '18',
    participants: '1,800'
  }
};

const Statistics = () => {
  const [selectedLocation, setSelectedLocation] = useState('Malhar');
  const currentData = locationData[selectedLocation];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <section id="statistics" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BarChart3Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Water Usage Statistics</h2>
          <div className="max-w-xs mx-auto">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-4"
            >
              {Object.keys(locationData).map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <DropletIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Daily Usage</h3>
            <p className="text-3xl font-bold text-center text-blue-600">{currentData.dailyUsage} L</p>
            <p className="text-gray-600 text-center mt-2">Average daily water consumption</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <DropletIcon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Conservation</h3>
            <p className="text-3xl font-bold text-center text-green-600">{currentData.conservation}%</p>
            <p className="text-gray-600 text-center mt-2">Reduction from last year</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <DropletIcon className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Participation</h3>
            <p className="text-3xl font-bold text-center text-purple-600">{currentData.participants}+</p>
            <p className="text-gray-600 text-center mt-2">Survey participants</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">Monthly Water Usage Trends</h3>
            <Bar options={chartOptions} data={currentData.barData} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">Water Usage Distribution</h3>
            <Pie options={chartOptions} data={currentData.pieData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;