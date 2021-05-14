import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface Props {
  data: ChartData;
  options?: ChartOptions;
}

export const BarGraph: React.VFC<Props> = (props) => {
  return <Bar type="bar" {...props} />;
};
