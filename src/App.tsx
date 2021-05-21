import React, { useState } from 'react';
import { MyButton } from './components/MyButton';
import { PassPropState } from './components/PassPropState';
import { PassPropState2 } from './components/PassPropState2';
import { Graph } from './components/Graph';
import { BarGraph } from './components/BarGraph';
import { Divider } from '@material-ui/core';
import { DatePicker } from './components/DatePicker';

const graphProp = {
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Dataset',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        axis: 'y',
        beginAtZero: true,
        reverse: true,
      },
    },
  },
};

const App: React.VFC = () => {
  const [value, setValue] = useState<string>('default');

  return (
    <>
      <BarGraph {...graphProp} />
      <Divider />
      <DatePicker />
      <Divider />
      <Graph
        {...{
          dateFrom: new Date(),
          dateTo: new Date(),
          timeSum: 100,
          timeA: 10,
          timeB: 20,
          timeC: 30,
          timeD: 40,
        }}
      />
      <Divider />
      <MyButton
        variant="contained"
        color="primary"
        label="Primary Button"
        onClick={() => {
          console.log('Primary Button');
        }}
      />
      <Divider />
      <PassPropState defaultValue={''} />
      <Divider />
      <PassPropState2 state={[value, setValue]} />
    </>
  );
};

export default App;
