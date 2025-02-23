import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ImportShipment = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 10,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Import Shipments by Month',
        font: {
          size: 16
        },
        padding: 20
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: {
            size: 11
          }
        },
        max: 6,
      },
      x: {
        ticks: {
          font: {
            size: 11
          }
        }
      }
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Number of Shipments',
        data: [5, 3, 5, 3, 3, 1, 2, 4, 3, 5, 3, 3],
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        tension: 0.1,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-[300px] sm:h-[400px] p-2 sm:p-4 bg-white rounded-lg shadow-md">
      <Line options={options} data={data} />
    </div>
  );
};

export default ImportShipment;
