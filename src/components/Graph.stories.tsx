import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { CssBaseline } from '@material-ui/core';
import { Graph } from './Graph';

export default {
  title: 'components/Graph',
  component: Graph,
  decorators: [
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
    ),
  ],
  argTypes: {
    dateFrom: { control: { type: 'date' } },
    dateTo: { control: { type: 'date' } },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Graph>> = (args) => (
  <Graph {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  dateFrom: new Date(),
  dateTo: new Date(),
  timeSum: 100,
  timeA: 10,
  timeB: 20,
  timeC: 30,
  timeD: 40,
};
