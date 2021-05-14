import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { CssBaseline } from '@material-ui/core';
import { BarGraph } from './BarGraph';

export default {
  title: 'components/BarGraph',
  component: BarGraph,
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps<typeof BarGraph>> = (args) => (
  <BarGraph {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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
} as ComponentProps<typeof BarGraph>;
