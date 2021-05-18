import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

interface Props {}

export const Graph: React.VFC<Props> = (props) => {
  const type: ChartType = 'bar';
  const data: ChartData = {
    labels: ['稼働時間'],
    datasets: [
      {
        label: '案件A',
        data: [4],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
      {
        label: '案件B',
        data: [8],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
      {
        label: '案件C',
        data: [12],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
      {
        label: '案件D',
        data: [16],
        backgroundColor: ['rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: true, text: '2021/05/17～' },
      // tooltip: { enabled: false },
      // legend: { display: false },
    },
    indexAxis: 'y',
    scales: {
      y: {
        ticks: { display: false },
        stacked: true,
        beginAtZero: true,
      },
      x: { stacked: true },
    },
  };

  return (
    <div style={{ position: 'relative', height: '150px' }}>
      <Bar type={type} data={data} options={options} />
    </div>
  );
};
