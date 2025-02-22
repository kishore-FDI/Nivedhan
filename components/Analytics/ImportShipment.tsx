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
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Import Shipments by Month',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        max: 6,
      },
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
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div className="size-[90%] w-[70%] p-4 bg-white rounded-lg shadow-md">
      <Line options={options} data={data} />
    </div>
  );
};

export default ImportShipment;
